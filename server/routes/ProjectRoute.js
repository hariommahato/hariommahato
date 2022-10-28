const {Router} =require('express');
const upload = require('../middleware/uploads')
const {getProject,saveProject,updateProject,deleteProject} =require( '../controllers/ProjectController')
const projectRouter=Router();
projectRouter.get('/get',getProject);
projectRouter.post('/create',upload.single('image'),saveProject);
projectRouter.patch('/:id',updateProject);
projectRouter.delete('/:id',deleteProject)

module.exports=projectRouter;

const {Router} =require('express');
const {getAbout,updateAbout,deleteAbout,saveAbout} =require( '../controllers/AboutController.js')


const aboutRouter=Router();
aboutRouter.get('/get',getAbout);
aboutRouter.post('/create',saveAbout);
aboutRouter.patch('/:id',updateAbout);
aboutRouter.delete('/:id',deleteAbout)

module.exports=aboutRouter;

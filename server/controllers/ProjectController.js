const ProjectModel = require("../models/ProjectModel");
const mongoose = require("mongoose");
module.exports.getProject = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.saveProject = async(req, res) => {

    const title=req.body.title;
    const image=`uploads/${req.file.filename}`;
    const link=req.body.link;

    const newProjectDetail= new ProjectModel({ title,image,link})
    try {
      await newProjectDetail.save();
  
      res.status(201).json(newProjectDetail );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
  
   
  };
  
  module.exports.updateProject = async (req, res) => {
    let title=req.body.title;
    let link=req.body.link;
    let image=`uploads/${req.file.filename}`;
    let id=req.params.id;

    ProjectModel.findOneAndUpdate(id,{$set:{title,link,image}},
     { new:true},
     (err,data)=>{
      if(data==null){
        res.send("nothing found")
      }
      else{
        res.send(data)
      }
     }
      )
  };
  
  module.exports.deleteProject = async (req, res) => {
    const { id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
    await ProjectModel.findByIdAndRemove(id);
  
    res.json({ message: "Post deleted successfully." });
  }
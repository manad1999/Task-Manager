const { model } = require("mongoose");

const Task = require('../models/task');

const getAlltasks = async (req, res) =>{
    try{
        const tasks = await Task.find({}); 
        console.log(typeof (tasks));
        res.status(200).json({tasks});
    }
    catch(err)
    {
        res.status(500).json({msg : error});
    }
    
}

const getTasks = async (req, res) =>{
    try{
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id:taskID});

        if(!task)
        {
            return res.status(404).json({ msg: `No task with id: ${taskID}`})
        }
        
        res.status(200).json({task});
    }
    catch(error)
    {
        res.status(404).json({msg:error});
    }
}

const createTask =  async (req, res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(200).json({task});
    }
    catch(error)
    {
        res.status(500).json({msg : error});

    }
    
}

const updateTasks = async (req, res) =>{
    try
    {
        console.log(req.body);
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})

        if(!task)
        {
            return res.status(404).send("No Task Found");
        }
        console.log(task);
        res.status(200).json({task});
    }
    catch(error)
    {
        res.send(error);
    }
    
  
}

const deleteTasks = async (req, res) =>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        res.status(200).send({msg: "Task Deleted"});
    }
    catch(error)
    {
        res.status(404).json({msg:error});
    }
}

module.exports = {getAlltasks,getTasks,createTask,updateTasks,deleteTasks};
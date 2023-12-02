const express = require('express');
const router = express.Router();
const Tasks  = require('../models/taskModel')

router.post('/', async (req, res) => {
try{
    const {task_name} = req.body;
    const taskAdded = await Tasks.create({
     task_name : task_name
    })
 
    res.status(201).json(taskAdded)
}catch(error){
   res.status(400).json({error : error.message})
}
})



router.get('/', async (req, res) => {
    try{
        const {task_name} = req.body;
        const showTasks = await Tasks.find()
        res.status(201).json(showTasks)
    }catch(error){
       res.status(400).json({error : error.message})
    }
    })



    

router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params
        // const {task_name} = req.body;
        const showTasks = await Tasks.findByIdAndDelete({_id : id})
        res.status(201).json({'message' : 'Record Deleted successfully !!'})
    }catch(error){
       res.status(400).json({error : error.message})
    }
    })

        

router.patch('/:id', async (req, res) => {
    try{
        const {id} = req.params
        const {task_name} = req.body;
        const showTasks = await Tasks.findByIdAndUpdate(id, req.body)
        res.status(201).json({'message' : 'Record Updated successfully !!'})
    }catch(error){
       res.status(400).json({error : error.message})
    }
    })

module.exports = router

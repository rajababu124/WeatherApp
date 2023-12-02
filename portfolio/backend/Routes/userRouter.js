const express = require('express')
const router = express.Router();
const User = require('../models/userModel');
const mongoose = require('mongoose');

// Create Operation
router.post('/', async (req, res) => {
    try {
      const { name, email, phone, password } = req.body;
      const userAdded = await User.create({
        name: name,
        email: email,
        phone : phone,
        password: password,
      });
      console.log
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });
  
  // Read Operation
  try{
      router.get('/', async (req, res) => {
          showAll = await User.find();
          res.status(201).json(showAll);
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  
  // Delete Operation
  router.delete('/:id', async (req, res) => {
  const {id} = req.params;
  try{
          deleteThis = await User.findByIdAndDelete({_id : id});
          res.status(200).json({'message' : 'Deleted successfully !!'});
      }
   catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
});



 // Update Operation
 router.patch('/:id', async (req, res) => {
    const {id} = req.params;
    const {name, email, phone, password} = req.body;
    try{
            updateUser = await User.findByIdAndUpdate(id, req.body, {new:true});
            res.status(200).json({'message' : 'Updated successfully !!'});
        }
     catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
      }
  });
  
  module.exports = router
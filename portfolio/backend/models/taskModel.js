const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task_name : {
        type : String,
        required : true
    }
});

const Tasks = mongoose.model('Tasks', taskSchema);
module.exports = Tasks
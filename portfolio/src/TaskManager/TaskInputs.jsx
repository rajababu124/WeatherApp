import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addTask, createTasks } from "../Redux/Slices/taskSlice";



const TaskInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");


  const submitForm = (e) => {
    // console.log("tasks is :" + task)
    e.preventDefault();
    dispatch(addTask(task))
    // dispatch(createTasks(task))
    setTask('');
   
  }; 
  return (
    <>
      <div className="container">
        <div className="row  ">
          <form onSubmit={submitForm} className="d-flex justify-center items-center">
          <div className="col-md-11 ">
            <input
              type="text"
              placeholder=" Task Description.."
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <div className="col-md-2 mx-2">
            <button  type="submit" className="btn rounded-full btn-secondary">
            <h4><FaPlus /></h4>  
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskInput;

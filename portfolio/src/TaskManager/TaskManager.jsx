import React from 'react'
import TaskInputs from './TaskInputs'
import TaskLists from './TaskLists'

const TaskManager = () => {
  return (
    <>   
    <div className="container mt-5">
    <TaskInputs />
    <TaskLists />
    </div>
    </>
  )
} 

export default TaskManager

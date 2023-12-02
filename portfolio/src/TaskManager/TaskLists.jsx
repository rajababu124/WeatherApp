import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import { draggedTask } from "../Redux/Slices/taskSlice";
import { deleteTask, editTask } from "../Redux/Slices/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const TaskLists = () => {



    const dispatch = useDispatch()
    const {taskList} = useSelector((state) => state.task)
    const deleteItem = (id) => {
        const updatedList = taskList.filter((_, index) => index !== id);
        dispatch(deleteTask(updatedList))
        };

    const editItem = (id) => {
         dispatch(editTask(id))
    }

      // Drag and Drop Feature
  const handleDrop = (e, newIndex) => {
     const oldIndex = e.dataTransfer.getData('text/plain');
     const newList = [...taskList];
    // Remove the dragged item from its original position
  const [removed] = newList.splice(oldIndex, 1);
     newList.splice(newIndex, 0, removed);
    dispatch(draggedTask(newList));
}

  return (
    <>
      <div className="container">
        <i>
          {" "}
          <h6 className="text-right text-dark mt-2 mb-4 ">
            The last thought..
          </h6>
        </i>
        <div className="row">
          <div className="col-md-12 ">
            <div className="">
              {taskList.map((item, index) => (
                <div
                  className="bg-secondary each_row rounded my-2 p-2 text-white"
                  key={index}
                  draggable
                  onDragStart={ (e) => e.dataTransfer.setData('text/plain', index) }
                  onDragOver = { (e) => e.preventDefault()}
                  onDrop = { (e) => handleDrop(e, index)}
                >
                  <h6>
                    {index + 1 + " "}. {item}{" "}
                  </h6>
                  <h5 className="d-flex">
                    <button
                      title="task-completed"
                    //   onClick={() => handleCompletedTasks(index+1)}
                    >
                      <IoCheckmarkDoneCircle color="lightgreen" />
                    </button>

                    <button title="edit" 
                       onClick={() => editItem(index)}
                    >
                      <BiSolidEdit className="mx-2" color="orange" />
                    </button>

                    <button title="delete" 
                    onClick={() => deleteItem(index)}
                    >
                      <FaCircleXmark color="yellow" />
                    </button>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskLists;

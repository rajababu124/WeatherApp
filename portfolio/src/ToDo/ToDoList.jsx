import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";

const ToDoList = ({ getId, list, editableContent }) => {
  const [clickedRow, setClickedRow] = useState([]);
  const handleCompletedTasks = (id) => {
      setClickedRow([...clickedRow, id]);
  };

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
              {list.map((item, index) => (
                <div
                  className="bg-secondary each_row rounded my-2 p-2 text-white"
                  key={index}
                >
                  <h6
                    style={{
                      textDecoration:
                        clickedRow.indexOf(index+1) !== -1
                          ? "line-through"
                          : "none",
                    }}
                  >
                    {" "}
                    {index + 1 + " "}. {item}{" "}
                  </h6>
                  <h5 className="d-flex">
                    <button
                      title="task-completed"
                      onClick={() => handleCompletedTasks(index+1)}
                    >
                      <IoCheckmarkDoneCircle color="lightgreen" />
                    </button>

                    <button title="edit" onClick={() => editableContent(index)}>
                      <BiSolidEdit className="mx-2" color="orange" />
                    </button>

                    <button title="delete" onClick={() => getId(index)}>
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

export default ToDoList;

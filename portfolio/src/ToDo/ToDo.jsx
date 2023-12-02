import React, { useEffect, useState } from "react";
import TopInput from "./TopInput";
import EditInput from "./EditInput";
import ToDoList from "./ToDoList";

const getLocalData = () => {
  let data = localStorage.getItem('lists')
  let myData = JSON.parse(data)
  if(myData){
    return myData
  }else{
    return []
  }
}

const ToDo = () => {
  const [list, setList] = useState(getLocalData());
  const [editId, setEditId] = useState('');
  const [editValue, setEditValue] = useState('')


const setEdittedValue = (val) => {
  list[editId]  = val
}
const getId = (id) => {
const updatedList = list.filter((_, index) => index !== id);
setList(updatedList);
};

const editableContent = (id) => {
setEditId(id)
setEditValue(list[id])
}

const getInputList = (input) => {
  setList([...list, input]);
};

useEffect(() => {
localStorage.setItem('lists', JSON.stringify(list))
}, [list]);




  return (
    <>
      <div className="container  home_screen">
        <div className="row ">
          <div className="col-md-9 mx-auto">
            <div className=" my-4 p-4 text-left  rounded shadow">
              <h4 className="text-center mb-3">What's in your mind ?</h4>             
              { (editId || editId === 0) ?  <EditInput getId={getId} setEdittedValue={setEdittedValue} editVal={editValue} setEditId={setEditId}  /> : <TopInput getId={getId}  getInputList={getInputList}  />  }
              <ToDoList list={list} getId={getId} editableContent={editableContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;

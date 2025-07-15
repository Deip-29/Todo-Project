import { useEffect, useState } from "react";
import "./Todo.css";


import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageTodoData,setLocalStorageTodoData } from "./TodoLocalStorage";




export const Todo=()=>{
 
  const[task,setTask]=useState(()=>getLocalStorageTodoData());
 
  
const handleFormSubmit=(inputValue)=>{
  const{id,content,checked}=inputValue;

  //to check if data is empty or not
   if(!content) return;

   // To check if the data is already existin gor not 
  const ifTodoContentMatched = task.find((curtask)=>curtask.content===content);
  if(ifTodoContentMatched) return;
    
  setTask((prevTask)=> [...prevTask,{id,content,checked}]); 
};

// To do add data to local storage 
setLocalStorageTodoData(task);

// TODO handelDeleteTodo funct
const handleDeleteTodo =(value)=>{

const updatedTask=task.filter((curtask)=>curtask.content !== value);
setTask(updatedTask);
};
//Todo Checked functionality
const handleCheckedTodo=(content)=>{
     const updatedTask = task.map((curtask)=>{
      if(curtask.content=== content){
      return {...curtask, checked: !curtask.checked};
     } else{
      return curtask;
 }} );
 setTask(updatedTask);
};

// handelClearTodoData
const handleClearTodoData=()=>{
  setTask([]);
};


  return(
    <section className="todo-container">
      <header>
    <h1>Todo List</h1>
    <TodoDate/>
    </header>
    <TodoForm onAddTodo={handleFormSubmit}/>
          <section className="myUnOrdlist">
            <ul>
              {
                task.map((curtask)=>{
                  return(
                  <TodoList key={curtask.id} data={curtask.content}
                  checked={curtask.checked}
                   onHandleDeleteTodo={handleDeleteTodo}
                   onHandleCheckedTodo={handleCheckedTodo}
                  />
                 ) })
              }
            </ul>
          </section>
    <section>
      <button className="clear-btn" onClick={handleClearTodoData}>Clear ALL</button>
    </section>
    </section>
  );
};
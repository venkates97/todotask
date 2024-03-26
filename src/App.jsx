import React, { useState } from 'react';
import { TodoApp } from './TodoApp';
import { EditTask } from './EditTask';
// import { Routes,Route} from 'react-router-dom';
import { Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom'



function App() {
const [taskList, settaskList] = useState([]);
console.log(taskList);

  return (
    <>
  
    <Routes>
      <Route path="/" element={<TodoApp taskList={taskList} settaskList={settaskList} />}></Route>
      <Route path="/editTask/:id" element={<EditTask taskList={taskList} settaskList={settaskList}/>}></Route>
      
    </Routes>
   
    </>
  )
}

export default App
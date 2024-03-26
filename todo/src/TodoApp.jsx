import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function TodoApp({ taskList, settaskList }) {
  const [task, settask] = useState("");
  const [des, setdes] = useState("");
  const [filterTasklist, setfilterTasklist] = useState("All")
  const navigate = useNavigate()



  function HandleDelete(index) {
    // let data =structuredClone(taskList)
    const copytasklist = [...taskList]
    const getConformation = window.confirm("Are you sure you want to delete");
    getConformation ? copytasklist.splice(index, 1) : "null"
    settaskList(copytasklist);


  }

  function HandleTodoClick() {
    settaskList([...taskList, { task, des, taskStatus: "NotCompleted" }]);
    settask("");
    setdes("");
  }


  function TaskListCreation({ name, des, taskStatus, index }) {
    const [status, setstatus] = useState()
    var updateSt = status;


    function HandelListSave() {
      // settaskList(copyTaskList);
      const copyTaskList = [...taskList]
      copyTaskList[index].taskStatus = updateSt;
      settaskList(copyTaskList);
      // navigate("/");

    }

    return (
      <>
        <div class="card">
          <div class="card-body">
            <h6 class="card-title">Name: {name}</h6>
            <p class="card-text">Description: {des}</p>
            <div className="changeStatus applyFilters">
              <p class="card-text">Status: </p>
              <select class="custom-select" id="inputGroupSelect04" style={taskStatus === "Completed" ? { backgroundColor: "green" } : { backgroundColor: "red" }} aria-label="Example select with button addon"
                onChange={(e) => {
                  updateSt = e.target.value;
                  setstatus(e.target.value);
                  HandelListSave();
                }}
              >{
                  taskStatus === "NotCompleted" ? <>
                    <option style={{ backgroundColor: "red" }} selected value="NotCompleted">Not Completed</option>
                    <option style={{ backgroundColor: "green" }} value="Completed">Completed</option>
                  </>
                    : <>
                      <option style={{ backgroundColor: "red" }} value="NotCompleted">Not Completed</option>
                      <option style={{ backgroundColor: "green" }} selected value="Completed">Completed</option>
                    </>
                }


              </select>

            </div>
            <div className="taskButtons">
              <button type="button col-4" className="btn btn-success col-4"
                onClick={() => navigate(`/editTask/${index}`)}
              >Edit</button>
              <button type="button col-4" className="btn btn-danger col-4"
                onClick={() => HandleDelete(index)}
              >Delete</button>
            </div>

          </div>
        </div>
      </>
    );
  }





  return (
    <>



      <div className="page">
        <div className="container page-box">
          <h1 className="PageTitle">My Todo</h1>

          <div className="inputWithbutton">
            <input className="form-control border-green col-4" value={task} onChange={(e) => settask(e.target.value)} type="text" placeholder="Todo Name" />
            <input className="form-control border-green col-4" value={des} onChange={(e) => setdes(e.target.value)} type="text" placeholder="Todo Descripition" />

            <button type="button" className="btn btn-success col-3"
              onClick={() => {
                task != "" ? HandleTodoClick() : "";


              }}
            >Add Todo</button>

          </div>


          <div className="todoListContainer">
            <div className="filterbar">
              <p>My Todos</p>
              <div className="applyFilters">
                <p style={{width:"9rem"}}>Status Filter:</p>
                {/* <div className="dropdown">
                  <a className="btn btn-secondary btn-sm dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    All
                  </a>

                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">All</a>
                    <a className="dropdown-item" href="#">Completed</a>
                    <a className="dropdown-item" href="#">Not Completed</a>

                  </div>
                </div> */}

                <select class="form-control" style={{width: "min-content"}} id="exampleFormControlSelect1" onChange={(e)=>{setfilterTasklist(e.target.value);}}>
                  <option value="All">All</option>
                  <option value="NotCompleted">Not Completed</option>
                  <option value="Completed">Completed</option>
                 
                </select>




              </div>
            </div>
            <div className="taskElements">

              {

                taskList.map((e, index) => {
                  if (e.taskStatus == filterTasklist) {
                    return <TaskListCreation key={index} name={e.task} des={e.des} taskStatus={e.taskStatus} index={index} />

                  }
                  if (filterTasklist == "All") {
                    return <TaskListCreation key={index} name={e.task} des={e.des} taskStatus={e.taskStatus} index={index} />

                  } 

                })

              }
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
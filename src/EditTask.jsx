import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




export function EditTask({ taskList, settaskList }) {
  const navigate = useNavigate();
  const { id } = useParams()
  const [task, settask] = useState(taskList[id].task);
  const [des, setdes] = useState(taskList[id].des);
  const taskStatus = taskList[id].taskStatus;

  function SaveTask() {
    taskList[id] = { task, des, taskStatus }
    navigate('/');
    return (console.log("Saved")
    )
  }

  return (<>
    <h1>Edit Task</h1>

    <div class="form-group" style={{ width: "50%" }} >



      <div class="input-group" >
        <div>
          <label for="formGroupExampleInput">Task Name</label>
          <input type="text" class="form-control" id="formGroupExampleInput"
            value={task}
            onChange={(e) => settask(e.target.value)}
          />
        </div>
        <div>
        <label for="formGroupExampleInput">Description</label>
          <textarea class="form-control" aria-label="With textarea"
            value={des}
            onChange={(e) => setdes(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="buttongrp">
        <button type="button col-4" className="btn btn-success col-4"
          onClick={() => SaveTask()}
        >Save</button>
        <button type="button col-4" className="btn btn-danger col-4"
          onClick={() => navigate('/')}
        >Cancel</button>
      </div>
    </div>

  </>);

}

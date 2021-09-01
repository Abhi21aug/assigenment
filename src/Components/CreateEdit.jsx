import React, { useState } from 'react';

const Createdit = () => {
  const [task, updateTask] = useState([
    { name: 'running', newdescription: 200, newstarttime: '10:00AM', newendtime: '11:00AM' }
  ]);
  const [newtask, proscessTask] = useState();
  const [newdescription, proccessDescription] = useState();
  const [newstarttime, proccessStarttime] = useState();
  const [newendtime, proccessEndtime] = useState();
  const [message, updateMessage] = useState();
  const save = () => {
    // alert("okkk");
    let newtask1 = {
      name: newtask,
      newdescription: newdescription,
      newstarttime: newstarttime,
      newendtime: newendtime
    };
    updateTask((task) => [...task, newtask1]);
    updateMessage(newtask + ' Added Successfully !');
    proscessTask('');
    proccessDescription('');
    proccessStarttime('');
    proccessEndtime('');
  };

  const deleteElement = (index) => {
    // alert(index);
    task.splice(index, 1);
    updateTask((task) => [...task]);
    updateMessage('task deleted succesfully !');
  };

  return (
    <div className='container containerTopMargin'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h2>creating New task using useState</h2>
          <p className='text-danger'> {message} </p>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <h3>New Task</h3>
          <div className='form-group mt-3'>
            <label>Task Name</label>
            <input
              type='text'
              className='form-control'
              onChange={(obj) => proscessTask(obj.target.value)}
              value={newtask}
            />
          </div>
          <div className='form-group'>
            <label>description</label>
            <input
              type='text'
              className='form-control'
              onChange={(obj) => proccessDescription(obj.target.value)}
              value={newdescription}
            />
          </div>
          <div className='form-group'>
            <label>start time</label>
            <input
              type='text'
              className='form-control'
              onChange={(obj) => proccessStarttime(obj.target.value)}
              value={newstarttime}
            />
          </div>
          <div className='form-group'>
            <label>end time</label>
            <input
              type='text'
              className='form-control'
              onChange={(obj) => proccessEndtime(obj.target.value)}
              value={newendtime}
            />
          </div>

          <div className='text-center  mt-3'>
            <button className='btn btn-danger' onClick={save}>
              Save Item
            </button>
          </div>
        </div>
        <div className='col-md-9 mt-5'>
          <table className='table'>
            <thead>
              <tr>
                <th>index</th>
                <th>Task</th>
                <th>Description</th>
                <th>start time</th>
                <th>end time</th>
                <th>action </th>
              </tr>
            </thead>
            <tbody>
              {task.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.name}</td>
                    <td>{row.newdescription}</td>
                    <td>{row.newstarttime}</td>
                    <td>{row.newendtime}</td>
                    <td>
                      <button className='btn btn-danger btn-sm' onClick={deleteElement.bind(this, index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Createdit;

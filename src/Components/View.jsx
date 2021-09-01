import React from 'react';
import '../assets/GlobalCss/global.css';

function View() {
  return (
    <div className='container containerTopMargin'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h2>view the tasks here</h2>
        </div>
      </div>
      <div className='row '>
        <div className='col-md-12 mt-5'>
          <table className='table'>
            <thead>
              <tr>
                <th>Task index</th>
                <th>Task Name</th>
                <th>description</th>
                <th>start time</th>
                <th>end time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>name</td>
                <td>123</td>
                <td>2:00PM</td>
                <td>3:00PM</td>
                <td>
                  <button className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default View;

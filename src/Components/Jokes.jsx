import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Jokes = () => {
  const [jokes, UpdateJokes] = useState([]);
  const [jokesupdated, UpdateJokes2] = useState([]);
  const getJokes = () => {
    axios.get('https://official-joke-api.appspot.com/jokes/ten').then((resposnse) => {
      if (resposnse.data.length > 0) {
        UpdateJokes(resposnse.data);
      }
    });
  };
  useEffect(() => {
    getJokes();
  }, [true]);

  const click = () => {
    var rand = Math.floor(Math.random() * 10 + 0);
    UpdateJokes2(jokes[rand])
  };
  return (
    <div className='container containerTopMargin'>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h1>Jokes from Api</h1>
          <button className='btn btn-success mt-4 mb-5' onClick={click}>
            CLICK HERE TO GET JOKES
          </button>
        </div>

        <table className='table table-bordered table-sm mt-4'>
          <thead>
            <tr className='bg-light text-primary text-center'>
              <td>Id</td>
              <td>type </td>
              <td>setup</td>
              <td>punchline</td>
            </tr>
          </thead>
          <tbody>
                <tr className='text-center'>
                  <td>{jokesupdated.id}</td>
                  <td>{jokesupdated.type}</td>
                  <td>{jokesupdated.setup}</td>
                  <td>{jokesupdated.punchline}</td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jokes;

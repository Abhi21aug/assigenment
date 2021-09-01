import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pass: '',
      message: ''
    };
  }

  processUserName = (obj) => {
    this.setState({
      username: obj.target.value
    });
  };

  processPassword = (obj) => {
    this.setState({
      pass: obj.target.value
    });
  };

  Login1 = () => {
    if (this.state.username == '' || this.state.pass == '') {
      this.setState({
        message: 'Enter username & Password !'
      });
    } else {
      this.setState({
        message: 'Success : Please Wait Processing...'
      });
      localStorage.setItem('username', 'abhishek');
      window.location.reload();
    }
  };

  render() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4'>
            <h3 className='text-center'>Login</h3>
            <p className='text-danger text-center'>{this.state.message}</p>
            <div className='form-group'>
              <label>User Name</label>
              <input type='text' className='form-control mt-3' onChange={this.processUserName} />
            </div>
            <div className='form-group mt-2'>
              <label>Password</label>
              <input type='text' className='form-control mt-3' onChange={this.processPassword} />
            </div>
            <button className='form-control mt-5 btn btn-primary btn-block' onClick={this.Login1}>
              Login
            </button>
          </div>
          <div className='col-md-4'></div>
        </div>
      </div>
    );
  }
}

export default Login;

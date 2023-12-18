import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

//   login = e => {
//     e.preventDefault();
//     axios.post('http://localhost:9000/api/login', this.state.credentials)
//       .then(res =>{
//         console.log(res)
//         localStorage.setItem('token', res.data.token);
//         // this.props.history.push('/friends')
//       })
//       .catch(err => console.log(err))
//   };

  handleSubmit = e => {
    e.preventDefault();
    console.log('working?')
    axios.post('http://localhost:9000/api/login', this.state.credentials)
    .then(resp => {
        console.log(resp)
        localStorage.setItem('token', resp.data.token);
        this.props.push('/friends')
    })
    .catch(err => {
        console.log(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          </div>
          <div>
            <label htmlFor = 'password'>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

// Login.propTypes = {
//     push: PropTypes.function,
//   };

export default Login;
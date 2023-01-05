import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateUser.module.css'


class CreateUser extends React.Component {
constructor (props,context){
  super(props,context); 
    this.state = {
      invalid: 'hidden',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToUrl = this.navigateToUrl.bind(this);
}
    handleSubmit (e) {
      e.preventDefault();
      const Email = e.target.form[0].value;
      const Username = e.target.form[1].value;
      const Password = e.target.form[2].value;
      const userObj = { Email, Username, Password };
      if (e.target.id === 'login') {
        axios
          .get('http://localhost:8080/user/createusers', { params: userObj })
          .then((response) => {
            const userId = response.data;
            window.sessionStorage.setItem('userId', userId);
            return this.navigateToUrl('http://localhost:3000/library');
          })
          .catch((error) => {
            console.error('There was an error!', error);
            this.setState({ ...this.state, invalid: '' });
          });
      } else if (e.target.id === 'register') {
        axios
          .post('http://localhost:8080/user/createusers', userObj)
          .then((response) => {
            const userId = response.data;
            window.sessionStorage.setItem('userId', userId);
            return this.navigateToUrl('localhost:3000/library');
          })
          .catch((error) => {
            console.error('There was an error!', error.response.data);
            this.setState({ ...this.state, invalid: '' });
          });
      }
    };
    navigateToUrl(url){
      window.location.assign(url);
    }
    render (){
    return(
       <div>
          <div className={styles.loginContainer}>
        {/* //place our logo or main thing here */}
            <div className={styles.container}>
              <h1 id="loghead">Login</h1>
                <form>
                  <input
                    className={styles.email}
                    type="email"
                    name="email"
                    placeholder="email..."
                    required
                    //   onChange={this.handleChange}
                  />
            <input
            className={styles.username}
            type='username'
            name='username'
            placeholder='username...'
            required
            />
            <input
              className={styles.password}
              type="password"
              name="password"
              placeholder="password..."
              required
              //   onChange={this.handleChange}
            />
            <div id="buttonRow">
              <button 
                className={styles.login} 
                id="login" 
                onClick={this.handleSubmit}
              >
                  Login
              </button>
              <button
                className={styles.register}
                id="register"
                onClick={this.handleSubmit}
              >
                Register
              </button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    )
  }
}


export default CreateUser;
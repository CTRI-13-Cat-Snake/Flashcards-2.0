import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './CreateUser.module.css'
import { Link } from 'react-router-dom';

const CreateUser = () => {
    // handleSubmit ((e) => {
    //  e.preventDefault();
    // });
    return(
      <Link >
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
            <button className={styles.login} id="login" >
                Login
              </button>
              <button
                className={styles.register}
                id="register"
                // onClick={this.handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
       </div> 
        </Link>
    )
}


export default CreateUser;
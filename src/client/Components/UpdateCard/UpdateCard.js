import styles from './UpdateCard.module.css';
// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCard = (props) => {
  const { id } = useParams();
  const _id = id;
  console.log(id);
  const [front, setFront] = useState('');
  const [back, setback] = useState('');
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  // const updateCard = () => {
  //   const response = axios({
  //     method: 'put',
  //     withCredentials: true,
  //     url: `http://localhost:8080/api/cards/${id}`,
  //   }).then((res) => {
  //     window.location.href = `/library`;
  //   });
  // };

  function cb() {
    fetch(`http://localhost:8080/api/cards/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ _id, front, user_id: 1, back, title }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => {
      // console.log('im in callback')
      props.update();
    });
  }

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    marginTop: '-250px',
    marginLeft: '-250px',
    backgroundColor: 'rgb(35, 35, 35)',
    width: '500px',
    height: '500px',
    borderRadius: '10px',
    boxShadow: '0px 0px 24px rgb(223, 223, 223)',
  };

  return (
    <>
      <div id={styles.cardInputs} style={modalStyles}>
        <h1 style={{ color: 'white' }}>Update Card</h1>
        <input
          id={styles.cardTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Card Title Here"
        ></input>
        <input
          id={styles.cardFront}
          onChange={(e) => setFront(e.target.value)}
          placeholder="Enter Question Here"
        ></input>
        <input
          id={styles.cardBack}
          onChange={(e) => setback(e.target.value)}
          placeholder="Enter Answer Here"
        ></input>
        <button
          id={styles.addCardBtn}
          onClick={() => {
            cb();
            props.close();
          }}
        >
          Update Card <span>&#43;</span>
        </button>
      </div>
    </>
  );
};

export default UpdateCard;

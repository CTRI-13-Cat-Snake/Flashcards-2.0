import styles from './UpdateCard.module.css';
// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateCard = () => {
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
    console.log('im in CB');
    fetch(`http://localhost:8080/api/cards/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ _id, front, user_id: 1, back, title }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(() => navigate('/library'));
  }

  return (
    <>
      <div id={styles.cardInputs}>
        <input
          id={styles.cardTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter Card Title Here'
        ></input>
        <input
          id={styles.cardFront}
          onChange={(e) => setFront(e.target.value)}
          placeholder='Enter Question Here'
        ></input>
        <input
          id={styles.cardBack}
          onChange={(e) => setback(e.target.value)}
          placeholder='Enter Answer Here'
        ></input>
        <button id={styles.addCardBtn} onClick={() => cb()}>
          Update Card <span>&#43;</span>
        </button>
      </div>
    </>
  );
};

export default UpdateCard;

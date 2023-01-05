import axios from 'axios';
import React, { useState } from 'react';
import styles from './flashCard.module.css';
import { useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';
import { json, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import UpdateCard from '../UpdateCard/UpdateCard';

const FlashCard = () => {
  const { id } = useParams();
  console.log(id);
  const [cardData, setCardData] = useState({});
  const [nextCard, setnextCard] = useState({});
  const [previousCard, setpreviousCard] = useState({});
  const [showFront, setShowFront] = useState(true);
  const [updateState, setUpdateState] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:8080/api/cards/${id}`,
    }).then((res) => {
      // console.log(res.data)
      // console.log('im in get')
      // if (res.data.title !== cardData.title || res.data.back !== cardData.back 
      // || res.data.title !== cardData.title) {
        setCardData(res.data);
      // }
    });
  }, [updateState]);

  const update = () => {
    // console.log('im in update')
    setUpdateState(!updateState);
  }

  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:8080/api/cards/nextCard/${id}`,
    }).then((res) => {
      console.log(res.data);
      console.log('checking for res.data', res.data);
      setnextCard(res.data);
    });
  }, []);

  useEffect(() => {
    // we cannot use async/await in useEffect without wrapping in outer function
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: `http://localhost:8080/api/cards/previousCard/${id}`,
    }).then((res) => {
      console.log(res.data);
      console.log('checking for res.data', res.data);
      setpreviousCard(res.data);
    });
  }, []);


  const deleteCard = () => {
    const response = axios({
      method: 'delete',
      withCredentials: true,
      url: `http://localhost:8080/api/cards/${id}`,
    }).then((res) => {
      window.location.href = `/library`;
    });
  };


  return (
    <>
      <div className='container d-flex justify-content-center text-center'>
        <div className='col'>
          <div id='card-title-wrapper' className={`${styles.containerbox}`}>
            <h1 className={`${styles.title}`}>
              {cardData.title ?? ' No Title'}
            </h1>
          </div>

          <div
            id='card-frontCard'
            onClick={() => setShowFront(!showFront)}
            className={`${styles.containerbox2}`}
          >
            <p className={`${styles.paragraph}`}>
              {showFront ? cardData.front : cardData.back}
            </p>
          </div>

          <div className={styles.spaceBetween}>
            <button
              onClick={() => (window.location.href = `/flashcard/${previousCard}`)}
              className={`${styles.addCardBtn}`}
            >
              PREVIOUS CARD
            </button>
            <button
              onClick={() => deleteCard()}
              className={`${styles.addCardBtn}`}
            >
              DELETE CARD
            </button>
            <Popup trigger={<button className={` ${styles.addCardBtn}`} modal > UPDATE CARD </button>} position="top center">
              {close => (<UpdateCard update={update} close={close}></UpdateCard>)}
            </Popup>
            {/* <button
              onClick={() => (window.location.href = `/updateCard/${id}`)}
              className={`${styles.addCardBtn}`}
            >
              UPDATE CARD
            </button> */}
            <button
              onClick={() => (window.location.href = `/flashcard/${nextCard}`)}
              className={`${styles.addCardBtn}`}
            >
              NEXT CARD
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default FlashCard;

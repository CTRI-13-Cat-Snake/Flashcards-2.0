import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import CreateCard from './Components/CreateCard/CreateCard';
import Navbar from './Components/Navbar/Navbar';
import FlashCard from './Components/ShowCard/FlashCards';
import LandingPage from './Components/LandingPage/LandingPage';
import UpdateCard from './Components/UpdateCard/UpdateCard.js';
import CreateUser from './Components/CreateUser/CreateUser.js';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from './Redux/slices/userSlice';
import axios from 'axios';
const App = () => {
  const leftItems = {
    HOME: '/library',
  };

  // On first render, get user data
  const dispatch = useDispatch();
  useEffect(() => {
    const response = axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:8080/auth/user',
    }).then((res) => {
      if (res.data) {
        dispatch(setEmail(res.data.email));
      }
    });
  }, []);
  const email = useSelector((state) => state.user.email);

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/createusers" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
      {/* {!email ? (
        <LandingPage />
      ) : ( */}
        <BrowserRouter>
          {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
          <Navbar leftItems={leftItems} />
          <div>
            <Routes>
              {/* <Route exact path="/" element={<LandingPage />} /> */}
              {/* <Route exact path="/createusers" element={<CreateUser />} /> */}
              <Route exact path="/library" element={<Home />} />
              <Route exact path="/createCard" element={<CreateCard />} />
              <Route exact path="/updateCard/:id" element={<UpdateCard />} />
              <Route exact path="/flashcard/:id" element={<FlashCard />} />
            </Routes>
          </div>
        </BrowserRouter>
      {/* )} */}
    </>
  );
};

export default App;

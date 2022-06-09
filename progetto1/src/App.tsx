import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { FormComp } from './components/FormComp';
import { NavComp } from './components/NavComp';
import { ListComp } from './components/ListComp';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { FooterComp } from './components/FooterComp';
import { useDispatch, useSelector } from 'react-redux';
import { LoginComponent } from './components/LoginComponent';
import { logout } from './actions/logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";



function App() {
  const isLogged = useSelector((state: { isLogged: boolean }) => state.isLogged);
  const dispatch = useDispatch();



  return (

    <>
      <NavComp></NavComp>

      <Container fluid className='margin-0 bg-special fadein'>
        {isLogged && (
          <>
            <button className="btn btn-danger btn-block shadow" style={{ position: "fixed", top: "20px", right: "20px", }} onClick={() => dispatch(logout())}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="fs-4 align-top" />

            </button>
          </>
        )}
        {/* {isLogged && (
          <Routes>
            <Route path='/' element={<ListComp />} />
            <Route path='/inserimento' element={<FormComp />} />
            <Route path='/home' element={<ListComp />} />
          </Routes>
          // {/* <FormComp></FormComp>
          // <ListComp></ListComp> */}

        {isLogged ? (
          <Routes>
            <Route path='/' element={<ListComp />} />
            <Route path='/inserimento' element={<FormComp />} />
            <Route path='/home' element={<ListComp />} />
          </Routes>) : (<LoginComponent />)}
      </Container>

      <FooterComp></FooterComp>



    </>

  );
}

export default App;

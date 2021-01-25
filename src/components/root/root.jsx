import React from 'react';
import  { BrowserRouter, Route } from 'react-router-dom'

import AuthForm from '../auth-form/auth-form';
import MainPage from '../main-page/main-page';
import RegisterForm from '../register-form/register-form';

import './root.css';

const Root = () => {
  return (
    <BrowserRouter>
      <Route path='/auth' render={()=> <AuthForm />}/>
      <Route path='/register' render={()=> <RegisterForm />}/>
      <Route path='/main' render={()=><MainPage />} />
    </BrowserRouter>
  )
};

export default Root;

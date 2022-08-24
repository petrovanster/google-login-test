//import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
//import express from 'express'
import './App.css';

import store from "./store"
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from "./App/App"

function MainApp() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId='267662242050-om1mvkvvhja7st12pjt0uo5o0sacnvft.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default MainApp;

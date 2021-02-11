import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './styles/index.css'
import App from './components/App'
import * as serviceworker from './serviceWorker';

import reportWebVitals from './reportWebVitals';

import {
  ApolloProvider, 
  ApolloClient,
  createHttpLink,
  InMemeoryCache
}
from '@apollo/client';


const httpLink = createHttpLink ({
  url: 'http:localhost:4000'
});



const client = new ApolloClient({
  link, 
  cache: new InMemeoryCache()

});




ReactDOM.render(
  <BrowerRouter>
    <ApolloClient>
       <App />
    </ApolloClient>
  </BrowerRouter>,
  document.getElementById('root')
);
serviceworker.unregistrer();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

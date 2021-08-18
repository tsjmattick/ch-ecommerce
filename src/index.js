import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import '../src/assets/styles/app.css';

const client = Client.buildClient({
  storefrontAccessToken: 'd42612ee49813638e9c399f31bb8c39a',
  domain: 'consignmenthive.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);

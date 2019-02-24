import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';
import Config from './configs/config';

it('can get api information?', () => {
  
  let planet = Math.floor(Math.random() * Config.MAX_PLANETS_API) + 1;
  axios.get(Config.BASE_API_URL + Config.PLANETS_API_URL + planet).then(resp => {
    expect(resp.status).toBe(200);    
  });

});
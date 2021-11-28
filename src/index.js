import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {choice, remove} from './helpers.js';
import {fruits} from './foods.js';

let fruit;
let fruitsList = fruits;
console.log(fruitsList);
for(let i = 0; i < fruits.length; i++) {
  fruit = choice(fruitsList);
  fruitsList = remove(fruitsList, fruit);
  let howManyLeft = fruitsList.length;
  console.log(`I'd like one ${fruit}, please.`);
  console.log(`Okie doke, here ya' go: ${fruit}.`);
  console.log(`Scrumpdillicious. Can I have another?`);
  if (howManyLeft === 0) {
    console.log(`Sorry, we're all out of fruit. You're a pig.`);
  } else if (howManyLeft === 1) {
    console.log(`Sorry, we're out of those. We only have 1 fruit left. Are you going to eat all my fruit?`);
  } else {
    console.log(`Sorry, we're out of those. We do have ${howManyLeft} other fruits, though.`);
  };
  console.log(``);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

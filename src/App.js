import React, { useState } from 'react';

import './App.css';

import Data from './data/quotes.json';

const quotes = Data.quotes

function App() {
  const [idx, setIdx] = useState(0)


  function changeQuote() {
    var i = Math.floor(Math.random() * quotes.length)
    while(i === idx){
      i = Math.floor(Math.random() * quotes.length)
    }
    setIdx(i)
  }

  return (
    <div id='quote-box'>
      <h1 id='text'>{quotes[idx].text}</h1>
      <p id='author'><span>- </span>{quotes[idx].author}</p>
      <button id='new-quote' onClick= {changeQuote}>New Quote</button>
      <a href="twitter.com/intent/tweet" id='tweet-quote'><i className="fab fa-twitter-square fa-2x"></i></a>
    </div>
  )
}

export default App;

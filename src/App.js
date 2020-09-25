import React, { useState } from 'react';

import './App.css'

function App() {
  const [{ 
    quote,
    author,
    idx
  }, setState] = useState({
    quote: ['Melhor faltar do que não ter', 'Mais chato do que chinelo de gordo', 'Mudou o sacerdote, mudou a lei','Toca a saca do faqueiro', 'Random quote here','Another quote','Hello There'],
    author: ['Berinja', 'Bozos', 'Lan Santos', 'Fitor', 'Random Author','Somebody','General Kenobi'],
    idx: 0
  })


  function changeQuote() {
    var i = Math.floor(Math.random() * quote.length)
    while(i === idx){
      i = Math.floor(Math.random() * quote.length)
    }
    setState({
     quote,
     author,
     idx: i
    }) 
  }

  return (
    <div id='quote-box'>
      <h1 id='text'>{quote[idx]}</h1>
      <p id='author'><span>- </span>{author[idx]}</p>
      <button id='new-quote' onClick= {changeQuote}>New Quote</button>
      <a href="twitter.com/intent/tweet" id='tweet-quote'><i class="fab fa-twitter-square fa-2x"></i></a>
    </div>
  )
}

export default App;

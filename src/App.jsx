import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  title: 'Hey',
  greeting: 'React'
}; // only defined once, not everytime component rendered

function getContent() {
  return 'I\'m just a little boy from a little town'
}

const arr = ['one', 'two', 'Three0'];
const transformedArr = Array.from(arr).map(item => item.toUpperCase());

function App() {
  return (
      <div>
        <h1>{welcome.title} {welcome.greeting}</h1>
        <body>{getContent()} {transformedArr.join(' ')}</body>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
      </div>
  )
}

export default App

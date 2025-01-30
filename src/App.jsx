import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const dataList = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1
  }
]

const List = (props) => {
  const list = props.list;
  return (
    <ul>
        {list.map((item) => (
          <li key={item.objectId}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
          </li>
        ))}
      </ul>
  )
}

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text"/>
  </div>
);

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    
    <Search />

    <hr />

    <List list={dataList} />
  </div>
);

export default App

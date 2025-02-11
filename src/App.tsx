import './App.css'
import * as React from 'react';

type ListProps = {
  list: Story[];
};

const List = (props: ListProps) => {
  const list = props.list;
  return (
    <ul>
        {list.map((item) => (
          <Item key={item.objectID} item={item} />
        ))}
      </ul>
  )
}

type ItemProps = {
  item: Story;
};

const Item = (props: ItemProps) => {
  const item = props.item

  return (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
    <span> {item.num_comments}</span>
    <span> {item.points}</span>
  </li>
  );
}

type SearchProps = {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //synthetic event
    setSearchTerm(event.target.value);
    props.onSearch(event);
  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    console.log(event.target.value);
  }

  return (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={handleChange} onBlur={handleBlur} />

    <p>
      Searching for <strong>{searchTerm}</strong>
    </p>
  </div>
  );
};

type Story = {
  objectID: number;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};

const App = () => {
  const dataList: Story[] = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1
    }
  ]

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>My Hacker Stories</h1>
      
      <Search onSearch={handleSearch}  />

      <hr />

      <List list={dataList} />
    </div>
  )
};

export default App

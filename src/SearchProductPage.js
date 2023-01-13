import React, { useState, useEffect } from 'react';
// import './Style.css';
import JSONDATA from './MOCK_DATA.json';
const SearchProductPage = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((se) => setList(se));
  });
  return (
    <div className="App">
      <section
        style={{
          'background-color': 'skyblue',
          width: '150px',
          padding: '20px',
        }}
      >
        <h1>Search AutoComplete</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {list
          .filter((val) => {
            if (search === '') {
              return val;
            } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div className="user" key={key}>
                <p>{val.title}</p>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default SearchProductPage;

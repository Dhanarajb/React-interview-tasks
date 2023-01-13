import React, { useState } from 'react';
let nextId = 0;
const TodoList = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);

  const listHandle = () => {
    // setList('');
    // if (value.length > 0) {
      setList([
        ...list,
        {
          id: nextId++,
          data: value,
        },
      ]);
    // } else {
    //   alert('data is not valid');
    // }
  };
  const deleteHandler = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <div style={{ display: 'flex', 'justify-content': 'center' }}>
      <section
        style={{
          'background-color': '#fedcba',
          width: '200px',
          padding: '20px',
        }}
      >
        <h1>Todo List</h1>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={listHandle}>Add</button>
        <ul>
          {list.map((item) => (
            <li
              style={{ 'text-align': 'center', 'list-style': 'none' }}
              key={item.id}
            >
              {item.data}
              <button onClick={() => deleteHandler(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TodoList;

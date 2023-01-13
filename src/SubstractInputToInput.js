import React from 'react';

const SubstractInputToInput = () => {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [total, setTotal] = React.useState(0);

  function calculateTotal() {
    setTotal(number1 - number2);
  }

  return (
    <div style={{ display: 'flex', 'justify-content': 'center' }}>
      <section
        style={{
          'background-color': '#8fffa0',
          width: '150px',
          padding: '20px',
        }}
      >
        <h1>Substract Input To Input</h1>
        <input
          placeholder="First Number"
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          placeholder="Second Number"
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />

        <button onClick={calculateTotal}>Add Two Numbers</button>
        <p>Total: {total || ''}</p>
      </section>
    </div>
  );
};

export default SubstractInputToInput;

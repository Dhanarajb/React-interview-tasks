import React, { useState } from 'react';

const BMICalci = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const bmi = () => weight / (height * height);
  return (
    <div style={{ display: 'flex', 'justify-content': 'center' }}>
      <section
        style={{
          'background-color': '#fcfc03',
          width: '150px',
          padding: '20px',
        }}
      >
        <h1>BMI Calculator</h1>
        <input
          placeholder="height in cm"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          placeholder="Weight in kg"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <p style={{ 'background-color': '#62c4b4', border: '1px solid black' }}>
          {bmi() ? bmi() : null}
        </p>
      </section>
    </div>
  );
};

export default BMICalci;

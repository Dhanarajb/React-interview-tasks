import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

const ColorPicker = () => {
  const [color, setColor] = useState('#fff');
  const [showColorPicker, setShowColorPicker] = useState(false);
  return (
    <div style={{ display: 'flex', 'justify-content': 'center' }}>
      <section
        style={{
          'background-color': '#a8a632',
          width: '150px',
          padding: '20px',
        }}
      >
        <h1>ColorPicker</h1>
        <button
          onClick={() =>
            setShowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? 'Close Color Picker' : 'Pick a Color'}
        </button>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={(updateColor) => setColor(updateColor.hex)}
          />
        )}
      </section>
    </div>
  );
};

export default ColorPicker;

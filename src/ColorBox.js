import randomColor from 'randomcolor';
import { useState } from 'react';

export default function ColorBox() {
  const [color, setColor] = useState(randomColor());
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            height: '20vh',
            width: '20vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: color,
          }}
        >
          Generated Color: {color}
        </div>
      </div>
      <br />
      <button onClick={() => setColor(randomColor())}>Generate</button>
    </>
  );
}

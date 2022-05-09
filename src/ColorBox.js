// colored box with button to generate random colors

import randomColor from 'randomcolor';
import { useState } from 'react';

export default function ColorBox() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  return (
    <>
      <div
        className="box-style"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            height: height ? height + 'px' : '20vh',
            width: width ? width + 'px' : '20vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor:
              hue || lum ? randomColor({ hue: hue, luminosity: lum }) : color,
            transition: '1.5s',
          }}
        >
          Generated Color: {color}
        </div>
      </div>
      <br />
      <button onClick={() => setColor(randomColor())}>Generate</button>
      <br />
      <br />
      <br />

      <h3>Make your own color block (all values are optional): </h3>
      <br />
      <div className="input">
        <div>color hue: </div>

        <input
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />

        <br />
        <br />
        <div>light or dark?</div>

        <input
          value={lum}
          onChange={(event) => {
            setLum(event.currentTarget.value);
          }}
        />
      </div>
      <div className="input">
        <br />
        <br />
        <div>box height (in px):</div>
        <input
          value={height}
          onChange={(event) => {
            setHeight(event.currentTarget.value);
          }}
        />
        <br />
        <br />
        <div>box width (in px):</div>
        <input
          value={width}
          onChange={(event) => {
            setWidth(event.currentTarget.value);
          }}
        />
      </div>
    </>
  );
}

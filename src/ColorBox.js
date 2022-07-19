// colored box with button to generate random colors

import randomColor from 'randomcolor';
import { useState } from 'react';

export default function ColorBox() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState(''); // Luminosity
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  return (
    <>
      <div
        style={{
          margin: 'auto',
          height: height ? height + 'px' : '20vh',
          width: width ? width + 'px' : '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor:
            hue || lum ? randomColor({ hue: hue, luminosity: lum }) : color,
          transition: '1.5s',
          borderRadius: '100px',
          fontWeight: 'bold',
        }}
      >
        Generated Color: <br />
        {color}
      </div>

      <br />

      <button onClick={() => setColor(randomColor())}>Generate</button>

      <br />
      <br />
      <br />

      <form
        className="input"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <h1>Optional: customize your own color blob </h1>
          <h2>(If input invalid/does not exist, random value applies)</h2>
        </div>
        <br />
        <label>
          color hue:
          <input
            value={hue}
            onChange={(event) => {
              setHue(event.currentTarget.value);
            }}
          />
        </label>

        <br />

        <label>
          light/dark:
          <input
            value={lum}
            onChange={(event) => {
              setLum(event.currentTarget.value);
            }}
          />
        </label>

        <br />

        <label>
          box height (in px):
          <input
            value={height}
            onChange={(event) => {
              setHeight(event.currentTarget.value);
            }}
          />
        </label>

        <br />

        <label>
          box width (in px):
          <input
            value={width}
            onChange={(event) => {
              setWidth(event.currentTarget.value);
            }}
          />
        </label>

        <br />

        <button
          onClick={() => {
            setLum('');
            setHue('');
            setHeight('');
            setWidth('');
          }}
        >
          reset
        </button>
      </form>
    </>
  );
}

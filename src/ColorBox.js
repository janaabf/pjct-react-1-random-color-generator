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
            borderRadius: '100px',
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

      <form
        className="input"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1>Optional: Make your own color block </h1>
        <h2>(If input invalid/does not exist, random value applies)</h2>

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

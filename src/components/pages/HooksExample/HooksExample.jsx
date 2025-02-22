/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useEffect } from 'react';

function HooksExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Hello World!');

  useEffect(() => {
    console.log(name);
    return () => {
      console.log('unmount');
    };
  }, [name]);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
      <button onClick={() => console.log(name)}>Нажми на меня</button>
    </div>
  );
}

export default HooksExample;

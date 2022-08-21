import { type } from 'os';
import React, { createElement as newEl, useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return newEl('div', {className: 'container'}, [
    newEl('h1', {className: 'front-bold', key: 1}, `Test JSX ${count}`),
    newEl('button',  {className: 'py-2 px-4 border', 
      key: 2,
      onClick: () => setCount(count +1)
    }, 'Click me!')
  ])
}

export default App;

import React, {useState} from 'react';

export default function Hello() {
  const [name, setName] = useState('')
  return <div>
    <h1>Hello {name}</h1>
    <input type='text' onChange={event => setName(event.target.value)} value={name} />
  </div>
};

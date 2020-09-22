import React from 'react';

export default function Input(props) {
  const [item, setUserItem] = React.useState('');
  return (
    <div>
      <input type='text' onChange={(e) => setUserItem(e.target.value)} placeholder='Enter your item here' className='header--input' />
      <button onClick={() => props.transferItem(item)}>Add</button>
      <button
        onClick={() => {
          props.clearList();
        }}
      >
        Clear
      </button>
    </div>
  );
}

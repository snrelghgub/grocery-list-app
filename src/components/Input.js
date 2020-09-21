import React from 'react';

export default function Input(props) {
    const [item, setUserItem] = React.useState("");
  return (
    <div>
      <input type='text' onChange={(e)=> setUserItem(e.target.value)}/>
      <button onClick={()=>props.transferItem(item)}>Add</button>
      <button>Clear</button>
    </div>
  );
}

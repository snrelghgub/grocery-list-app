import React from 'react';

export default function List(props) {
  let temp = [];
  temp = props.groceryList.map((elem) => <li>{elem}</li>);

  return (
    <div className='list'>
      <ul className='list--items'>{temp}</ul>
    </div>
  );
}

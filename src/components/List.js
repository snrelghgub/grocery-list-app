import React from 'react'

export default function List(props){
  let temp=[]; 
  temp = props.groceryList.map((elem)=><li>{elem}</li>);

  return(
      <div>
          <ul>
            {temp}
          </ul>
      </div>
  );
}
import React from "react";

export default function List(props) {
  let temp = [];
  temp = props.groceryList.map((elem, i) => <li key={i}>{elem}</li>);

  return (
    <div className="list">
      <ul className="list--items">{temp}</ul>
    </div>
  );
}

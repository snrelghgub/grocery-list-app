import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [groceryList, setGroceryList] = useState([]);
  //const [listOfItems, setListOfItems] = useState(null); 

  //function to handle the transfer of a new item
  let transferItem = (item) => {
    //condition - add
    
    setGroceryList([...groceryList, item]);
    // console.log(`after:${groceryList}`);

  };

  //function to handle clear button functionality
  let clearList = () => {
    //clear groceryList array
    setGroceryList([]);
  };

  //effectHook, each time there is change & update in state of the array
  //>>>
  
  /*
  useEffect(()=>{
    //make it display the items 
    //let temp=[]; 
    //console.log(groceryList);
  //temp = groceryList.map((elem)=>setListOfItems(<li>{elem}</li>));
    //console.log(temp[0]); 
    //setListOfItems(temp); 

  },[groceryList]);
  */

  return (
    <div className='App'>
      <Header />
      <Input transferItem={transferItem} clearList={clearList} />
      <List groceryList={groceryList}/>
      <Footer />
    </div>
  );
}

export default App;

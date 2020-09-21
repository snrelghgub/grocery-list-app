import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [groceryList, setGroceryList] = useState([]);

  //function to handle the transfer of a new item
  let transferItem = (item) => {
    //condition - add
    // console.log(`before:${groceryList}`);
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

  return (
    <div className='App'>
      <Header />
      <Input transferItem={transferItem} clearList={clearList} />
      <List />
      <Footer />
    </div>
  );
}

export default App;

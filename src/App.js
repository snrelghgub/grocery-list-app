import React from 'react';
import './App.css';
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
       <Header />
       <Input />
       <List />
       <Footer />
    </div>
  );
}

export default App;

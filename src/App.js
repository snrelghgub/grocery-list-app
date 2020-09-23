import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default function App() {
  const [groceryList, setGroceryList] = useState([]);

  let transferItem = (item) => {
    setGroceryList([...groceryList, item]);
  };

  let clearList = () => {
    setGroceryList([]);
  };

  return (
    <div className="App">
      <Container fluid>
        <div className="header">
          <Header />
          <Input transferItem={transferItem} clearList={clearList} />
        </div>
        <List groceryList={groceryList} />
        <Footer />
      </Container>
    </div>
  );
}

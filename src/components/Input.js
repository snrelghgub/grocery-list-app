import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Input(props) {
  const [item, setUserItem] = useState("");
  return (
    <div>
      <Form>
        <Form.Control
          type="test"
          placeholder="Enter item"
          onChange={(e) => setUserItem(e.target.value)}
          className="header--input"
        />
        <Button variant="primary" onClick={() => props.transferItem(item)}>
          Add
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.clearList();
          }}
        >
          Clear
        </Button>
      </Form>
    </div>
  );
}

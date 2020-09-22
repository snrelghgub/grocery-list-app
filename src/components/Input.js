import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default function Input(props) {
  const [item, setUserItem] = React.useState('');
  return (
    <div>
      <Form>
       <Form.Control type="test" placeholder="Enter item" onChange={(e) => setUserItem(e.target.value)} className='header--input' />
      {/*<input type='text' onChange={(e) => setUserItem(e.target.value)} placeholder='Enter your item here' className='header--input' />*/}
      <Button variant="primary" onClick={() => props.transferItem(item)}>Add</Button>
      <Button variant="primary"
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



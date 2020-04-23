import React from 'react';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './component/Form'
import './App.css'
import Data from './component/Display'

function App() {
  return (
    <div className="mx-4 my-4">
      <Row>
        <Col lg={5} md={6} className="mb-4">
          <Form/>
        </Col>
        <Col lg={7} md={6}>
          <Data/>
        </Col>
      </Row>
    </div>
  );
}

export default App;

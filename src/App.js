import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormHeroes from './component/Form';
import Data from './component/Display';

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log("store.getState()", store.getState())
})

function App() {
  return (
    <Provider store={store}>
      <div className="mx-4 my-4">
        <Row>
          <Col lg={5} md={6} className="mb-4">
            <FormHeroes/>
          </Col>
          <Col lg={7} md={6}>
            <Data/>
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;

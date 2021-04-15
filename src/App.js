import React, { useReducer } from "react";
import "./App.css";
import Questions from "./component/Questions";
import "bootstrap/dist/css/bootstrap.min.css";
import data from './questions.json';
import { Container } from "react-bootstrap";
function App() {
 
 
  return (
    <Container>
        <Questions list={data}></Questions>
    </Container>
  );
}

export default App;

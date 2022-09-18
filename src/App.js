import React from "react";
import "./App.css";
import { AddTaskForm } from "./components/add-task-form/AddTaskForm";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="wrapper text-center">
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Not To Do Task List</h1>
          </Col>
        </Row>
        <hr />
        <AddTaskForm />
        <hr />
      </Container>
    </div>
  );
};

export default App;

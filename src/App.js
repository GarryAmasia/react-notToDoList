import React from "react";
import "./App.css";
import { AddTaskForm } from "./components/add-task-form/AddTaskForm";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleOnSubmit = (data) => {
    setTasks([...tasks, data]);
  };
  console.log(tasks);

  return (
    <div className="wrapper text-center">
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Not To Do Task List</h1>
          </Col>
        </Row>
        <hr />
        <AddTaskForm handleSubmit={handleOnSubmit} />
        <hr />
      </Container>
    </div>
  );
};

export default App;

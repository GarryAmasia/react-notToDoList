import React from "react";
import "./App.css";
import { AddTaskForm } from "./components/add-task-form/AddTaskForm";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { TaskList } from "./components/task-list/TaskList";
import { NotToDoList } from "./components/task-list/NotToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleOnSubmit = (data) => {
    setTasks([...tasks, data]);
  };
  // console.log(tasks);

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

        <Row>
          <Col md="6" className="gl">
            <TaskList tasks={tasks} />
          </Col>
          <Col md="6" className="bl">
            <NotToDoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import { AddTaskForm } from "./components/add-task-form/AddTaskForm";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import { TaskList } from "./components/task-list/TaskList";
import { NotToDoList } from "./components/task-list/NotToDoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [badTasks, setBadTasks] = useState([]);

  const totalHrs = tasks.reduce((subttl, item) => {
    return subttl + +item.hr;
  }, 0);

  const handleOnSubmit = (data) => {
    setTasks([...tasks, data]);
  };
  // console.log(tasks);

  //mark from task list to bad task list
  const markAsBadList = (theOneSelected, i) => {
    // console.log(theOneSelected, i);

    //1.take the selected item out and place in bad array
    const selectedItem = tasks[i];
    // console.log(selectedItem, i);
    // console.log(theOneSelected);

    setBadTasks([...badTasks, selectedItem]);

    //2.remove the item from task array list and update the array -2 ways -

    //1.filter method
    // const tempArg = tasks.filter((item, index) => index !== i);
    // setTasks(tempArg);
    // console.log(tempArg);

    //2.
    const tempArg = [...tasks];
    tempArg.splice(i, 1);
    setTasks(tempArg);
  };

  console.log(tasks, badTasks);

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
            <TaskList tasks={tasks} markAsBadList={markAsBadList} />
          </Col>
          <Col md="6" className="bl">
            <NotToDoList />
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert variant="success">
              Total Hours allocated ={totalHrs} hrs/week
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;

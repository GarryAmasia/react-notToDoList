import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./AddTaskForm.css";
import { useState } from "react";

const initialFormData = {
  task: "",
  hr: 0,
};

export const AddTaskForm = () => {
  const [formDt, setFormDt] = useState(initialFormData);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
  };

  return (
    <Form>
      <Row>
        <Col md={7} className="task">
          <Form.Control
            name="task"
            placeholder="Tasks"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col md={3}>
          <Form.Control
            type="number"
            name="hr"
            placeholder="Hours"
            required
            className="hour"
            onChange={handleOnChange}
          />
        </Col>
        <Col md={2}>
          <Button variant="dark" type="submit" className="button">
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

import React from "react";
import { Button, Table } from "react-bootstrap";

export const TaskList = ({ tasks }) => {
  //   console.log(tasks);
  return (
    <div>
      <h2>Task List</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hour</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.task}</td>
                <td>{item.hr}</td>
                <td>
                  <Button variant="danger">Mark as bad list</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

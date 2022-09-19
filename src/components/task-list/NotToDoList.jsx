import React from "react";
import { Table, Button } from "react-bootstrap";

export const NotToDoList = ({ badTasks }) => {
  return (
    <div>
      <h2>Bad Task List</h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Task</th>
            <th>Hour</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {badTasks.map((badTask, i) => {
            return (
              <tr key={i}>
                <td>{badTask.task}</td>
                <td>{badTask.hr}</td>
                <td>
                  <Button variant="success">Mark as tasklist</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

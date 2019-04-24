import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class TodoForm extends Component {
  state = {
    title: ''
  }

  render() {
    return (
      <Form>
        <Form.Label>Task: </Form.Label>
        <Form.Control type="text" placeholder="Normal text" />

        <Form.Label className="mt-2">Deadline: </Form.Label>
        <Form.Control type="date" placeholder="Normal text" />

        <Form.Label className="mt-2">Progress: </Form.Label>
        <Form.Control type="text" placeholder="Normal text" />

        <Button variant="primary" type="submit" className="mt-5">
          Submit
        </Button>
      </Form>
    )
  }
}

// PropTypes
TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm

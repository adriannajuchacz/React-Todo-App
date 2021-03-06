import React, { Component } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      todos: [
        {
          id: 0,
          text: 'Beispielseite mit dem Bootstrap Framework anlegen',
          deadline: '25-04-2019',
          progress: '0%'
        },
        {
          id: 1,
          text: 'Second task',
          deadline: '25-04-2019',
          progress: '0%'
        },
        {
          id: 2,
          text: 'Third task',
          deadline: '25-04-2019',
          progress: '0%'
        },
        {
          id: 3,
          text: 'Fourth task',
          deadline: '25-04-2019',
          progress: '0%'
        }
      ]
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>React-Todo-App</Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Impressum</Nav.Link>
      </Navbar>
        <div className="col mt-5">
          <Todos todos={this.state.todos} showForm={this.handleShow} />
          <Button variant="primary" className="w-100" onClick={this.handleShow}>+</Button>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <TodoForm todos={this.state.todos}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;

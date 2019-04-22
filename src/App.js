import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
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
  }
  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

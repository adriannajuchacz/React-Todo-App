import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    return (
        <div className="card mb-3">
          <div className="card-body row">
            <div className="col-1">
              <input type="checkbox"/>
            </div>
            <div className="col-5">
              <div className="row no-gutters">
                <p className="m-0">{this.props.todo.text}</p>
              </div>
            </div>
            <div className="col-2">
              <p className="m-0">{this.props.todo.deadline}</p>
            </div>
            <div className="col-1">
              <p className="m-0">{this.props.todo.progress}</p>
            </div>
          </div>
        </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;

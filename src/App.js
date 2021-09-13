import './App.css';

import React, { Component } from 'react';
import Overview from './components/Overview';

/*Things to do
    - Input field for task info
    - Button to submit the task 
    - submitted content will be added to task array 
    - 
*/

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter Task</label>
          <input type="text" id="taskInput" />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;

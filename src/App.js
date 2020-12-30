import './App.css';
import React, { Component } from 'react';
import Todo from './components/todo/Todo';

class App extends Component {

  state = {
    tasks: [
     { id: 't1', task: 'Wash the dishes.', assignedDate: '12/10/2020', dueDate: '12/10/2020'},
     { id: 't2', task: 'Do the laundry.', assignedDate: '12/10/2020', dueDate: '12/11/2020'},
     { id: 't3', task: 'Fix Profolio.', assignedDate: '12/10/2020', dueDate: '1/1/2021'},
     { id: 't4', task: 'Buy Presents.', assignedDate: '12/10/2020', dueDate: '12/23/2020'},
    ]
}


updateTaskHandler = (event, taskId) => {

  const taskIndex = this.state.tasks.findIndex(task => {
    return task.id === taskId;
  });

  const task = { ...this.state.tasks[taskId] };
  

}


deleteTaskHandler = (taskIndex) => {
  const taskListCopy = [...this.state.tasks];
  taskListCopy.splice(taskIndex, 1);

  this.setState(
    {
      tasks: taskListCopy,
    }
  )

}

  render() {

    let taskList = null;

    if (this.state.tasks) {

      taskList = (
        <div>
          {
            this.state.tasks.map((task, index) => {
              return <Todo click={() => this.deleteTaskHandler(index)} key={task.id} task={task.task} assignedDate={task.assignedDate} dueDate={task.dueDate}></Todo>
            })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Simple React To-do List</h1>
        {taskList}
      </div>
    );
  }
}

export default App;

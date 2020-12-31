import React, { Component } from 'react';
import classes from './ToDoList.module.css';
import TaskList from './TaskList/TaskList';

class ToDoList extends Component {

    state = {
        newTaskInput: '',
        taskList: [],
    }


    addTask = () => {
        
       const newTask = {
            taskText: this.state.newTaskInput,
        }

        let newTaskList = [...this.state.taskList];
        newTaskList.push(newTask);
        this.setState(
            {
                taskList: newTaskList
            }
        );

    }


    updateTask = (event) => {
        this.setState(
            {
                newTaskInput: event.target.value
            }
        )
        console.log('Current Message: ' + event.target.value);

    }
    
    
    
    render() {




    return (
        <div className={classes.ToDoList}>
            <div>
            <h1 className={classes.Title}>To Do List</h1>
            <div className={classes.InputFormSpace}>
            <h3>Next thing to do: </h3>
            <input onChange={this.updateTask} name="inputText" className={classes.InputControlText} type="text" />
            <button onClick={this.addTask} className={classes.InputControlButton}>Add Task</button>
            </div>
            <TaskList tasks={this.state.taskList} /> 
            </div>
        </div>
    );
    }
}

export default ToDoList;
import React, { Component } from 'react';
import classes from './ToDoList.module.css';

class ToDoList extends Component {

    state = {
        newTaskInput: '',
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
            <h1 className={classes.Title}>To Do List</h1>
            <div className={classes.InputFormSpace}>
            <h3>Next thing to do: </h3>
            <input onChange={this.updateTask} name="inputText" className={classes.InputControlText} type="text" />
            <button onClick={this.AddTask} className={classes.InputControlButton}>Add Task</button>
            </div>
        </div>
    );
    }
}

export default ToDoList;
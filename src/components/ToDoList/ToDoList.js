import React, { Component } from 'react';
import classes from './ToDoList.module.css';
import TaskList from './TaskList/TaskList';

class ToDoList extends Component {

    state = {
        newTaskInput: '',
        taskList: [],
        taskIDTotal: 0,
    }

    addTask = () => {
        

        let total = this.state.taskIDTotal;
        const newTask = {
            taskText: this.state.newTaskInput,
            taskID: total 
        }

        total = total + 1;
        

        let newTaskList = [...this.state.taskList];
        newTaskList.push(newTask);
        this.setState(
            {
                taskList: newTaskList
            }
        );
        
    };

    removeTask = (taskID) => {
        let removeIndex = null;
        let copyOfTaskArray = [...this.state.taskList];
        console.log('Logging Task ID:' + taskID);
        let taskToDelete = copyOfTaskArray.find((task, index) => {
            console.log(task);
            if(task.id === taskID) {
                removeIndex = index;
                return true;
            }
            else {
                return false;
            }
        });

        copyOfTaskArray.splice(removeIndex, 1);

        this.setState({
            taskList: copyOfTaskArray
        });

        

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
            <TaskList clicked={this.removeTask} tasks={this.state.taskList} /> 
            </div>
        </div>
    );
    }
}

export default ToDoList;
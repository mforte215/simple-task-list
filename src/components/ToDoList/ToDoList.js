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

        console.log('Outputting new task.')
        
        if (this.state.newTaskInput === '') {

        }
        else {
        console.log('taskIDTotal: ' + this.state.taskIDTotal);
        const newTask = {
            taskText: this.state.newTaskInput,
            taskID: (this.state.taskIDTotal + 1), 
        }

        
        

        let newTaskList = [...this.state.taskList];
        newTaskList.push(newTask);
        this.setState(
            {
                taskList: newTaskList,
                taskIDTotal: (this.state.taskIDTotal + 1), 
            }
        );  
    }  
    
}

    removeTask = (taskID) => {
        console.log('Deleting Task');
        let copyOfTaskArray = [...this.state.taskList];
        /*let correctedID = parseInt(taskID) + 1; */
        let foundIndex = null;

            foundIndex = copyOfTaskArray.findIndex((taskElement) => {
            return taskElement.taskID === taskID;
        });

            copyOfTaskArray.splice(foundIndex, 1);

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
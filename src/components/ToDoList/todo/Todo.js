
import React from 'react';
import classes from './Todo.module.css';

const todo = (props) => {


    let taskNumber = parseInt(props.id) + 1;

    return (
        <div onClick={() => props.click(props.id)} className={classes.Todo}>
            <p>{taskNumber}. {props.taskText}</p><button>Delete</button>
        </div>
    );
}

export default todo;
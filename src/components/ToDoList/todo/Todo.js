
import React from 'react';
import classes from './Todo.module.css';

const todo = (props) => {

    return (
        <div className={classes.Todo}>
            <p>{props.id}. {props.taskText}</p><button onClick={() => props.click(props.id)}>Delete</button>
        </div>
    );
}

export default todo;
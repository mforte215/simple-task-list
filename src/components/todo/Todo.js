import React from 'react';

const todo = (props) => {

    return (
        <div>
            <p>Task: {props.task}</p>
            <p>Assigned Date: {props.assignedDate}</p>
            <p>Due Date: {props.dueDate}</p>
            <input type="text" />
            <button onClick={props.update}>Update Task</button>
            <button onClick={props.click} >Delete Task</button>
        </div>
    );
}

export default todo;
import React from 'react';

const todo = (props) => {


    let taskNumber = parseInt(props.id) + 1;

    return (
        <div>
            <p>Task #{taskNumber}</p>
            <p>{props.taskText}</p>
        </div>
    );
}

export default todo;
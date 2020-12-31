import React from 'react';
import Todo from '../todo/Todo';

const taskList = (props) => {

    let transformedTasks = Object.keys(props.tasks).map(keyIndex => {
        return [...Array(props.tasks[keyIndex])].map((v, i) => {

            return <Todo click={props.clicked} key={keyIndex + i} id={keyIndex} taskText={props.tasks[keyIndex].taskText} />
        });
    })

    return (
        <div>
            {transformedTasks}
        </div>
    );
}

export default taskList;
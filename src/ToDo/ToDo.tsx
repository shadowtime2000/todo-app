import React, { useState, memo } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ToDo.css';

type Props = {
    name: string,
    description: string,
    index: number,
    onDelete: any
}

function ToDo(props: Props) {

    const [completed, setCompleted] = useState(false);

    return (
        <div className={"todo" + (completed ? " todo-completed" : "")}>
            <h3 className="name">{props.name}</h3>
            <div className="description">{props.description}</div>
            <button className="todo-delete btn btn-danger" onClick={() => props.onDelete(props.index)}>Delete!</button>
            <button className="todo-complete btn btn-success" onClick={() => setCompleted(!completed)}>{completed ? "Uncomplete" : "Complete"}</button>
        </div>
    )
}

export default memo(ToDo);
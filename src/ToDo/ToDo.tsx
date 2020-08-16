import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './ToDo.css';

type Props = {
    name: string,
    description: string,
    index: number,
    onDelete: any
}

function ToDo(props: Props) {
    return (
        <div className="todo">
            <h3 className="name">{props.name}</h3>
            <div className="description">{props.description}</div>
            <button className="todo-delete btn btn-danger" onClick={() => props.onDelete(props.index)}>Delete!</button>
        </div>
    )
}

export default ToDo;
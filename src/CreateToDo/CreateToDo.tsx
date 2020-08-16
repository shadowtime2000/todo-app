import React, { useState, memo } from 'react';

type Props = {
    onNewToDo: any
}

function CreateToDo(props: Props) {

    const [todoName, setTodoName] = useState("");
    const [todoDescription, setTodoDescription] = useState("");

    const createToDo = () => {
        if (todoName === "") return;
        props.onNewToDo(todoName, todoDescription);
        setTodoName("");
        setTodoDescription("");
    }

    return (
        <div className="create-todo">
            <h1>Create ToDo</h1>
            <b>Name:</b> <input value={todoName} onChange={(e) => setTodoName(e.target.value)} className="todo-name form-control" /><br/>
            <b>Short Description: </b> <input value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} className="todo-description form-control" /><br/>
            <button className="create-todo-btn btn btn-primary" onClick={createToDo}>Create ToDo!</button>
        </div>
    );
}

export default memo(CreateToDo);
import React, { useState } from 'react';

import ToDo from './ToDo/ToDo';
import CreateToDo from './CreateToDo/CreateToDo'

import './App.css';

function App() {

  const emptyArray: any[] = [];
  const [todoList, setTodoList] = useState(emptyArray);

  const newTodo = (name: string, description: string) => {
    const newArr = todoList.slice();
    newArr.push({name, description});
    setTodoList(newArr);
  }

  const deleteTodo = (i: number) => {
    const newArr = todoList.slice();
    newArr.splice(i, 1);
    setTodoList(newArr);
  }

  return (
    <div className="App container">
      <CreateToDo onNewToDo={newTodo} />
      <hr />
      <h2>ToDos:</h2>
      {todoList.map((item, index) => <ToDo index={index} key={index} name={item.name} description={item.description} onDelete={deleteTodo} />)}
    </div>
  );
}

export default App;

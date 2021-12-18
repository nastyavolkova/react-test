import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        {id:1, completed: false, title: 'Подремать'},
        {id:2, completed: false, title: 'Побегать'},
        {id:3, completed: false, title: 'Покусать'},
    ]
  return (
      <div className='wrapper'>
        <h1>Кошачьи дела</h1>
        <TodoList deals = {todos}/>
      </div>
  );
}

export default App;

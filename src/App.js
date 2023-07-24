import { TodoCounter } from './TodoCounter';
import { TodoSearch  } from './TodoSearch';
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem';
import { TodoCreateButton } from './TodoCreateButton';
import './App.css';
import React from 'react';

const defaultTodos = [
  {text: "Hacer pasta", completed: false},
  {text: "Ir al gym", completed: true},
  {text: "Saltar la cuerda", completed: true},
  {text: "Escuchar a milo j", completed: false},
]

function App() {
  return (
    <React.Fragment>
  
      <TodoCounter completed ={9} total={12} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key = {todo.text} 
            text = {todo.text}
            completed = {todo.completed}
            />
        ))}
      </TodoList>

      <TodoCreateButton/>

    </React.Fragment>
  );
}

export default App;

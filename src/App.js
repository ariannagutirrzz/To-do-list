import { TodoCounter } from './components/TodoElements/TodoCounter';
import { TodoSearch  } from './components/TodoElements/TodoSearch';
import { TodoList } from './components/Task/TodoList'
import { TodoItem } from './components/Task/TodoItem';
import { CreateButton } from './components/Buttons/CreateButton';
// import Modal from 'react-modal';
import React from 'react';

const defaultTodos = [
  {text: "Hacer pasta", completed: false},
  {text: "Ir al gym", completed: true},
  {text: "Saltar la cuerda", completed: true},
  {text: "Escuchar a milo j", completed: false},
]

function App() {
  return (
    <>
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

      <CreateButton/>
    </>
  );
}

export default App;

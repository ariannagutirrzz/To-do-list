import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";
// import Modal from 'react-modal';
import React from "react";

const defaultTodos = [
  { text: "Hacer pasta", completed: false },
  { text: "Ir al gym", completed: true },
  { text: "Saltar la cuerda", completed: false },
  { text: "Escuchar a milo j", completed: true },
  { text: "gastar dinero", completed: true },
  { text: "gastar ", completed: false },
];

function App() {

  // USE STATES (HOOKS)

  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // USE STATE FOR INPUT

  const [searchValue, setValueSearch] = React.useState("");
  console.log("The user wrote " + searchValue);

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setValueSearch={setValueSearch} />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateButton />
    </>
  );
}

export default App;

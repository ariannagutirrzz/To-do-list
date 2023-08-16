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
  { text: "gastar dineró", completed: true },
];

function App() {

  // USE STATES (HOOKS)

  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // USE STATE FOR INPUT

  const [searchValue, setValueSearch] = React.useState("");
  console.log("The user wrote " + searchValue);

  const searchingTodos = todos.filter((todo) => {
    const todoText = removeAccents(todo.text.toLowerCase())
    const searchText = removeAccents(searchValue.toLocaleLowerCase());
    return todoText.includes(searchText);
  })

  function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setValueSearch={setValueSearch} />

      <TodoList>
        {searchingTodos.map((todo) => (
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

import { TodoCounter } from "./components/TodoElements/TodoCounter";
import { TodoSearch } from "./components/TodoElements/TodoSearch";
import { TodoList } from "./components/Task/TodoList";
import { TodoItem } from "./components/Task/TodoItem";
import { CreateButton } from "./components/Buttons/CreateButton";
// import Modal from 'react-modal';
import React from "react";

const defaultTodos = [
  { text: "Cook", completed: false },
  { text: "Go to the gym", completed: true },
  { text: "Jump the rope", completed: false },
  { text: "Listen to milo j", completed: true },
  { text: "Make money", completed: true },
];

function App() {

  // USE STATES (HOOKS)

  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  // USE STATE FOR INPUT

  const [searchValue, setValueSearch] = React.useState("");


  const searchingTodos = todos.filter((todo) => {
    const todoText = removeAccents(todo.text.toLowerCase())
    const searchText = removeAccents(searchValue.toLocaleLowerCase());
    return todoText.includes(searchText);
  })

  function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text == text
    );

    console.log(todoIndex)
    let completed = newTodos[todoIndex].completed;
    newTodos[todoIndex].completed = !completed;
    setTodos(newTodos);
    console.log(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex( 
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
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
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateButton />
    </>
  );
}

export default App;

import { InputTodo } from "./components/InputTodo";
import { ImcompleteTodos } from "./components/ImcompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";
import { useState } from "react";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setimcompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setimcompleteTodos(newTodos);
    setTodoText("");
  }
    const onClickDelete = (index) => {
        const newTodos = [...imcompleteTodos];
        newTodos.splice(index, 1);
        setimcompleteTodos(newTodos);
    }
    const onClickComplete = (index) => {
        const newImcompleteTodos = [...imcompleteTodos];
        newImcompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
        setimcompleteTodos(newImcompleteTodos);
        setcompleteTodos(newCompleteTodos);
    }
    const onClickReturn = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        
        const newImcompleteTodos = [...imcompleteTodos, completeTodos[index]];
        setcompleteTodos(newCompleteTodos);
        setimcompleteTodos(newImcompleteTodos);
    }
  return (
    <>
        <InputTodo 
            todoText={todoText}
            onChangeTodoText={onChangeTodoText}
            onClickAddTodo={onClickAddTodo}
        />
        <ImcompleteTodos
            imcompleteTodos={imcompleteTodos}
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
        />
        <CompleteTodos
            completeTodos={completeTodos}
            onClickReturn={onClickReturn}
        />
    </>
  )
};
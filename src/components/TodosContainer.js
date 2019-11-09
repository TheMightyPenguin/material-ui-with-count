import React from "react";
import { Paper } from "@material-ui/core";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodosContainer = props => {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      done: false
    }
  ]);

  return (
    <Paper elevation={0}>
      <AddTodo
        onAdd={newTask => {
          const newTodos = [...todos];
          newTodos.push({ text: newTask, done: false });
          setTodos(newTodos);
        }}
      />
      <TodoList
        todos={todos}
        onDone={index => {
          const newTodos = [...todos];
          const modifiedTodo = todos[index];
          modifiedTodo.done = !modifiedTodo.done;
          newTodos[index] = modifiedTodo;
          setTodos(newTodos);
        }}
        onRemove={index => {
          const newTodos = [...todos];
          newTodos.splice(index, 1);
          setTodos(newTodos);
        }}
      />
    </Paper>
  );
};

export default TodosContainer;

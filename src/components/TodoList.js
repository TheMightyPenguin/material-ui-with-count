import React from "react";
import { List, Paper } from "@material-ui/core";
import TodoListItem from "./TodoListItem";

const TodoList = props => {
  if (props.todos.length === 0) {
    return null;
  }

  return (
    <Paper style={{ margin: 16 }}>
      <List style={{ overflow: "scroll" }}>
        {props.todos.map((todo, index) => (
          <TodoListItem
            todo={todo}
            index={index}
            showDivider={index !== props.todos.length - 1}
            key={`TodoItem.${index}`}
            onDone={() => props.onDone(index)}
            onRemove={() => props.onRemove(index)}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;

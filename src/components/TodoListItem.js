import React from "react";

import {
  Checkbox,
  ListItem,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

const TodoListItem = props => {
  return (
    <ListItem divider={props.showDivider}>
      <Checkbox
        onClick={props.onDone}
        checked={props.todo.done}
        disableRipple
      />
      <ListItemText primary={props.todo.text} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={props.onRemove}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;

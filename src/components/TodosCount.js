import React from "react";
import { Badge } from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const TodosCount = () => {
  return (
    <Badge color="secondary" badgeContent={3}>
      <AssignmentTurnedInIcon />
    </Badge>
  );
};

export default TodosCount;

import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import TodosCount from "./TodosCount";

const Header = props => {
  return (
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <Box display="flex" width={1}>
          <Typography color="inherit">Todo App!</Typography>
          <Box margin="auto" />
          <TodosCount />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

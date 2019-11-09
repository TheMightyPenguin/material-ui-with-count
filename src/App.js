import React from "react";
import { Paper } from "@material-ui/core";
import TodosContainer from "./components/TodosContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <Paper
      elevation={0}
      style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
    >
      <Header />
      <TodosContainer />
    </Paper>
  );
};

export default App;

import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddTodo = props => {
  const [value, setValue] = React.useState("");

  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            value={value}
            onChange={event => {
              setValue(event.target.value);
            }}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            disabled={value.length === 0}
            onClick={() => {
              props.onAdd(value);
              setValue("");
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;

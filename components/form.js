import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import Router from "next/router";

const useStyles = makeStyles({
  form: {
    margin: "0 auto",
    width: 650,
    color: "#fff"
  },

  textField: {
    padding: 0,
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: "#fff"
  },
  formGrid: {
    padding: 30
  }
});

function Form(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(values);

    await axios.post(
      "https://portfolio-leodaiub.herokuapp.com/contact",
      values
    );
    Router.push("/");
    //props.submitForm();
  };

  const handleChange = e => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form className={classes.form} onSubmit={e => handleSubmit(e)}>
      <Grid
        justify="space-around"
        container
        direction="column"
        spacing={2}
        className={classes.formGrid}
      >
        <Grid item>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Nome"
            name="name"
            margin="normal"
            fullWidth
            variant="outlined"
            required
            value={values.name}
            onChange={e => handleChange(e)}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            required
            label="E-mail"
            name="email"
            margin="normal"
            fullWidth
            type="email"
            variant="outlined"
            value={values.email}
            onChange={e => handleChange(e)}
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Mensagem"
            margin="normal"
            variant="outlined"
            multiline
            name="message"
            fullWidth
            rows={6}
            value={values.message}
            onChange={e => handleChange(e)}
          />
        </Grid>
        <Grid item>
          <Button type="submit" fullWidth className={classes.button}>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;

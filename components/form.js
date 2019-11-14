import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  form: {
    margin: "0 auto",
    width: 550,
    color: "#fff",
    border: "1px solid #fff"
  },

  textField: {
    padding: 10,
    backgroundColor: "#53caff"
  }
});

function Form(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    axios.post("/contact", values);
    //props.submitForm();
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <Grid justify="center" container direction="column">
        <Grid item className={classes.textField}>
          <TextField
            id="filled-basic"
            label="Nome"
            name="name"
            margin="normal"
            fullWidth
            variant="filled"
            value={values.name}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item className={classes.textField}>
          <TextField
            id="filled-basic"
            label="E-mail"
            name="email"
            margin="normal"
            fullWidth
            type="email"
            variant="filled"
            value={values.email}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item className={classes.textField}>
          <TextField
            id="filled-basic"
            label="Mensagem"
            margin="normal"
            variant="filled"
            multiline
            name="message"
            fullWidth
            rows={6}
            value={values.message}
            onChange={(e) => handleChange(e)}
          />
        </Grid>
        <Grid item className={classes.textField}>
          <Button type="submit" fullWidth>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Form;

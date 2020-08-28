import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    '& .MuiFormControl-root': {
      width: '55%',
      margin: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: theme.spacing(0.5),
      }
    }    
  },
  paper: {
    textAlign: "center",
    margin: theme.spacing(1),
    padding: theme.spacing(0.5,2),

    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(1),
      padding: theme.spacing(1,2.5,2,1)
    },
  },
  button: {
    margin: theme.spacing(1),
    width: "55%",
    fontWeight: 500,
    fontSize: "1.4rem",
    textTransform: "none"
  },
  snackbar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const initialValues = {
  name: '',
  email: '',
  message : '',
}

export default function ContactPage() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [open, setOpen] = React.useState(false);

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
  }
  const resetForm = ()=> {
    setValues(initialValues);
  }
  const handleSubmit =async(e)=> {
    e.preventDefault();
    // console.log(values)
    const {name,email,message} = values;
    console.log('post')
    axios.post('/api/form',{
      
        name,
        email,
        message
      
    });
    resetForm();
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
 
  
  return (
  <Paper className={classes.paper}>
  <Typography variant="h4" color="primary">Get In Touch</Typography>
    <form method="POST" action="send" className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
          variant="outlined"
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          />
          <TextField
          variant="outlined"
          label="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          />
          <TextField
          variant="outlined"
          label="Message"
          name="message"
          multiline
          rows={10}
          rowsMax={15}
          value={values.message}
          onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
            value="submit"
            onClick={handleClick}
          >
            Send Now
          </Button>
          
        </Grid> 
      </Grid>
    </form>
    <div className={classes.snackbar}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mail sent Succesfully
        </Alert>
      </Snackbar>
    </div>
    </Paper>
  )
}
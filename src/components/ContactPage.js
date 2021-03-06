import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, Typography } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
import * as EmailValidator from 'email-validator';

let tempId;
let userId;

if(process.env.NODE_ENV !== 'production') {
  tempId = process.env.REACT_APP_TEMPLATE_ID;
  userId = process.env.REACT_APP_USER_ID;
} else {
  tempId = process.env.TEMPLATE_ID;
  userId = process.env.GITHUB_USER_ID;
}

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
    margin: theme.spacing(-1),
    padding: theme.spacing(0.5,2),

    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(-1),
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
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(undefined);

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

      if(EmailValidator.validate(e.target.email.value)){
        emailjs.sendForm('gmail', tempId , e.target, userId)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        handleClick();
        resetForm();
        setError(false)
        setHelperText(undefined)
        }
        else{
          setError(true)
          setHelperText('Incorrect Email-Id')
        }
    }

    const handleClick = (e) => {
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
    <form method="POST" className={classes.root} onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField
          required
          variant="outlined"
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          />
          <TextField
          error={error}
          required
          variant="outlined"
          label="Email"
          name="email"
          helperText={helperText}
          value={values.email}
          onChange={handleInputChange}
          />
          <TextField
          required
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
          >
            Send Now
          </Button>
          
        </Grid> 
      </Grid>
    </form>
    <div className={classes.snackbar}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Mail sent Succesfully
        </Alert>
      </Snackbar>
    </div>
    </Paper>
  )
}
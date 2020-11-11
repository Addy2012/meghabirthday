import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router";
import {Howl} from 'howler';
import bgm from '../asset/birthday.mp3';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  bgc:  {
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.4906337535014006) 35%, rgba(0,212,255,1) 100%)'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Login(props) {
  const soundPlay = (src) => {
    const sound = new Howl ({
      src,
      html5: true
    })
    sound.play();
  }
  
const audioClips = [
  {sound: bgm, label:"rain forest"}
]

  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if(email===props.loginData.email && password===props.loginData.password)
      {
        console.log("Hello")
        soundPlay(audioClips[0].sound)
        history.push("/question");
      }
    else
      {
        alert("Bhaag be Rhea Chakraborty")
      }
  }
  return (
    <Grid container component="main" className={classes.root}
    >
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} /> 
      <Grid className={classes.bgc} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
    <Avatar className={classes.avatar} src="https://i.postimg.cc/Lsg1cxGB/shinchan.jpg">
    </Avatar>
    <Typography component="h1" variant="h5">
    Sign in
  </Typography>
    <form className={classes.form} onSubmit={handleSubmit}>
        <TextField          
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Email Address"
        name="email"
        autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
          variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        <Button type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit} disabled={!validateForm()}>
          Sign in
        </Button>
      </form></div>
      </Grid>
    </Grid>
  );
}

export default Login;
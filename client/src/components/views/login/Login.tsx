import React, {useState, useContext, useEffect } from 'react';


import {
  
  Route
} from 'react-router-dom';


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from "react-router-dom";
import Container from '@material-ui/core/Container';




const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
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
  input__field: {
      backgroundColor: "white"
    }
  }));

const Login = () => {
    const classes = useStyles();

    let navigate = useNavigate();

    const [profile, setProfile] = useState({ email: "", password: ""})
    // const {login} = useContext(AuthContext)

    useEffect (() => {

      setProfile({ email: "", password: ""})

    }, [])

    // const handleChange = (e:React.ChangeEvent<any>) => {
    //     console.log(`e`, e)
    //     // setProfile({ ...profile, [e.target.name] : e.target.value});

    // }

    const handleOnsubmit = (event: { preventDefault: () => void }) => {
        console.log(`event`, event)
        event.preventDefault()
        // login(profile)
        navigate('/console')
        

    }

    
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
          <form className={classes.form} noValidate onSubmit={handleOnsubmit}>
            {/* <form className={classes.form} noValidate > */}
            <TextField
            className="input__field"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            // onChange={handleChange}
            value={profile.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // onChange={handleChange}
            value={profile.password}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
           >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Sign in with Google account
              </Link> */}
              {/* <Route to="#" variant="body2">
                
                
              </Route> */}
            </Grid>
            <Grid item>
              {/* <Link href={'/register'} variant="body2">
                New in Town? Sign Up
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
  
    </Container>
    );
};

export default Login;

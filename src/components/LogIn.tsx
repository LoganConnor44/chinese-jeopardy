import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import fire from '../firebase';

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    subject: {
        textAlign: "center"
    },
    body: {
        textAlign: "center"
    },
    button: {
        // right aligns
        marginLeft: 'auto',
    }
});

const LogIn = () => {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.subject} 
                        gutterBottom 
                        variant="h5" 
                        component="h2">
                        Log In
                    </Typography>
                    <Typography className={classes.body} 
                        variant="body2" 
                        color="textSecondary" 
                        component="p">
                        Use Google
                    </Typography>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
                </CardContent>
                <CardActions>
                    <Button className={classes.button}
                        size="small" 
                        color="primary">
                        Log In
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default LogIn;
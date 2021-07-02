import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const Start = () => {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.subject} 
                        gutterBottom 
                        variant="h5" 
                        component="h2">
                        New Game
                    </Typography>
                    <Typography className={classes.body} 
                        variant="body2" 
                        color="textSecondary" 
                        component="p">
                        Click here to start a new game!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button}
                        size="small" 
                        color="primary">
                        Create
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Start;
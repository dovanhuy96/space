import { Grid, Paper } from '@mui/material';
import Navigation from '../../components/Navigation';
import useStyles from './styles';

const TimeLine = () : JSX.Element => {

    const classes = useStyles();
    return (
        <div className='flex-center w-100vw h-100vh'>
            <Paper
                elevation={3}
                className={`${classes.wrapperTimeLine}`}
            >
                <Grid 
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    className={``}>
                    <Grid item xs={3} className={`${classes.wrapNav}`}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={9} className={`${classes.wrapContent}`}>
                        content
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default TimeLine;
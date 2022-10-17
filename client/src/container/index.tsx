
import { Grid, Paper } from '@mui/material';
import Navigation from '../components/Navigation';
import Login from '../pages/Account/Login';
import useStyles from './styles';

const MainApp = ({ children } : any) : JSX.Element => {

    const classes = useStyles();
    console.log("chilren", children);
    
    return (
        <div 
            className={`flex-center w-100vw h-100vh`}
        >
            <Paper
                elevation={2}
                sx={{
                    padding: '32px'
                }}
                className={`${classes.wrapperTimeLine}`}
            >
                <Grid
                    spacing={2}
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={3} className={`${classes.wrapNav}`}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={9} className={`${classes.wrapContent}`}>
                        {/* {children} */}
                        <Login />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default MainApp;
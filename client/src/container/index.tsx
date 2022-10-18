
import { Box, Grid, Paper } from '@mui/material';
import Navigation from '../components/Navigation';
import useStyles from './styles';

const MainApp = ({ children } : any) : JSX.Element => {
    const classes = useStyles();
    
    return (
        <div 
            className={`flex-center w-100vw h-100vh`}
        >
            <Paper
                elevation={5}
                className={`${classes.wrapperTimeLine}`}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={3} className={`${classes.wrapNav}`}>
                        <Box
                            className='flex-center flex-col'
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '16px',
                            }}
                        >
                            <Navigation />
                        </Box>
                    </Grid>
                    <Grid item xs={9} className={`${classes.wrapContent}`}>
                        {children}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default MainApp;
import { Box } from '@mui/material';
import { useState } from 'react';
import Menu from './Menu';
import Profile from './Profile';
import useStyles from './styles'


const Navigation = () : JSX.Element => {
    const classes = useStyles();
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <div className={`flex-col ${classes.wrapperNav}`}>
            <Profile />
            <Menu />
            <Box className={classes.image} sx={{ marginTop: 'auto' }}>
				<img src={'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='} />
			</Box>
        </div>
    )
}
export default Navigation;
import { useState } from 'react';
import Profile from './Profile';
import useStyles from './styles'


const Navigation = () : JSX.Element => {
    const classes = useStyles();
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <div className={`flex-col`}>
            <Profile />
            <div>2</div>
            <div>3</div>
        </div>
    )
}
export default Navigation;
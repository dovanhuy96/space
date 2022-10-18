import { Avatar, Button } from "@mui/material";
import {observer} from 'mobx-react-lite'
import useStyles from './styles';
import authStore from "../../../store/AuthStore";
import { useState } from "react";
import SettingAccount from "./SettingAccount";
import { useHistory } from "react-router-dom";

const Profile = observer(() : JSX.Element => {
    const auth = authStore.isAuth;
    const [openModal, setOpenModal] = useState<boolean>(false);
    const history = useHistory();
    
    const classes = useStyles();
    return (
        <div className={`${classes.containerProfile} flex-col flex-center`}>
            {auth ? (
                <>
                    <Avatar
                        alt="Do Van Huy"
                        src="/static/images/avatar/1.jpg"
                        onClick={() => {setOpenModal(true)}}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                    <SettingAccount
                        open={openModal}
                        handleClose={() => {setOpenModal(false)}}
                    />
                    <span 
                        className={`${classes.name}`}
                    >
                       Daenerys Targaryen
                    </span>
                </>
            ) : (
                <Button
                    style={{
                        width: '100px',
                        height: '30px',
                    }}
                    variant="outlined"
                    onClick={() => {history.push('/login')}}
                >
                    Login
                </Button>
            )}
        </div>
    )
})
export default Profile;
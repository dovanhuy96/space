import { Avatar, Button } from "@mui/material";
import {observer} from 'mobx-react-lite'
import useStyles from './styles';
import authStore from "../../../store/AuthStore";
import { useState } from "react";
import SettingAccount from "./SettingAccount";

const Profile = observer(() : JSX.Element => {
    const auth = authStore.isAuth;
    const [openModal, setOpenModal] = useState<boolean>(false);
    console.log("openModal", openModal);
    
    
    const classes = useStyles();
    return (
        <div className={`${classes.containerProfile} flex-col flex-center`}>
            {!auth ? (
                <>
                    <Avatar
                        alt="Do Van Huy"
                        src="/static/images/avatar/1.jpg"
                        onClick={() => {setOpenModal(true)}}
                    />
                    <SettingAccount
                        open={openModal}
                        handleClose={() => {setOpenModal(false)}}
                    />
                    <span 
                        className={`${classes.name}`}
                    >
                        Do Van Huy
                    </span>
                </>
            ) : (
                <Button
                    style={{
                        width: '100px',
                        height: '30px',
                    }}
                    variant="outlined"
                >
                    Login
                </Button>
            )}
        </div>
    )
})
export default Profile;
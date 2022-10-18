import { Avatar, Button } from "@mui/material";
import {observer} from 'mobx-react-lite'
import useStyles from './styles';
import authStore from "../../../store/AuthStore";
import { useState } from "react";
import SettingAccount from "./SettingAccount";
import { useHistory } from "react-router-dom";
import DefaultAvatar from '../../../assets/images/avatars/10.png';

const Profile = observer(() : JSX.Element => {
    const auth = authStore.isAuth;
    const [openModal, setOpenModal] = useState<boolean>(false);
    const history = useHistory();
    const classes = useStyles();

    const handleSetting = (data: any) => {
        authStore.setUser(Object.assign(authStore.user, data))
        
    }
    return (
        <div className={`${classes.containerProfile} flex-col flex-center`}>
            {auth ? (
                <>
                    <Avatar
                        alt="avatar"
                        src={authStore.user?.avatar ?? DefaultAvatar}
                        onClick={() => {setOpenModal(true)}}
                        sx={{
                            cursor: 'pointer'
                        }}
                    />
                    <SettingAccount
                        open={openModal}
                        handleClose={() => {setOpenModal(false)}}
                        infoSetting={{
                            fullName: authStore.user?.fullName,
                            avatar: authStore.user?.avatar
                        }}
                        handleSetting={handleSetting}
                    />
                    <span 
                        className={`${classes.name}`}
                    >
                       {authStore.user?.fullName || ''}
                    </span>
                </>
            ) : (
                <Button
                    sx={{
                        width: '100px',
                        minHeight: '30px',
                        fontFamily:'Mali'
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
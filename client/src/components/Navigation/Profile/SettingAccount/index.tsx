import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Avatar, InputAdornment } from "@mui/material";
import { useEffect, useState } from "react";
import { AVARTARS } from "../../../../constants/Images";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { INVALID_USER, LENGTH_TEXT } from "../../../../constants/Message";

const SettingAccount = (props: any): JSX.Element => {
    const {
        open = false,
        handleClose = () => {},
        handleSetting = () => {},
        infoSetting = {
            fullName: '',
            avatar: null,
        }
    } = props;
    const [info, setInfo] = useState<any>(infoSetting);
    const [avatarChose, setAvatarChose] = useState<any>(null);

    useEffect(() => {
        
    }, [])

    const handleChangeInfo = (data: any, field: string) => {
        if (field === 'fullName') {
            setInfo((prev: any) => {
                return {
                    ...prev,
                    fullName: data
                }
            })
        } 
        else {
            setInfo((prev: any) => {
                return {
                    ...prev,
                    avatar: data ?? null
                }
            })
            setAvatarChose(data);
        }
    }

    const handleSave = () => {
        handleClose();
        handleSetting(info);
        setAvatarChose(null);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            scroll="body"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Account Setting"}
            </DialogTitle>
            <DialogContent sx={{ minHeight: '300px' }}>
                <TextField
                    autoFocus
                    label='Full name'
                    type='text'
                    fullWidth
                    variant='standard'
                    error={(info.fullName === "" || info.fullName?.length > 27) ? true : false}
                    helperText={
                        !info.fullName 
                        ? INVALID_USER.FIELD_REQUIRED('Full name') 
                        : info.fullName.length > LENGTH_TEXT.MAX_LENGTH_FULL_NAME 
                        ? INVALID_USER.EXCEEDS_CHARACTER 
                        : ''
                    }
                    defaultValue={infoSetting?.fullName || ''}
                    onChange={(e: any) => {handleChangeInfo(e.target.value, 'fullName')}}
                    InputProps={{
                    endAdornment: (
                            <InputAdornment position="start">
                                {(!info.fullName || info.fullName.length > LENGTH_TEXT.MAX_LENGTH_FULL_NAME ) 
                                && <ErrorOutlineIcon sx={{ color: '#d32f2f' }} />}
                            </InputAdornment>
                        ),
                    }}
                />
                <Grid container spacing={2} mt={4}>
                    {AVARTARS.map((avatar: any, index: number) => (
                        <Grid key={index} item sm={2}>
                            <div className='flex-center'>
                                <Avatar
                                    src={avatar}
                                    sx={{
                                        width: '64px',
                                        height: '64px',
                                        cursor: 'pointer',
                                        border: `${
                                            avatar === avatarChose ? 'solid 3px #666' : 'none'
                                        }`,
                                    }}
                                    onClick={(e: any) => handleChangeInfo(avatar, 'avatar')}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button 
                    color="error" 
                    variant="contained" 
                    size="small" 
                    onClick={handleClose}
                >
                    cancel
                </Button>
                <Button 
                    variant="contained" 
                    size="small" 
                    onClick={handleSave}
                    disabled={
                        !info.fullName 
                        || info.fullName.length > LENGTH_TEXT.MAX_LENGTH_FULL_NAME 
                    } 
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default SettingAccount;
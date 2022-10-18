import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button, TextField, Grid, Avatar } from "@mui/material";
import { useState } from "react";
import { AVARTARS } from "../../../../constants/Images";

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
    const [info, setInfo] = useState<any>(infoSetting)

    const handleChangeInfo = (data: any, field: string) => {
        // console.log(data);
        
        if (field === 'fullName') {
            if (data && data.length < 27) {
                setInfo((prev: any) => {
                    return {
                        ...prev,
                        fullName: data
                    }
                })
            }
            
        } 
        else {
            setInfo((prev: any) => {
                return {
                    ...prev,
                    avatar: data ?? null
                }
            })
        }
        console.log(info?.fullName);
    }

    const handleSave = () => {
        handleClose();
        handleSetting(info);
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
                    helperText={info.fullName === "" ? 'Empty field!' : info.fullName > 27 ? 'Max length Fail!' : ''}
                    defaultValue={infoSetting?.fullName || ''}
                    onChange={(e: any) => {handleChangeInfo(e.target.value, 'fullName')}}
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
                                            avatar === info?.avatar ? 'solid 3px #666' : 'none'
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
                <Button color="error" variant="contained" size="small" onClick={handleClose}>
                    cancel
                </Button>
                <Button variant="contained" size="small" onClick={handleSave}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default SettingAccount;
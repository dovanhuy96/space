import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button, TextField, Grid, Avatar } from "@mui/material";
import { useState } from "react";
import { AVARTARS } from "../../../../constants/Images";

const SettingAccount = (props: any): JSX.Element => {
    const {
        open = false,
        handleClose = () => {}
    } = props;
    const [avtIndex, setAvtIndex] = useState(Number(1));
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
                <DialogContentText>
                <TextField
                    autoFocus
                    label='Full name'
                    type='text'
                    fullWidth
                    variant='standard'
                    defaultValue={'Daenerys Targaryen'}
                    // onChange={}
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
                                            index === avtIndex ? 'solid 3px #666' : 'none'
                                        }`,
                                    }}
                                    onClick={() => setAvtIndex(index)}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="error" variant="contained" size="small" onClick={handleClose}>
                    cancel
                </Button>
                <Button variant="contained" size="small" onClick={handleClose}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default SettingAccount;
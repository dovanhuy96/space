import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button, TextField, Grid, Avatar } from "@mui/material";
import { useState } from "react";
import Im from '../../../../../public/assets/images/avatars/1.png';

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
            sx={{
                // height: '300px'
            }}
        >
            <DialogTitle id="responsive-dialog-title">
                {"Account Setting"}
            </DialogTitle>
            <DialogContent sx={{ maxHeight: '300px' }}>
                <DialogContentText>
                <TextField
                    autoFocus
                    label='Full name'
                    type='text'
                    fullWidth
                    variant='standard'
                    defaultValue={'Do Van Huy'}
                    // onChange={}
                />
                <Grid container spacing={2} mt={4}>
                    {new Array(24).fill(1).map((_, index) => (
                        <Grid key={index} item sm={2}>
                            <div className='flex-center'>
                                <Avatar
                                    src={`../../../../../public/assets/images/avatars/${index}.png`}
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
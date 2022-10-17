import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button } from "@mui/material";


const SettingAccount = (props: any): JSX.Element => {
    const {
        open = false,
        handleClose = () => {}
    } = props;
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
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
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
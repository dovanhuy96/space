import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
    containerProfile: {
        padding: '8px 0px',
        backgroundColor: '#3333',
        borderRadius: '5px'
    },
    name: {
        marginTop: '5px',
        color: 'black',
        fontFamily: 'sans-serif',
        fontSize: '20px',
        
        '@media (max-width: 992px)': {
            fontSize: '16px',
        }
    }
}));
  
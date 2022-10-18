import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
    containerProfile: {
        padding: '8px 0px',
        backgroundColor: '#84d26f',
        borderRadius: '16px 16px 0px 0px',
        minHeight: '82px'
    },
    name: {
        color: '#484646',
        fontFamily: 'Mali, cursive',
        fontSize: '20px',
        textAlign: 'center',
        
        '@media (max-width: 992px)': {
            fontSize: '16px',
        },
    }
}));
  
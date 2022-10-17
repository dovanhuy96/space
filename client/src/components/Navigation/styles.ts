import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
    wrapperNav: {
        backgroundColor: '#ffff',
        borderRadius: '16px'
    },
    image: {
        width: '100%',
        textAlign: 'center',
    
        '& img': {
          width: '100%',
          maxHeight: 180,
          objectFit: 'cover',
        },
      },
}));
  
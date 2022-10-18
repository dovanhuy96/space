import { makeStyles } from "@mui/styles";


export default makeStyles(() => ({
    wrapperNav: {
       margin: '0 auto'
    },
    image: {
        width: '100%',
        // textAlign: 'center',
        
    
        '& img': {
          width: '100%',
          maxHeight: '180px',
          objectFit: 'cover',
        },
      },
}));
  
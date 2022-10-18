import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  formWrap: {
    margin: '0 auto',
  },

  errorMessage: {
    color: 'red',
    backgroundColor: '#e9f5e9',
    textAlign: 'center',
    padding: '.5rem',
  },

  submitBtn: {
    borderRadius: '4px',
    height: '2.5rem',
  },

  redirectMessage: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: 'grey',
  },

  link: {
    color: '#ff6563',
  },
}));

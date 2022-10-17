import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  inputGroup: {
    height: '3rem',
    position: 'relative',
  },

  inputIcon: {
    padding: '1rem',
    backgroundColor: '#b6d3bb',
    borderRadius: '4px 0 0 4px',
  },

  icon: {
    color: '#eaf6ec',
  },

  input: {
    padding: '1rem',
    outline: 'none',
    border: 'none',
    backgroundColor: '#eaf6ec',
    borderRadius: '0 4px 4px 0',
    fontSize: '1rem',
    color: '#666666',
  },

  passwordIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    color: 'grey',
    zIndex: 999,
    cursor: 'pointer',
    fontSize: '1.25rem !important',
  },
}));

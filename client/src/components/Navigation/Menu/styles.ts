import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
	menuItem: {
		display: 'flex',
		alignItems: 'center',
		padding: '.75rem .75rem',
		borderRadius: '8px',
		transition: 'all 0.35s',
		cursor: 'pointer',

		'&:hover': {
			letterSpacing: '2px',
		},

		'&.active': {
			background: `linear-gradient(45deg, #3ca040 0%, #abe088 100%)`,

			'& *': {
				color: `#ffffff !important`,
			},
		},

		'& *': {
			color: '#666666',
			fontSize: '1rem',
		},
	},
}));

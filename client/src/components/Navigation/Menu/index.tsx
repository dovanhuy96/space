import TimeIcon from '@mui/icons-material/AccessTime';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TodoListIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import authStore from '../../../store/AuthStore';
import { getActiveKey } from '../../../helpers/index';
import useStyles from './styles';
import { MenuItem } from './model';



let menuList: Array<MenuItem> = [
	{
		to: '/',
		title: 'Timer',
		icon: <TimeIcon />,
		activeKey: '/',
	},
	{
		to: '/todos',
		title: 'Todo List',
		icon: <TodoListIcon />,
		activeKey: '/todos',
	},
	{
		to: '/analytics',
		title: 'Analytics',
		icon: <AnalyticsIcon />,
		activeKey: '/analytics',
	},
	{
		to: '/setting',
		title: 'Settings',
		icon: <SettingsIcon />,
		activeKey: '/setting',
	},
];

function Menu() : JSX.Element {
	const classes = useStyles();
	const isAuth = authStore.isAuth;
	const { pathname } = useLocation();
	const activeKey = getActiveKey(menuList, pathname);

	const onLogout = (): void => {
		
	};

	return (
		<Stack spacing={1} my={1} px={1.5}>
			{menuList.map((menuItem: MenuItem, index: number) => (
				<Link
					key={index}
					to={menuItem.to}
					className={`${classes.menuItem} ${
						menuItem.activeKey === activeKey ? 'active' : ''
					}`}
				>
					{menuItem.icon}
					<Box ml={2}>{menuItem.title}</Box>
				</Link>
			))}

			{!isAuth && (
				<div className={classes.menuItem} onClick={onLogout}>
					<LogoutIcon />
					<Box ml={2}>Logout</Box>
				</div>
			)}
		</Stack>
	);
}

export default Menu;

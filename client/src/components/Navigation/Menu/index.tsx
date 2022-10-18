import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TodoListIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useHistory, useLocation } from 'react-router-dom';
import authStore from '../../../store/AuthStore';
import { getActiveKey } from '../../../helpers/index';
import useStyles from './styles';
import { MenuItem } from './model';
import { observer } from 'mobx-react-lite'



let menuList: Array<MenuItem> = [
	{
		to: '/',
		title: 'Home',
		icon: <HomeIcon />,
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

const Menu  = observer(() : JSX.Element => {
	const classes = useStyles();
	const isAuth = authStore.isAuth;
	const history = useHistory()
	const { pathname } = useLocation();
	const activeKey = getActiveKey(menuList, pathname);

	const handleLogout = (): void => {
		authStore.setAuth(false);
		history.push('/login');
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

			{isAuth && (
				<div className={classes.menuItem} onClick={handleLogout}>
					<LogoutIcon />
					<Box 
						ml={2}
					>
						Logout
					</Box>
				</div>
			)}
		</Stack>
	);
})

export default Menu;

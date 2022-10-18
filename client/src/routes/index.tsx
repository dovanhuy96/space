import { lazy } from "react"
import { Iroute } from "./model"
import { Route } from 'react-router-dom';


const HomePage = lazy(() => import('../pages/Home/index'));
const LoginPage = lazy(() => import('../pages/Account/Login/index'));
const AnalyticsPage = lazy(() => import('../pages/Analytics/index'));
const SettingPage = lazy(() => import('../pages/Setting/index'));
const TodoPage = lazy(() => import('../pages/Todo/index'));

export const routes: Array<Iroute> = [
    {
        path: '/',
        exact: true,
        isProtect: false,
        component:() => <HomePage />
    },
    {
        path: '/login',
        exact: true,
        isProtect: false,
        component:() => <LoginPage />
    },
    {
        path: '/analytics',
        exact: true,
        isProtect: false,
        component:() => <AnalyticsPage />
    },
    {
        path: '/setting',
        exact: true,
        isProtect: false,
        component:() => <SettingPage />
    },
    {
        path: '/todos',
        exact: true,
        isProtect: false,
        component:() => <TodoPage />
    }
]


export const renderRoute = (routes: Array<Iroute>, auth: boolean = false) => {
    return routes.map((route: Iroute, index: any) => {
        const { path, exact, isProtect, component } = route;
        const Login = () => <LoginPage />
        const componentRender = !isProtect
            ? component
            : auth
            ? Login
            : component
        return (
            <Route
                key={index}
                path={path}
                exact={exact}
                render={componentRender}
            />
        )
    })
} 
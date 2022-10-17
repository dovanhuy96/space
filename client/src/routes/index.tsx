import { lazy } from "react"
import { Iroute } from "./model"
import { Route } from 'react-router-dom';


const HomePage = lazy(() => import('../pages/Home/index'));
const LoginPage = lazy(() => import('../pages/Account/Login/index'));
const TimeLinePage = lazy(() => import('../pages/TimeLine/index'));

export const routes: Array<Iroute> = [
    {
        path: '/',
        exact: true,
        isProtect: false,
        component:() => <HomePage />
    },
    {
        path: '/time-line',
        exact: true,
        isProtect: false,
        component:() => <TimeLinePage />
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
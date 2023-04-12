import { lazy } from "react"
import { Iroute, Props } from "./model"
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Content from "../layouts/Content";
import Profile from "../pages/Profile";


const HomePage = lazy(() => import('../pages/Home/index'));
const SettingPage = lazy(() => import('../pages/Setting/index'));

export const routes: Array<Iroute> = [
    {
        path: '/',
        exact: true,
        isProtect: true,
        component: () => <HomePage />
    },
    {
        path: '/setting',
        exact: true,
        isProtect: false,
        component: () => <SettingPage />
    },
    {
        path: '/my-profile',
        exact: true,
        isProtect: false,
        component: () => <Profile />
    },
    
]


export const renderRoute = (routes: Array<Iroute>, auth: boolean = false) => {
    return routes.map((route: Iroute, index: any) => {
        const { path, exact, isProtect, component } = route;
        if (isProtect) {
            return (
                <ProtectedRoute
                    key={index}
                    isAuth={auth}
                    path={path}
                    exact={exact}
                    render={component}
                />
            )
        } else {
            return (
                <PublicRoute
                    key={index}
                    path={path}
                    exact={exact}
                    render={component}
                />
            )
        }
    })
}

function ProtectedRoute({ isAuth, ...routeProps }: Props) {
    if (!isAuth) {
        return <Redirect to='/login' />;
    }
    return (
        <Content>
            <Route {...routeProps} />
        </Content>
    );
}

function PublicRoute({ ...routeProps }: RouteProps) {
    return (
        <Content>
            <Route {...routeProps} />
        </Content>
    );
}
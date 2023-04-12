import { ReactNode } from "react";
import { RouteComponentProps, RouteProps } from "react-router-dom";

export interface Iroute {
    path: string;
    exact: boolean;
    isProtect: boolean;
    component: (props: RouteComponentProps<any>) => ReactNode
}

export interface Props extends RouteProps {
    isAuth: boolean;
}
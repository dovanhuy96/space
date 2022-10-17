import { ReactNode } from "react";
import { RouteComponentProps } from "react-router-dom";

export interface Iroute {
    path: string;
    exact: boolean;
    isProtect: boolean;
    component: (props: RouteComponentProps<any>) => ReactNode
}
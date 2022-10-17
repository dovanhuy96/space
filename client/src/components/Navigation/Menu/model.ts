import { ReactNode } from "react";

export interface MenuItem {
	to: string;
	title: string;
	icon: ReactNode;
	activeKey: string;
}
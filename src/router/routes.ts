import Home from "../views/Home/Home";
import IRoute from "./types/IRoute";
import Test from "../views/Test/Test";

// Add routes as IRoute object to this array
export const routes: IRoute[] = [
	{ path: "/", exact: true, component: Home },
	{ path: "/test", component: Test },
];

import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			{routes.map((r) => (
				<Route path={r.path} exact={r.exact} component={r.component}></Route>
			))}
		</BrowserRouter>
	);
};

export default Router;

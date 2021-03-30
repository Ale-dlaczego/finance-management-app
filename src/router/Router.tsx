import { BrowserRouter, Route } from "react-router-dom";

import React from "react";
import { routes } from "./routes";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			{routes.map((r, index) => (
				<Route path={r.path} exact={r.exact} component={r.component} key={`route_${index}-${r.path}`}></Route>
			))}
		</BrowserRouter>
	);
};

export default Router;

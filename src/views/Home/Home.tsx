import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
	return (
		<div className="container">
			<h1>Home</h1>
			<Link to="/test">Go test</Link>
		</div>
	);
};

export default Home;

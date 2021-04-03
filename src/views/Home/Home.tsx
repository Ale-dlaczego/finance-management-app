import Avatar from "../../components/Avatar/Avatar";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { Link } from "react-router-dom";
import React from "react";

const Home: React.FC = () => {
	return (
		<div className="container">
			<h1>Home</h1>
			<Link to="/test">Go test</Link>
			<Avatar height={40} width={40}></Avatar>
			<BalanceCard balanceTitle={"Invest debt"} balanceAmount={800} currentBalanceAmount={2000}></BalanceCard>
		</div>
	);
};

export default Home;

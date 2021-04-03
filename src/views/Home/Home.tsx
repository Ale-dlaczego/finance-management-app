import Avatar from "../../components/Avatar/Avatar";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import { Link } from "react-router-dom";
import React from "react";
import SummaryBalanceCard from "../../components/SummaryBalanceCard/SummaryBalanceCard";
import TransactionListItem from "../../components/TransactionListItem/TransactionListItem";

const Home: React.FC = () => {
	return (
		<div>
			<SummaryBalanceCard balanceDifference={443} amountBalance={62.18}></SummaryBalanceCard>
			<h1>Home</h1>
			<Link to="/test">Go test</Link>

			<Avatar height={40} width={40}></Avatar>
			<BalanceCard balanceTitle={"Invest debt"} balanceAmount={800} currentBalanceAmount={2000}></BalanceCard>
			<TransactionListItem
				transactionValue={399}
				transactionDate={new Date()}
				transactionTitle={"Purchase ps4"}></TransactionListItem>
		</div>
	);
};

export default Home;

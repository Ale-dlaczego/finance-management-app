import "./summaryBalanceCard.scss";

import React, { FC } from "react";

interface Props {
	amountBalance: number;
	balanceDifference: number;
}

const SummaryBalanceCard: FC<Props> = ({ amountBalance, balanceDifference }) => {
	return (
		<div className="summary-balance-card">
			<h4>Balance</h4>
			<p>Total</p>
			<h3>${amountBalance}</h3>
			<p>${balanceDifference}</p>
		</div>
	);
};

export default SummaryBalanceCard;

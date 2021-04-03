import "./balanceCard.scss";

import React, { FC } from "react";

interface Props {
	balanceTitle: string;
	balanceAmount: number;
	currentBalanceAmount: number;
}

const BalanceCard: FC<Props> = ({ balanceTitle, balanceAmount, currentBalanceAmount }) => {
	return (
		<div className="balance-card">
			<h3>{balanceTitle}</h3>
			<h2>${currentBalanceAmount}</h2>
			<p style={{ color: balanceAmount < 0 ? "red" : "#b0b5c5" }}>{balanceAmount}</p>
		</div>
	);
};

export default BalanceCard;

import React, { FC } from "react";

interface Props {
	iconSrc: "car.svg" | "home.svg" | "ball.svg";
}

const TransactionListItemIcon: FC<Props> = ({ iconSrc }) => {
	return (
		<div className="transaction-list-item-icon">
			<img src={"media/" + iconSrc} alt="" />
		</div>
	);
};

export default TransactionListItemIcon;

import "./transactionListItem.scss";

import React, { FC } from "react";

import TransactionListItemIcon from "./TransactionListItemIcon";
import moment from "moment";

interface Props {
	transactionValue: number;
	transactionTitle: string;
	transactionDate: Date;
}

const TransactionListItem: FC<Props> = ({ transactionValue, transactionTitle, transactionDate }) => {
	return (
		<div className="transaction-list-item">
			<TransactionListItemIcon iconSrc="car.svg" />
			<div className="information-box">
				<h3>{transactionTitle}</h3>
				<p>{moment(transactionDate).format("dddd, D MMMM YYYY")}</p>
			</div>
			<h3 className="transaction-value">${transactionValue}</h3>
		</div>
	);
};

export default TransactionListItem;

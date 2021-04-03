import { RenderResult, render } from "@testing-library/react";

import TransactionListItem from "../TransactionListItem";

describe("TransactionListItem.tsx", () => {
	let w: RenderResult;
	let params = {
		transactionDate: new Date(),
		transactionTitle: "test title",
		transactionValue: 6969,
	};
	beforeEach(() => {
		w = render(
			<TransactionListItem
				transactionDate={params.transactionDate}
				transactionTitle={params.transactionTitle}
				transactionValue={params.transactionValue}
			/>,
		);
	});

	it("should render", () => {
		expect(w).toBeTruthy();
	});

	it("should render transaction title", () => {
		expect(w.baseElement.innerHTML).toContain(params.transactionTitle);
	});

	it("should render transaction value", () => {
		expect(w.baseElement.innerHTML).toContain(params.transactionValue);
	});

	it("should render transaction full year", () => {
		expect(w.baseElement.innerHTML).toContain(params.transactionDate.getFullYear());
	});

	it("should render transaction day", () => {
		expect(w.baseElement.innerHTML).toContain(params.transactionDate.getDate());
	});
});

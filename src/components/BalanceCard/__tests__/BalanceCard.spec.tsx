import { RenderResult, render } from "@testing-library/react";

import BalanceCard from "../BalanceCard";

describe("BalanceCard.tsx", () => {
	let w: RenderResult;
	let params = {
		balanceTitle: "test title",
		balanceAmount: 6969,
		currentBalanceAmount: 3,
	};
	beforeEach(() => {
		w = render(
			<BalanceCard
				balanceAmount={params.balanceAmount}
				balanceTitle={params.balanceTitle}
				currentBalanceAmount={params.currentBalanceAmount}
			/>,
		);
	});

	it("should render", () => {
		expect(w).toBeTruthy();
	});

	it("should render balance title", () => {
		expect(w.baseElement.innerHTML).toContain(params.balanceTitle);
	});

	it("should render balance amount", () => {
		expect(w.baseElement.innerHTML).toContain(params.balanceAmount);
	});

	it("should render current balance amount", () => {
		expect(w.baseElement.innerHTML).toContain(params.currentBalanceAmount);
	});

	it("sould have different color for negative and possitive balance amount", async () => {
		const color1 = (await w.findAllByText(params.balanceAmount))[0].style.color;

		w.rerender(
			<BalanceCard
				balanceAmount={-params.balanceAmount}
				balanceTitle={params.balanceTitle}
				currentBalanceAmount={params.currentBalanceAmount}
			/>,
		);
		const color2 = (await w.findAllByText(-params.balanceAmount))[0].style.color;
		expect(color1).not.toEqual(color2);
	});
});

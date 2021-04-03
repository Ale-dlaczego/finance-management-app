import { RenderResult, render } from "@testing-library/react";

import SummaryBalanceCard from "../SummaryBalanceCard";

describe("SummaryBalanceCard.tsx", () => {
	let w: RenderResult;
	const params = {
		amountBalance: 6968,
		balanceDifference: -69,
	};
	beforeEach(() => {
		w = render(
			<SummaryBalanceCard amountBalance={params.amountBalance} balanceDifference={params.balanceDifference} />,
		);
	});

	it("should render", () => {
		expect(w).toBeTruthy();
	});

	it("should render amount balance", () => {
		expect(w.baseElement.innerHTML).toContain(params.amountBalance);
	});

	it("should render balance difference", () => {
		expect(w.baseElement.innerHTML).toContain(params.balanceDifference);
	});
});

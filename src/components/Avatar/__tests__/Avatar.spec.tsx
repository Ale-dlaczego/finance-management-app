import { RenderResult, render } from "@testing-library/react";

import Avatar from "../Avatar";

describe("Avatar.tsx", () => {
	let w: RenderResult;
	const params = {
		width: 50,
		height: 50,
		imgSrc: "test",
	};
	beforeEach(() => {
		w = render(<Avatar width={params.width} height={params.height} />);
	});
	afterEach(() => {
		w.unmount();
	});

	it("should render", () => {
		expect(w).toBeTruthy();
	});

	it("should have specified width", () => {
		const img = w.baseElement.querySelector("img");
		expect(img?.width).toBe(params.width);
	});

	it("should have specified height", () => {
		const img = w.baseElement.querySelector("img");
		expect(img?.height).toBe(params.height);
	});

	it("should have any alt text", () => {
		const img = w.baseElement.querySelector("img");
		expect(img?.alt).not.toEqual("");
	});

	it("should have any default image url", () => {
		const img = w.baseElement.querySelector("img");
		expect(img?.src).not.toEqual("");
	});

	it("should have specified image url", () => {
		w.rerender(<Avatar width={params.width} height={params.height} url={params.imgSrc} />);
		const img = w.baseElement.querySelector("img");
		expect(img?.src).toContain(params.imgSrc);
	});

	it("should have span element (notification dot)", () => {
		const span = w.baseElement.querySelector("span");
		expect(span).toBeTruthy();
	});
});

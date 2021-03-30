import "./ExampleComponent.scss";

import React from "react";

interface Props {
	text: string;
	optionalText?: string;
	optionalBoolean?: boolean;
}

const ExampleComponent: React.FC<Props> = ({ text, optionalText, optionalBoolean }) => {
	return (
		<>
			<div className="card p-5 example-component">
				<h2 className="mb-3">This is example component</h2>
				<h4 className="mb-5">{text}</h4>
				<p className="mb-0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam molestiae suscipit, ipsum ad autem iste
					facere nemo porro adipisci? Incidunt natus maiores aliquid beatae veritatis? Numquam aperiam aliquid placeat
					asperiores.
					{optionalBoolean ? <hr /> : ""}
					{optionalText}
				</p>
			</div>
		</>
	);
};

export default ExampleComponent;

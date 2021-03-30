import ExampleComponent from "../../components/ExampleComponent/ExampleComponent";
import { Link } from "react-router-dom";
import React from "react";

const Test: React.FC = () => {
	return (
		<div className="container py-5">
			<ExampleComponent
				text={"Ten tekst trzeba wpisać"}
				optionalText={"Tego nie trzeba"}
				optionalBoolean={true}></ExampleComponent>
			<Link to="/">Go back home</Link>
		</div>
	);
};

export default Test;

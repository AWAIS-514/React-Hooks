import { useEffect } from "react";

function UseEffect() {
	useEffect(() => {
		console.log("FIRST RERENDER>>>>");
	}, []);

	return <div></div>;
}

export default UseEffect;

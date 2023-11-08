import React, { useMemo } from "react";

function SubComponent({ variable }) {
	// You can use useMemo here to memoize a value based on 'variable'
	const memoizedValue = useMemo(() => {
		console.log("CHANGE IN VARIABLE>>>>", variable);
		return variable;
	}, [variable]);

	return <div>{memoizedValue}</div>;
}

export default SubComponent;

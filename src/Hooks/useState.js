import { useState } from "react";

const checkCount = () => {
	console.log("UPDATE>>>>>>>");
	return 5;
};

function UseState() {
	let [count, setCount] = useState(() => {checkCount()});

	console.log("COUNT>>>", count);
	return (
		<div>
			<button onClick={() => setCount((previousCount) => previousCount + 1)}>Add</button>
			<p>{count}</p>
			<button onClick={() => setCount((previousCount) => previousCount - 1)}>Subtract</button>
		</div>
	);
}

export default UseState;

import { useRef } from "react";

function UseRef() {
	const refrence = useRef();

	console.log(refrence.current);
	return (
		<div ref={refrence}>
			<p></p>
		</div>
	);
}

export default UseRef;

import React, { useState } from "react";
import SubComponent from "./useMemo";

function UseMemo() {
	const [myCount, setMyCount] = useState(() => 3);
	const [otherCount, setOtherCount] = useState(() => 0);
	return (
		<div>
			<SubComponent variable={myCount} />
			<button onClick={() => setMyCount((previousVal) => previousVal + 1)}>Update Name</button>
			{otherCount}
			<button onClick={() => setOtherCount((previousVal) => previousVal + 1)}>Update Name</button>
		</div>
	);
}

export default UseMemo;

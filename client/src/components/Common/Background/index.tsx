
function Background() {
	return (
		<div id='bubbleWrap' style={{
            backgroundColor: '#c8ecbe',
        }}>
			{new Array(10).fill(0).map((_, index) => (
				<div key={index} className={`bubble x${index + 1} flex-center`}></div>
			))}
		</div>
	);
}

export default Background;

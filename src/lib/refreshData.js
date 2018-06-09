export default function refreshData(func, xaxis, yaxis) {
	const xstep = (xaxis[1] - xaxis[0]) / 10
	let data = []
	let x = xaxis[0]
	let y = 0
	for (let i = 0; i < 11; i++) {
		// eslint-disable-next-line
		y = eval(func)
		if (y > yaxis[0] && y < yaxis[1]) data.push({ x, y })
		console.log(data)
		x += xstep
	}
	return data
}

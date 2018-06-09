import math from 'mathjs'

export default function refreshData(func, xaxis, yaxis) {
	const xstep = (xaxis[1] - xaxis[0]) / 100
	let data = []
	let x = xaxis[0]
	let y = 0
	if (func.indexOf('x') !== -1) {
		for (let i = 0; i < 101; i++) {
			y = math.eval(func, { x })
			if (y > yaxis[0] && y < yaxis[1]) data.push({ x, y })
			x += xstep
		}
	} else {
		y = math.eval(func)
		for (let i = 0; i < 11; i++) {
			data.push({ x, y })
			x += xstep
		}
	}
	return data
}

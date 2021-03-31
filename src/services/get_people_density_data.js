function getPeopleDensity() {
	let low = process.env.PEOPLE_LOW
	let med = process.env.PEOPLE_MED
	let hig = process.env.PEOPLE_HIG
	let max = process.env.PEOPLE_MAX

	let peopleCount = 0
	let peopleDensity = Math.floor(Math.random() * 4)
	let n = 0

	if(peopleDensity == 1) {
		n = med - low
		peopleCount = (Math.floor(Math.random() * n) + Number(low) )
	} else if(peopleDensity == 2) {
		n = hig - med
		peopleCount = (Math.floor(Math.random() * n) + Number(med) )
	} else if(peopleDensity == 3) {
		n = max - hig
		peopleCount = (Math.floor(Math.random() * n) + Number(hig) ) 
	} else {
		peopleCount = 0
		peopleDensity = 0
	}
	console.log(n, peopleCount, peopleDensity)
	console.log(typeof(peopleCount))
	return ({
		'peopleCount':peopleCount,
		'peopleDensity':peopleDensity,
	})
}

module.exports = {
	getPeopleDensity,
}
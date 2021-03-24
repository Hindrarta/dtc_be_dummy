function getPeopleDensity() {
	let low = process.env.PEOPLE_LOW
	let med = process.env.PEOPLE_MED
	let hig = process.env.PEOPLE_HIG
	let peopleCount = Math.floor(Math.random() * 50)
	let peopleDensity = 0

	if(peopleCount > low && peopleCount < med) {
		peopleDensity = 1
	} else if(peopleCount > med && peopleCount < hig) {
		peopleDensity = 2
	} else if(peopleCount > hig) {
		peopleDensity = 3
	} else {
		peopleDensity = 0
	}

	return ({
		'peopleCount':peopleCount,
		'peopleDensity':peopleDensity,
	})
}

module.exports = {
	getPeopleDensity,
}
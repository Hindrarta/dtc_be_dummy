const express = require('express')
let router = express.Router()

router.get('/all/1', (req, res, next) => {
	try {
		let density_data = [
			{"density_level":Math.floor(4*Math.random() - 1)},
			{"density_level":Math.floor(4*Math.random() - 1)},
			{"density_level":Math.floor(4*Math.random() - 1)},
			{"density_level":Math.floor(4*Math.random() - 1)}
		]

		res.send({
			'message':"OK",
			'data':density_data
		})
	} catch (error) {
		console.error(error)
	}
})

router.get('/:intersection_id', (req, res, next) => {
	try {
		if(req.params.intersection_id < 1 || req.params.intersection_id > 6) {
			res.status(400).send({
				'message':"Error intersection id",

			})	
		}
		let density_data = {"density_level":Math.floor(4*Math.random() - 1)}
		console.log(`Get data density level of lane ${req.params.intersection_id}`)
		res.send({
			'message':"OK",
			'data':density_data
		})
	} catch (error) {
		console.error(error)
	}
})

router.get('/', (req, res) => {
	try {
		res.status(200).send({
			"message":"to get vehicle density : URL/vehicle/all/1 or URL/vehicle/:id"
		})
	} catch (error) {
		res.status(500).send({
			"message": "Get Status Error"
		});
	}
})

module.exports = router
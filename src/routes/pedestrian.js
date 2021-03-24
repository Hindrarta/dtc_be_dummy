const express = require('express')
let router = express.Router()

const auth = require('./../services/verify_token')
const jwt = require('jsonwebtoken')
const get_data = require('./../services/get_people_density_data')

router.get('/peopleData', auth, (req,res) => {
	let secretkey = process.env.SECRET_KEY
	let data = get_data.getPeopleDensity()
	try {
		jwt.verify(req.token, secretkey, (err, authD) => {
			if (err) {
				res.status(403).send({
					'message':'JWT Verify Error, Token Invalid',
					'err':err
				})
			} else {
				
				res.status(200).send({
					"message": "JWT Auth Successfull, GET peopleData",
					"data": {
						'peopleCount':data.peopleCount,
						'peopleDensity':data.peopleDensity,
					}
				});
			}	
		})
	} catch (err) {
		res.status(500).send({
			"message": "Error GET /peopleData",
			"err": err
		});
	}
})

router.get('/', (req, res) => {
	try {
		res.status(200).send({
			"message":"to get people density and people count data : URL/pedestrian/peopleData"
		})
	} catch (error) {
		res.status(500).send({
			"message": "Get Status Error"
		});
	}
})

module.exports = router
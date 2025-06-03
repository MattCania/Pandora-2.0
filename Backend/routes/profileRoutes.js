const express = require('express')
const router = express.Router()

const profileController = require('../controllers/profileControllers')

router.get('/fetchProfiles', profileController.fetchProfile)

module.exports =  router
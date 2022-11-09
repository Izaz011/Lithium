const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController=require("../controllers/weatherController")
const memeController=require("../controllers/memeController")



router.get("/cowin/vaccinations",CowinController.getVaccinationSession)
router.get("/weatherData",weatherController.getWeatherData)
router.get("/temperatureData",weatherController.getTemperatureData)
router.get("/temperatureList",weatherController.getTempOfCities)
router.get("/memeList",memeController.getMemes)
router.post("/create-meme",memeController.createMemes)



module.exports = router;
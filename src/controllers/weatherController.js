const axios = require("axios")


const getWeatherData = async function (req, res) {
    try {
        const city = req.query.q
        const key = req.query.appid
        if (city && key) {
            const options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
            }
            const result = await axios(options)
            res.status(200).send({ data: result.data })
        }
        else {
            res.status(400).send("please provide valid city or key")
        }

    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}





const getTemperatureData = async function (req, res) {
    try {
        const key = req.query.appid
        if ( key) {
            const options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`
            }
            const result = await axios(options)
            const temperature=result.data.main.temp
            res.status(200).send({ temp: temperature})
        }
        else {
            res.status(400).send("please provide valid  key")
        }

    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}




const getTempOfCities=async function(req,res){
    try{
        const cities=[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        const key=req.query.appid

        if(key){
          let array=[];
          for(let i=0;i<cities.length;i++){
            const options={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${key}`
            }
            const result=await axios(options)
            const temperature=result.data.main.temp
            array.push({city:cities[i],temp:temperature})
          }
          const sortedTemperature=array.sort((a,b)=>{
            return a.temp-b.temp
          })
          res.status(200).send({data:sortedTemperature})
        }
        else{
            res.status(400).send("key is not valid")
        }
    }
    catch(error){
        res.status(500).send({error:error.message})
    }

}




module.exports = {
getWeatherData,getTemperatureData,getTempOfCities
}
const axios=require("axios")


const getVaccinationSession=async function(req,res){
    try{
        const districtId=req.query.district_id
        const date=req.query.date
        const options={
            method:"get",
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict/?district_id=${districtId}&date=${date}`
        }
        const result=await axios(options)
        const data=result.data
        res.status(200).send({data:data})
    }
    catch(error){
     res.status(500).send({error:error.message})
    }
}





module.exports={
    getVaccinationSession
}
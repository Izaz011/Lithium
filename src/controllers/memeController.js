const axios = require("axios")


const getMemes = async function (req, res) {
    try {
        const options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        const result = await axios(options)
        res.status(200).send({ data: result.data })
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}


const createMemes = async function (req, res) {
    try {
        const memeId = req.query.template_id
        const topText = req.query.text0
        const bottomText = req.query.text1
        const userName = req.query.username
        const password = req.query.password

        if (memeId && topText && bottomText && userName && password) {
            const options = {
                method: "post",
                url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${topText}&text1=${bottomText}&username=${userName}&password=${password}`
            }
            const result = await axios(options)
            res.status(200).send({ data: result.data.data })
        }
        else {
            res.status(400).send("provide valid memeId or username or password")
        }
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}


module.exports = {
    getMemes,createMemes
}
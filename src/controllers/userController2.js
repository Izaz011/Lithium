
const bookModel=require("../models/bookModel")

const createbookName= async function (req, res) {
    let data= req.body
    let bookData= await bookModel.create(data)
    res.send( {msg:bookData})
    }
    
    const getBooksName=async function (req, res) {
            let allBooks= await bookModel.find()
            res.send({msg:allBooks})
        }
    
        module.exports={createbookName,getBooksName}
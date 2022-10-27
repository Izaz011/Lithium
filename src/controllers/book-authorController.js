const authorModell=require("../models/authorModel")
const bookModel3=require("../models/bookModel3")


const authorModel= async function(req,res){
    const data=req.body
    const authorData=await authorModell.create(data)
    res.send({msg:authorData})
}
const booksModel= async function(req,res){
    const data=req.body
    const bookData=await bookModel3.create(data)
    res.send({msg:bookData})
}

const getBookById=async function (req,res){
    const authorId=await authorModell.find({author_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
    const id=authorId.map(ele=>ele.author_id)
    const [a]=id
    const books=await bookModel3.find({author_id:a}).select({name:1,_id:0})
    
    
 res.send({msg:books})
}



const getAuthorByName=async function(req,res){
    const authorId=await bookModel3.find({name:"Two states"}).select({author_id:1,_id:0})
    const id=authorId.map(ele=>ele.author_id)
    const [a]=id
    const authorName=await authorModell.find({author_id:a}).select({author_name:1,_id:0})
    const updatePrice=await bookModel3.findOneAndUpdate(
     {name:"Two states"},
      {$set:{price:100}}

       ).select({price:1,_id:0})
       res.send({msg:[authorName,updatePrice]})
}


const authorsBetween=async function(req,res){
    const authorId=await bookModel3.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const arr= authorId.map(ele=>ele.author_id)
    let arrayOfAuthors=[]
    for(let i=0;i<arr.length;i++){
        const authorsDetails=await authorModell.find({author_id : arr[i]}).select({author_name : 1, _id : 0 })
        const authors=authorsDetails.map(ele=>ele.author_name)
        arrayOfAuthors.push(authors)
    }
res.send({msg:arrayOfAuthors})
}



module.exports={authorModel,booksModel,getBookById,getAuthorByName,authorsBetween}


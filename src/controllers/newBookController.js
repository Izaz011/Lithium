const bookModel=require("../models/newBookModel")
const publisherModel = require("../models/newPublisherModel");
const authorModel=require("../models/newAuthorModel")

let ObjectID = require("mongodb").ObjectId


const createBook=async function(req,res){
const data=req.body
const author=data.author
const publisher=data.publisher
if(!author){
   return res.send("author field is required")
}
else if(!ObjectID.isValid(author)){
   return res.send("author's Object ID is not valid")
}
else if(!publisher){
   return res.send("publisher field is required")
}
else if(!ObjectID.isValid(publisher)){
   return res.send("publishers object id is not valid")
}
const saveData=await bookModel.create(data)
 return res.send({msg:saveData})
}

const getBook=async function(req,res){
   const books=await bookModel.find().populate("author").populate("publisher")
   res.send({msg:books})
}

const updateBooks=async function (req,res){
let updatedData=await publisherModel.find({$or:[{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
let updatedvalue=await bookModel.find({publisher:updatedData}).select({_id:1})
let updatedArray=[]
for(let i=0;i<updatedvalue.length;i++){
 let updatedKey= await bookModel.findByIdAndUpdate(
   updatedvalue[i],
   {$set:{isHardCover:true}})
 updatedArray.push(updatedKey)
}
 res.send({msg:updatedArray})
}


const updatePrice=async function(req,res){
let author_id=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
let book_id=await bookModel.find({author:author_id}).select({_id:1})
let updatedArray=[]
for(let i=0;i<book_id.length;i++){
let updatedValue=await bookModel.findByIdAndUpdate(
  book_id[i],
  {$inc:{price:10}}
)
updatedArray.push(updatedValue)
}
res.send({msg:updatedArray})
}

module.exports={createBook,getBook,updateBooks,updatePrice}
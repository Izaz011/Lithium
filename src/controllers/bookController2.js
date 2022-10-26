const bookModell=require('../models/bookModel2')

//create books

const createBook2=async function(req,res){
    let data=req.body
    let bookData=await bookModell.create(data)
    res.send({msg:bookData})
}

//get booklist

const bookList=async function(req,res){
    const booksList= await bookModell.find().select({ bookName: 1, authorName: 1, _id: 0})
    res.send({msg:booksList})
}

//get books by year

const getBooksInYear= async function(req,res){
    const year=req.query.year
    const booksInYear= await  bookModell.find({year:{$eq:year}})
    res.send({msg:booksInYear})
}

//get particular books 

const getParticularBooks=async function(req,res){
    const authorName=req.query.authorName
    const books=await bookModell.find({authorName:{$eq:authorName}})
    
    const year=req.query.year
    const books2=await bookModell.find({year:{$eq:year}})
if(authorName){
    res.send({msg:books})
}
else if(year){
    res.send({msg:books2})
}

}

//get books by INR

const getXINRBooks=async function(req,res){
    const getInrBooks=await bookModell.find({$or:[{indianPrice:150},{indianPrice:250},{indianPrice:400}]})
    res.send({msg:getInrBooks})
}

//get Random books

const getRandomBooks =async function(req,res){
    const randomBooks=await bookModell.find({$or:[{stockAvailable:{$eq:true}},{totalPages:{$gt:500}}]})
    res.send({msg:randomBooks})
}

module.exports={createBook2,bookList,getBooksInYear,getParticularBooks,getXINRBooks,getRandomBooks}

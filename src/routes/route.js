const express = require('express');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]

 router.post('/votingPerson',function(req,res){
    const voteAge=req.query.votingAge
    const voter=(persons.filter(ele=>ele.age>voteAge)).map(ele=>{
   ele.votingStatus=true;
   return ele
    })
    res.send(voter)
})


module.exports = router;
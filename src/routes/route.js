const express = require('express');
const router = express.Router();///test-you
//importing a custom module
// const xyz = require('../logger')
//importing external package
const underscore = require('underscore')
const logger=require('../logger/logger')
const helper=require('../util/helper')
const formatter=require('../validator/formatter')
const lodash=require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)
    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
// console.log("The result of underscores examples api is : ", result)
    
    //problem 1
    console.log(logger.welcome())

   //problem 2
    console.log(helper.printDate())
    console.log(helper.printMonth())
    console.log(helper.getBatchInfo())

    // problem 3

    formatter.printCohortName()



    //problem 4

    const monthsArray=["january","february","march","april","may","june","july","august","september","october","november","december"]
    console.log(lodash.chunk(monthsArray,3))


    const oddNumberArray=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddNumberArray,9))



    const a=[2,3,4]
    const b=[3,4,5,6]
    const c=[5,6,7,8,9]
    const d=[8,9,10,11]
    const e=[11,12,13,14]

    console.log(lodash.union(a,b,c,d,e))


    const pairedArray=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

    const pairedObject=lodash.fromPairs(pairedArray)
    console.log(pairedObject)


    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;


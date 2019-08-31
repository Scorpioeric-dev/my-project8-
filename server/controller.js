const data = require('./data');




module.exports = {
    getData(req,res){
        console.log('in the building')
        res.status(200).send(data)
    }
}
//controller set up
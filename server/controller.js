const data = require('./data');




module.exports = {
    getData(req,res){
        // console.log('in the building')
        res.status(200).send(data)
    },
    getDataById:(req,res) => {
        const car = data.find(ele => ele.id === +(req.params.id))
        if(!car){
            return res.status(500).send('Car not in Database')
        }
        res.status(200).send(car)
    }
}
//const getProduct = (req,res) => {
    // return specific item once found otherwise, undefined
    //the const of item is finding the specific id of the product or otherwise returning null the parse int is converting the str into a number
//     const item = products.find(val => val.id === +(req.params.id))
//     if (!item){
//         return res.status(500).send('Item not in list')
//     }
//     res.status(200).send(item)
// }ntroller set up
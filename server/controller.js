const data = require("./data");
let id = data.length + 1;

module.exports = {
  getData(req, res) {
    // console.log('in the building')
    res.status(200).send(data);
  },
  getDataById: (req, res) => {
    const car = data.find(ele => ele.id === +req.params.id);
    if (!car) {
      return res.status(500).send("Car not in Database");
    }
    res.status(200).send(car);
  },
  postData: (req, res) => {
    let { model, type, year, img } = req.body;
    data.push({ ...req.body, id, model, type, year, img });
    id++;
    res.status(200).send(data);
  }
};
// addStyle(req, res) {
//     // console.log(req.body)
//     data.push({ ...req.body, id });
//     id++;
//     // console.log(data)
//     res.status(200).send(data);
//   }

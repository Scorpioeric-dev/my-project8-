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
<<<<<<< HEAD
    res.status(200).send(data);
=======
    res.status(200).send(data)
>>>>>>> ba64c23c2fdfb457939e699048ff7d27eaf4d985
  },

  removeData: (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(taco => taco.id === +id);
    data.splice(index, 1);
    res.status(200).send(data);
  },
  putData: (req, res) => {
    const { id } = req.params;
    const { year, img, type, model } = req.body;
    const index = data.findIndex(taco => taco.id === +id);
    data[index].img = img;
    data[index].type = type;
    data[index].year = year;
    data[index].model = model;
    res.status(200).send(data);
  }
};

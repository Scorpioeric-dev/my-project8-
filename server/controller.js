const data = require("./data");
let id = data.length + 1;

module.exports = {
  //when checking on postman make sure json application is set and that endpoints match
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
  //this allows me to make a new object
  postData: (req, res) => {
    console.log(req.body)
    let { model, type, year, img } = req.body;
    //is there an easier way to make this work
    data.push({ ...req.body, id, model, type, year, img });
    id++;
    res.status(200).send(data);
  },
//This removes the specific index or data id I assign in my splice method
  removeData: (req, res) => {
    const { id } = req.params;
    const index = data.findIndex(taco => taco.id === +id);
    data.splice(index, 1);
    res.status(200).send(data);
  },
  //put functionality is not working in the backend and requires img to be defined . 
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

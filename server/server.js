require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
//Bringing in .env file with my port
const {port} = process.env
//Allowing data to be translated so server reads front end data
app.use(express.json())
app.listen(port,()=> console.log(`Me and my ${port}`))


//endpoints for reading,creating,updating deleting data
app.get(`/api/cars`, ctrl.getData)
app.get(`/api/car/:id`,ctrl.getDataById)
app.post(`/api/cars`,ctrl.postData)
app.delete(`/api/car/:id`,ctrl.removeData)
app.put(`/api/car/:id`,ctrl.putData)










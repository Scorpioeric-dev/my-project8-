require('dotenv').config()
const express = require('express')
const app = express()
const ctrl = require('./controller')
const {port} = process.env
app.use(express.json())
app.listen(port,()=> console.log(`Me and my ${port}`))


//endpoints
app.get(`/api/cars`, ctrl.getData)
app.get(`/api/car/:id`,ctrl.getDataById)
app.post(`/api/cars`,ctrl.postData)
app.delete(`/api/car/:id`,ctrl.removeData)
app.put(`/api/car/:id`,ctrl.putData)










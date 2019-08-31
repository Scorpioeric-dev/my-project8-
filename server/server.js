const express = require('express')
const app = express()
const port = 4444
const ctrl = require('./controller')


app.use(express.json())
app.listen(port,()=> console.log(`Me and my ${port}`))

app.get(`/api/cars`, ctrl.getData)
app.get(`/api/car/:id`,ctrl.getDataById)
app.post(`/api/cars`,ctrl.postData)
app.delete(`/api/car/:id`,ctrl.removeData)
app.put(`/api/car/:id`,ctrl.putData)










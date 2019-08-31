const express = require('express')
const app = express()
const port = 4444
const ctrl = require('./controller')

app.listen(port,()=> console.log(`Me and my ${port}`))

app.get(`/api/cars`, ctrl.getData)













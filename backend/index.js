const express = require("express")
const cors = require ("cors")
const conn = require("./database")
const app = express()


const workerRouter = require ('./routers/routerWorker.js')
const clientRouter= require('./routers/routerClient.js')
const reviewRouter = require("./routers/routerReviews")
const taskRouter = require("./routers/routerTasks")
const reportsOftheClientRouter = require("./routers/routerReportsOfTheClients")
const reportsOftheWorkerRouter = require("./routers/routerReportsOfTheWorkers")
const chatroomsRouter = require('./routers/chatroomsRouter.js')
const cloudinary = require('cloudinary').v2;
const multer = require('multer')

app.use(express.json())
app.use(cors())



app.use('/api/clients',clientRouter)
app.use('/api/workers',workerRouter)
app.use('/api/reviews',reviewRouter)
app.use('/chatboxes',chatroomsRouter)

app.use('/api/tasks',taskRouter)
app.use('/api/reportsofclients',reportsOftheClientRouter)
app.use('/api/reportsofworkers',reportsOftheWorkerRouter)

app.listen(4000,()=>console.log("connected on 4000"))
cloudinary.config({
    cloud_name: "dilwfvmbr",
    api_key: "443273299735126",
    api_secret: "gv4yova2aVkz0IyYgwRcqAjV7EM"
  });
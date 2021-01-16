const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
const cors = require ('cors')

const app = express()

app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use(cors())


const CONNECTION_URL = 'mongodb+srv://dream-app:dream-app123@cluster0.ne4t7.mongodb.net/dream?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
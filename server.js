const express = require('express')
const app = express()

require('./startup/routes')(app)
require('./startup/db')()
require('./startup/middlewares')(app)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server started on port ${port}...`))

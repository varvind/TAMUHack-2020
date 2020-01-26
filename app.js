const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})


app.use(express.static('views'))

app.listen(3000, 
    console.log('listening on port 3000')
)

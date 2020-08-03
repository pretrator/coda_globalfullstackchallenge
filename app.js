const express = require('express')
const app = express()
require("dotenv").config()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

if (process.env.TTPE === 'PROD') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})
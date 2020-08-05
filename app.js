const express = require('express')
const helmet = require("helmet");
const dotenv=require("dotenv").config()
const bodyParser = require('body-parser')
const auth=require("./routes/middleware/auth")
const api=require("./routes/apiuseredit")
const connect=require("./dbconnect")
const voter=require("./routes/voting")
const getvotingtoken=require("./routes/givevotingtoken")

const app = express()

app.use(bodyParser.json())
app.use("/api",auth.admin,api)
app.use("/vote",auth.user,voter)
app.use("/gettoken",getvotingtoken)


if (process.env.TYPE === 'PROD') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }


app.listen(process.env.PORT, () => {
  console.log(`Backend upp ${process.env.PORT}`)
})
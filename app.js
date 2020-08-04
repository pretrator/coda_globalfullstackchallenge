const express = require('express')
const helmet = require("helmet");
require("dotenv").config()
const app = express()
const bodyParser = require('body-parser')
const auth=require("./routes/auth")
const api=require("./routes/apiuseredit")
app.use(helmet());
app.use(bodyParser.json())

app.post("*",(req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.use("/api",auth,api)

if (process.env.TYPE === 'PROD') {
    app.use(express.static('frontend/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
  }

app.use(require("./routes/errmiddle"))

app.listen(process.env.PORT, () => {
  console.log(`Backend upp ${process.env.PORT}`)
})
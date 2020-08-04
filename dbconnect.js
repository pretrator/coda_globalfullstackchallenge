const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', function() {
  console.log("DB Connected")
});
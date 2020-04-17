const mongoose = require('mongoose')
mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/#######DBNAME', { useNewUrlParser: true })

let mongoURI = ''
if(process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL
} else {
    mongoURI = "mongodb://localhost/#######DBNAME"
}

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

module.exports = mongoose

// heroku config:set ....
// original URL:
// mongodb+srv://dbadmin:<password>@cluster0-icgoa.mongodb.net/test?retryWrites=true&w=majority
// add <password>, run ----
// heroku config:set DB_URL="mongodb+srv://dbadmin:dbadmin@cluster0-icgoa.mongodb.net/test?retryWrites=true&w=majority"
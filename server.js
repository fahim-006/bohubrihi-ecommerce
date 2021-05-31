require('dotenv/config');
const app = require('./app')
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL_LOCAL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=>console.log("connected to mongodb"))
.catch(err => console.log("MongoDB connection Failed"));

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})
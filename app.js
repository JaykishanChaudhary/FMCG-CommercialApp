const express=require('express');
const mongoose=require('mongoose');
const app=express();
// const port=5000;
const UserRouter=require('./src/Routes/UserRoute');
const ProductRouter=require('./src/Routes/ProductRoute');
require('dotenv').config()


// console.log(process.env.DB_CONNECTION_STRING,process.env.PORT)
app.use(express.json());
app.use(UserRouter);
app.use(ProductRouter);
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error(err);
  });


app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
})

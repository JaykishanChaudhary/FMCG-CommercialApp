const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=5000;

app.use(express.json());

mongoose.connect('mongodb+srv://jaykishanchaudhary678:sa4pXxohB4zV4oGt@cluster0.1xz755a.mongodb.net/FMCG-CommercialApp?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.error(err);
  });
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})

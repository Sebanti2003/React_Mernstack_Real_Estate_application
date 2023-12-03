import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.json([{name:"Sebanti",age:28},{name:"Sebanti",age:28},{name:"Sebanti",age:28}])
})
app.listen(5000,()=>{
    console.log(`Server is running on port ${5000}`);
})
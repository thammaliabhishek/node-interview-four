const express=require('express');
const app=express();
const dotenv=require('dotenv')
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

const port=7000;


//query params or url params
app.get('/',(req,res)=>{
    res.write("<h1>Hello welcome params</h1>");
    res.end();
})



app.get('/player/:id',(req,res)=>{
    res.write(req.params["id"]);
    res.end();
})






//encryption vs hashing password

const hanshing=async()=>{
 const password = "Abhi0598";
 const hash = await bcrypt.hash(password,12);
 console.log(hash);

 const pass ="Abhi0598"
 const verify = await bcrypt.compare(pass,hash);
 console.log(verify)


}
hanshing()



//JWT


const jsonweb=async()=>{
    const secretKey=process.env.SECRET_KEY
    console.log(secretKey);
    const token=jwt.sign({
        id:"123344q72mhfb"
    },secretKey)
    console.log(token)

    const verifyData=jwt.verify(token,secretKey);
    console.log(verifyData)

}

jsonweb()






app.listen(port,()=>{
    console.log("hi i have done my work")
})
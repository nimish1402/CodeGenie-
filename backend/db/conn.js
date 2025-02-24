import { connect } from 'mongoose';
const DB = process.env.DB;

connect(DB)
.then(()=>{
    console.log(`Database Connected Successfully!`);
}) 
.catch((err)=>{
    console.log(`error occured .The Error is :${err}`);
})  
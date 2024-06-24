import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT=5000;
const DB_URL='mongodb+srv://romaaminov97:UyVcDVBZDlReFHIk@cluster0.wmdtsqj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const app=express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api',router)



async function startApp(){
    try{
        await mongoose.connect(DB_URL)
        app.listen(PORT, ()=>console.log('server started on port'+PORT))
    }
    catch(e){
        console.error(e)
    }
}

startApp()


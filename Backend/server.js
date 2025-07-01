import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import mongoose from 'mongoose'
import User from './model/user.js'
import Form from './model/form.js'

const app = express()

connectDB()

//built in  middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
//custom middleware
const methodFind=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
}
app.use(methodFind)

const blockDelete=(req,res,next)=>{
 if(req.method==="DELETE"){
    return res.send('Delete function blocked')
 }
 next()
}
// app.use(blockDelete)


app.get('/get', async (req, res) => {
    try { 
        const user = await User.find()
        res.json(user)
    } catch (error) {
        console.log(error);       
    }
})

app.get('/get/:id',async(req,res)=>{
    try {
        const user=await User.findById(req.params.id)
        if(!user) res.json({msg:'no user found with that id'})
        res.json(user)
    } catch (error) {
      res.send(error)  
    }
})

app.post('/post', async (req, res) => {
  try {
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.json(error)
  }
})
app.put('/put/:id', async (req, res) => {
  try {
    const update = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({ msg: 'data updated' })
  } catch (error) {
    res.json(error)
  }
})
app.patch('/patch', (req, res) => {
  res.send('from patch')
})
app.delete('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.send('ID deleted')
})

app.get('/getform',async(req,res)=>{
  const formData=await Form.find()
  res.json(formData)
})
app.post('/postform', async(req, res) => {
  try {
    const newform = new Form(req.body)
    await newform.save()
    res.status(201).json({msg:'user created'})
  } catch (error) {
    res.json(error)
  }
})


app.listen(3000, () => {
  console.log('Server running on port 3000')
})

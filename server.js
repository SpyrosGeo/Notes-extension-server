const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const Note =require('./models/Note')

const notes = new Note()
const {URI} = require('./config')
app.use(cors())
const PORT = 3000
app.get('/notes',async (req,res)=>{
	const response = await Note.find()
	res.send('success')
	console.log(response.body)
})

mongoose.connect(URI,{useNewUrlParser:true}).then(
	()=>{
		console.log('connected to db')
		return app.listen(PORT,()=>{
			console.log(`server running at port: ${PORT}`)
		})
	}
)

const express = require('express')
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors')
const app = express()
app.use(cors())
PORT = 3000
let db = new sqlite3.Database('./notes.db',sqlite3.OPEN_READWRITE,(err)=>{
	if (err){
		return console.error(err)
	}
	console.log(`Connected to the Notes SQlite database`)
})

app.get('/notes',(req,res)=>{
	res.send("Hello,Fuck")
	
})
app.post('/',(req,res)=>{
	db.serialize(()=>{
		db.run('CREATE TABLE notes(message text)')
		.run(`INSERT INTO notes(message)
			VALUES(${req.body})
			`)
	})
	

})

app.listen(PORT,()=>{
	console.log(`Listening at port ${PORT}`)

})
db.close();

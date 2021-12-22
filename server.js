const express = require('express');

const app = express()
PORT = 3000


app.get('/',(req,res)=>{
	res.send("Hello,Fuck")
	
})

app.listen(PORT,()=>{
	console.log(`Listening at port ${PORT}`)

})

const express = require('express');
const axios 	= require('axios').default;
require('dotenv').config()

var app = express();

function handleErrors(res,err){
	(err.response)
		?	res.sendStatus(err.response.status)
		:	res.send(err.message);
}

app.get('/',(req,res)=>{
	let url =`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.FONT_API_KEY}`;
	axios.get(url)
		.then(function(fontdata){
			res.json(fontdata.data.items);
		})
		.catch(err=>(res.send(handleErrors(res,err))));	
});

app.listen(3001,()=>{
	console.log('server running at 3001');
})

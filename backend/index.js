const express = require('express');
const axios 	= require('axios').default;
require('dotenv').config()

var app = express();

function handleErrors(res,err){
	(err.response)
		?	res.sendStatus(err.response.status)
		:	res.send(err.message);
}

app.get('/api/',(req,res)=>{
	let url =`https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.FONT_API_KEY}`;
	axios.get(url)
		.then(function(fontdata){
			fontdata = fontdata.data.items.map(({family,category},id)=>({family,category,id}) );
			res.json(fontdata);
		})
		.catch(err=>(handleErrors(res,err)));	
});

app.listen(process.env.PORT || 3001,()=>{
	console.log('server running at ',process.env.PORT || 3001);
})

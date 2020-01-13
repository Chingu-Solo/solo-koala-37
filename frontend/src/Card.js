import React from 'react';
import {Helmet} from "react-helmet";
import './Card.css';

const Card = (props)=>{
	const {size,displayText,font} = props;
	const style = {
		fontSize:size,
		fontFamily:`${font.family} ${font.category}`
	};

	var apiUrl = [];
	apiUrl.push('https://fonts.googleapis.com/css?family=');
	apiUrl.push(font.family.replace(/ /g, '+'));

	// url: 'https://fonts.googleapis.com/css?family=Anonymous+Pro:italic&subset=greek'
	var url = apiUrl.join('');
	
	return([
		<Helmet key={0}>
			<link href={url} rel="stylesheet" />
		</Helmet>,
		<div className="card" style={style} key={1}>
			<h3> {font.family} </h3>
			{displayText}
		</div>
		]
	)
}

export default Card;
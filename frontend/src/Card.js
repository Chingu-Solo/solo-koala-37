import React from 'react';
import {Helmet} from "react-helmet";
import './Card.css';

const Card = (props)=>{
	let {fontSize,displayText,font,index,isDarkMode} = props;
	displayText = displayText || "Then came the night of the first falling star";
	const style = {
		fontSize:`${fontSize}px`,
		fontFamily:`${font.family}, ${font.category}`,
	};
	const cardClass = `col-lg-2 col-md-3 col-sm-5 border-top font-card py-2 ${isDarkMode?"":"border-dark"} `;
	var apiUrl = [];
	apiUrl.push('https://fonts.googleapis.com/css?family=');
	apiUrl.push(font.family.replace(/ /g, '+'));
	var url = apiUrl.join('');
	

	return(
		[
			<Helmet key={`${index}0`}>
				<link href={url} rel="stylesheet" />
			</Helmet>,
			<div 
				className={cardClass} 
				key={`${index}2`} 
			>
				<h4 className="mb-5"> {font.family} </h4>
				<span style={style}>{displayText}</span>
			</div>
		]
	)
}

export default Card;
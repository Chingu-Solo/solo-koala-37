import React from 'react';
import {Helmet} from "react-helmet";
import './Card.css';

const Card = (props)=>{
	let {fontSize,displayText,font,isDarkMode} = props;
	let index = font.id;
	displayText = displayText || "Then came the night of the first falling star";
	const style = {
		fontSize:`${fontSize}px`,
		fontFamily:`${font.family}, ${font.category}`,
	};
	const cardClass = `col-lg-2 col-md-3 col-sm-5 border-top font-card py-2 ${isDarkMode?"":"border-dark"} `;
	let apiUrl = [];
	apiUrl.push('https://fonts.googleapis.com/css?family=');
	apiUrl.push(font.family.replace(/ /g, '+'));
	let url = apiUrl.join('');

	return(
		[	!displayText==="Please Wait" 
			?<Helmet key={`${index}1`}>
					<link href={url} rel="stylesheet" />
				</Helmet>
			:null
			,
			<div 
				className={cardClass} 
				key={`${index}2`} 
			>
				<h4 className="mb-5" key={`${index}21`}> {font.family} </h4>
				<span style={style} key={`${index}22`}>{displayText}</span>
			</div>
		]
	)
}

export default Card;
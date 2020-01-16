import React,{Component} from 'react';
import Card from './Card';
import './Cards.css'
class Cards extends Component{
	
	render() {
		const {fonts,fontSize,displayText,isDarkMode} = this.props;
		const cardList = fonts.map((font,index)=> (
			<Card 
				font={font}
				isDarkMode={isDarkMode}
				displayText={displayText} 
				fontSize={fontSize} 
				index={index} 
				key={index}
			/>
		));

		return (
			<div 
				className= "m-auto row"
			>
				{cardList}
			</div>
		);
	}
}

export default Cards;
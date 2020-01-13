import React,{Component} from 'react';
import Card from './Card';
import './Cards.css'
class Cards extends Component{
	
	render() {
		const {fonts,size,displayText} = this.props;
		const cardList = fonts.map((font,index)=> (<Card font={font} displayText={displayText} size={size} key={index}/>));

		return (
			<div className="cards">
				{cardList}
			</div>
		);
	}
}

export default Cards;
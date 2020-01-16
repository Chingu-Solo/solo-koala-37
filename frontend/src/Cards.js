import React,{Component} from 'react';
import Card from './Card';
import './Cards.css';
class Cards extends Component{
	

	isBottom(el) {
	  return el.getBoundingClientRect().bottom <= window.innerHeight+10;
	}

	componentDidMount() {
	  document.addEventListener('scroll', this.trackScrolling);
	}

	componentWillUnmount() {
	  document.removeEventListener('scroll', this.trackScrolling);
	}

	trackScrolling = () => {
	  const wrappedElement = document.getElementsByTagName('body')[0];
	  if (this.isBottom(wrappedElement)) {
	  	console.log("loadmore");
	  	this.props.loadMoreCards();
	    // document.removeEventListener('scroll', this.trackScrolling);
	  }
	};

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
				id="cards-container"
				className= "m-auto row"
			>
				{cardList}
			</div>
		);
	}
}

export default Cards;
import React,{Component} from 'react';
import Header from './Header' ;
import Nav 		from './Nav';
import Cards 	from	'./Cards';
import './FontApp.css'
class FontApp extends Component {
	constructor(props){
		super(props);
		this.state={
			allFonts:"",
			fonts:[{family: "Loading",category:""}],
			fontSize:32,
			displayText:"Please Wait",
			isDarkMode:false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleDarkMode = this.handleDarkMode.bind(this);
		this.loadMoreCards = this.loadMoreCards.bind(this);
	}
	handleChange(e){
		//fontsize and displayText
		let name = e.target.name;
		let value = e.target.value
		this.setState({[name]:value});
	}
	handleDarkMode(toMode){
		let isDarkMode = toMode==="dark";
		this.setState({isDarkMode});
	}
	loadMoreCards(){
		if(this.state.fonts.length===this.state.allFonts.length) return;

		this.setState(({fonts,allFonts}, props) => {
			let startIndex = fonts.length;
			let endIndex = Math.min(fonts.length+15,allFonts.length-1);
			return  {fonts:[...fonts,
										...allFonts.slice(startIndex,endIndex)
										]
							}
		});
	}
	async componentDidMount(){
		let response = await fetch(`/api`);
		let allFonts = await response.json();
		await this.setState({allFonts,displayText:"",fonts:[]});
		this.loadMoreCards();
	}
	render() {
		const {fontSize,displayText,isDarkMode} = this.state;
		let darkClass = "dark-app text-white bg-dark";
		return (
			<div className={isDarkMode?darkClass:null}>
				<Header />
				<Nav
					handleChange={this.handleChange}
					handleDarkMode={this.handleDarkMode}
					fontSize={fontSize}
					displayText={displayText}
					isDarkMode={isDarkMode}
				/>

				{/*<Footer />*/}
				<Cards {...this.state} loadMoreCards={this.loadMoreCards} />

			</div>
		);
	}
}

export default FontApp;
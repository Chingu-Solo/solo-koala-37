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
			fonts:[{family: "Loading",category:"",id:-1}],
			fontSize:32,
			displayText:"Please Wait",
			search:"",
			isDarkMode:false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleDarkMode = this.handleDarkMode.bind(this);
		this.loadMoreCards = this.loadMoreCards.bind(this);
		this.reset = this.reset.bind(this);
	}

	handleChange(e){
		//handle change for search, fontsize, displayText
		let name = e.target.name;
		let value = e.target.value
		let fonts = this.state.fonts.slice();
		if(name==="search") fonts=[];
		this.setState({[name]:value,fonts},this.loadMoreCards);
		
	}
	handleDarkMode(toMode){
		let isDarkMode = toMode==="dark";
		this.setState({isDarkMode});
	}
	loadMoreCards(){
	
		if(this.state.fonts.length===this.state.allFonts.length) return;

		this.setState(({fonts,allFonts,search}, props) => {
			let startIndex = fonts.length?fonts[fonts.length-1].id+1:0;
			let endIndex = startIndex;
			
			let fontsToAppend = [];
			while(endIndex!==allFonts.length && fontsToAppend.length<15){
				let font = allFonts[endIndex];
				if(font.family.toLowerCase().includes(search.toLowerCase())){
					fontsToAppend = [...fontsToAppend,font];
				}
				endIndex++;
			}
			
			return  {fonts:[...fonts,...fontsToAppend]}
		});
	}
	reset(){
		this.setState({
			fonts:[],
			fontSize:32,
			displayText:"",
			search:"",
			isDarkMode:false
		},this.loadMoreCards);
	}
	async componentDidMount(){
		let response = await fetch(`/api`);
		let allFonts = await response.json();
		await this.setState({allFonts,displayText:"",fonts:[]});
		this.loadMoreCards();
	}
	render() {
		const {fontSize,displayText,isDarkMode,search} = this.state;
		let darkClass = "dark-app text-white bg-dark";
		return (
			<div className={isDarkMode?darkClass:null}>
				<Header isDarkMode={isDarkMode}/>
				<Nav
					search={search}
					fontSize={fontSize}
					displayText={displayText}
					isDarkMode={isDarkMode}
					handleChange={this.handleChange}
					handleDarkMode={this.handleDarkMode}
					reset = {this.reset}
					
				/>

				{/*<Footer />*/}
				<Cards {...this.state} loadMoreCards={this.loadMoreCards} />

			</div>
		);
	}
}

export default FontApp;
import React,{Component} from 'react';
import Header from './Header' ;
import Nav 		from './Nav';
import Cards 	from	'./Cards';
class FontApp extends Component {
	constructor(props){
		super(props);
		this.state={
			fonts:[{family: "ABeeZee",category:"sans-serif"},{family: "Abel",category:"sans-serif"},{family: "Abril Fatface",category:"display"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"}],
			fontSize:32,
			displayText:"",
			isDarkMode:false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleDarkMode = this.handleDarkMode.bind(this);
	}
	handleChange(e){
		let name = e.target.name;
		let value = e.target.value
		this.setState({[name]:value});
	}
	handleDarkMode(toMode){
		let isDarkMode = toMode==="dark";
		this.setState({isDarkMode});
	}
	render() {
		const {fontSize,displayText,isDarkMode} = this.state;
		let darkClass = "text-white bg-dark";
		return (
			//dark
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
				<Cards {...this.state}/>

			</div>
		);
	}
}

export default FontApp;
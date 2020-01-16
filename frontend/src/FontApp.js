import React,{Component} from 'react';
import Header from './Header' ;
import Nav 		from './Nav';
import Cards 	from	'./Cards';
class FontApp extends Component {
	constructor(props){
		super(props);
		this.state={
			fonts:[{family: "ABeeZee",category:"sans-serif"},{family: "Abel",category:"sans-serif"},{family: "Abril Fatface",category:"display"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"}],
			fontSize:24,
			displayText:""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		let name = e.target.name;
		let value = e.target.value
		this.setState({[name]:value});
	}
	render() {
		return (
			<div>
				<Header />
				<Nav handleChange={this.handleChange} fontSize={this.props.fontSize} />

				{/*<Footer />*/}
				<Cards {...this.state}/>

			</div>
		);
	}
}

export default FontApp;
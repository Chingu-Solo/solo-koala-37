import React,{Component} from 'react';
import Header from './Header' ;
import Cards from	'./Cards';
class FontApp extends Component {
	constructor(props){
		super(props);
		this.state={
			fonts:[{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"},{family: "ABeeZee",category:"sans-serif"}],
			size:24,
			displayText:"Then came the of the first falling star"
		};

	}
	render() {
		return (
			<div>
				<Header />
				{/*<Nav />

				<Footer />*/}
				<Cards {...this.state}/>

			</div>
		);
	}
}

export default FontApp;
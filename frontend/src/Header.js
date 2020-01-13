import React,{Component} from 'react';
import './Header.css';
class	Header extends Component{
	render() {
		return (
			<div className="header-container">
				<h3>Google Fonts</h3>
				<div>
					<a>CATALOG</a>
					<a>FEATURED</a>
					<a>ARTICLES</a>
					<a>ABOUT</a>
				</div>
			</div>
		);
	}
}

export default Header;

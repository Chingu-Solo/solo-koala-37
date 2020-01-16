import React,{Component} from 'react';
import './Header.css';
class	Header extends Component{
	render() {
		const {isDarkMode} = this.props;
		let headerClass = `header-container p-3 border-bottom ${isDarkMode?"text-light":null} `;
		return (
			<div className={headerClass}>
				<h3>Google Fonts</h3>
				<div>
					<a href="/">CATALOG</a>
					<a href="/">FEATURED</a>
					<a href="/">ARTICLES</a>
					<a href="/">ABOUT</a>
				</div>
			</div>
		);
	}
}

export default Header;

import React,{Component} from 'react';
import './Nav.css'
class Nav extends Component{

	render() {
		const {handleChange,fontSize} = this.props;
		return (
			<div>
				<div className = "rounded-pill border px-5 py-1 mx-5 my-3 text-secondary">
					<input type="text" placeholder="Search" className="col-3 m-1 border-right"/>
					<input name="displayText" type="text" placeholder="Type something" onChange={handleChange} className="col-3 m-1 border-right" />
					<select name="fontSize" value={fontSize} onChange={handleChange} className="col-1 p-1 bg-white mx-1">
						<option value="24"> 24px </option>
						<option value="32"> 32px </option>
						<option value="40"> 40px </option>
						<option value="44"> 44px </option>
					</select>
					<span className="rounded-circle mx-2 px-2 bg-dark border"></span>
					<span className="rounded-circle px-2 border"></span>

					<div></div>

				</div>
			</div>
		);
	}
}



export default Nav;
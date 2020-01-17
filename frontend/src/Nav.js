import React,{Component} from 'react';
import './Nav.css'
class Nav extends Component{

	render() {
		const {
			handleChange,
			fontSize,
			displayText,
			search,
			isDarkMode,
			handleDarkMode,
			reset} = this.props;
		let inputClass = `col-3 m-1 border-right ${isDarkMode?" bg-dark text-white":""}`;
		let selectClass = `col-1 p-1 mx-1 ${isDarkMode?" bg-dark text-white":" bg-white"}`
		let resetClass = `float-right my-1 border-0 ${isDarkMode?" bg-dark text-white":" bg-white"}`
		return (
			<div id="nav" className = "row rounded-pill border px-5 py-1 mx-5 my-3 text-secondary ">
				<input name="search" type="text" value={search} onChange={handleChange} className={inputClass}placeholder="Search" />
				<input name="displayText" type="text" value={displayText} onChange={handleChange} className={inputClass} placeholder="Type something" />
				<select name="fontSize" value={fontSize} onChange={handleChange} className={selectClass}>
					<option value="20"> 20px </option>
					<option value="24"> 24px </option>
					<option value="32"> 32px </option>
					<option value="40"> 40px </option>
				</select>
				<div className="col-2 p-1 mx-1">
					<span 
						onClick={()=>{handleDarkMode("dark")}}
						className="rounded-circle mx-2 px-2 border bg-dark "
					></span>
					<span 
						onClick={()=>{handleDarkMode("light")}}
						className="rounded-circle px-2 border bg-white"
					></span>
				</div>

				<div className="col-1"></div>

				<button onClick={reset} className={resetClass} >
					<i className="fas fa-redo-alt"></i>
				</button>
			</div>
			
		);
	}
}



export default Nav;
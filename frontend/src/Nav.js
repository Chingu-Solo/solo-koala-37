import React,{Component} from 'react';
import './Nav.css'
class Nav extends Component{

	render() {
		const {handleChange,fontSize,displayText,isDarkMode,handleDarkMode} = this.props;
		let inputClass = `col-3 m-1 border-right ${isDarkMode?" bg-dark text-white":""}`;
		let selectClass = `col-1 p-1 mx-1 ${isDarkMode?" bg-dark text-white":" bg-white"}`
		return (
			<div>
				<div className = "rounded-pill border px-5 py-1 mx-5 my-3 text-secondary ">
					<input type="text" placeholder="Search" className={inputClass}/>
					<input name="displayText" type="text" value={displayText} placeholder="Type something" onChange={handleChange} className={inputClass} />
					<select name="fontSize" value={fontSize} onChange={handleChange} className={selectClass}>
						<option value="20"> 20px </option>
						<option value="24"> 24px </option>
						<option value="32"> 32px </option>
						<option value="40"> 40px </option>
					</select>
					<span 
						onClick={()=>{handleDarkMode("dark")}}
						className="rounded-circle mx-2 px-2 border bg-dark "
					></span>
					<span 
						onClick={()=>{handleDarkMode("light")}}
						className="rounded-circle px-2 border bg-white"
					></span>

					<div></div>

				</div>
			</div>
		);
	}
}



export default Nav;
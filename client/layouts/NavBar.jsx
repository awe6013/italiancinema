import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Navbar extends TrackerReact(React.Component) {
	constructor(){
		super();

	}


	render(){
		//console.log(FlowRouter.current());
		return(
			<header id="header" className={FlowRouter.current().path=="/"?"alt":""}>
				<h1><strong><a href="/">Italian Comedy</a></strong></h1>
				<nav id="nav">
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/generic">Generic</a></li>
						<li><a href="/elements">Elements</a></li>
					</ul>
				</nav>
			</header>
		)

	}
}

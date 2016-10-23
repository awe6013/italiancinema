import React from 'react';
import NavBar from './NavBar.jsx';


// <nav className="navbar navbar-default nabar-cls-top" role="navigation" style={margin-bottom: "0"} >
// <img src="images/userpics/account.png" class="img-thumbnail" />
// Print user's Name here

export var MainLayout = ({content}) => (   // export const MainLayout
		<div>
			<NavBar />
				<a href="#menu" className="navPanelToggle"><span className="fa fa-bars"></span></a>


		    	{content}
					<section id="four" className="wrapper style3 special">
						<div className="container">
							<header className="major">
								<h2>Aenean elementum ligula</h2>
								<p>Feugiat sed lorem ipsum magna</p>
							</header>
							<ul className="actions">
								<li><a href="#" className="button special big">Get in touch</a></li>
							</ul>
						</div>
					</section>
				<footer id="footer">
					<div className="container">
						{/*<ul className="icons">
							<li><a href="#" className="icon fa-facebook"></a></li>
							<li><a href="#" className="icon fa-twitter"></a></li>
							<li><a href="#" className="icon fa-instagram"></a></li>
						</ul>*/}
						<ul className="copyright">
							<li>&copy; Alex Eckard</li>
							<li>Design: <a href="http://templated.co">TEMPLATED</a></li>
							<li>Images: <a href="http://unsplash.com">Unsplash</a></li>
						</ul>
					</div>
				</footer>
			</div>
)

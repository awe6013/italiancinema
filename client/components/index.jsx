import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class index extends TrackerReact(React.Component) {
	constructor(){
		super();

	}

	render() {
		return (
			<div>
				<section id="banner">
						<h2>Spatial</h2>
						<p>Lorem ipsum dolor sit amet nullam consequat <br /> interdum vivamus donce sed libero.</p>
						<ul className="actions">
							<li><a href="#" className="button special big">Get Started</a></li>
						</ul>
					</section>


						<section id="one" className="wrapper style1">
							<div className="container 75%">
								<div className="row 200%">
									<div className="6u 12u$(medium)">
										<header className="major">
											<h2>Maecenas luctus lectus</h2>
											<p>Perspiciatis doloremque recusandae dolor</p>
										</header>
									</div>
									<div className="6u$ 12u$(medium)">
										<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ea mollitia corporis id, distinctio sunt veritatis officiis dolore reprehenderit deleniti voluptatibus harum magna, doloremque alias quisquam minus, eaque. Feugiat quod, nesciunt! Iste quos ipsam, iusto sit esse.</p>
										<p>Dolorum aspernatur maxime libero ratione quidem distinctio, placeat fugiat laborum voluptatum enim neque soluta vel sunt id ex veritatis. Labore rerum, odit sapiente, alias mollitia magnam exercitationem modi amet earum quia atque ipsum voluptas asperiores quas laboriosam.</p>
									</div>
								</div>
							</div>
						</section>


						<section id="two" className="wrapper style2 special">
							<div className="container">
								<header className="major">
									<h2>Fusce ultrices fringilla</h2>
									<p>Maecenas vitae tellus feugiat eleifend</p>
								</header>
								<div className="row 150%">
									<div className="6u 12u$(xsmall)">
										<div className="image fit captioned">
											<img src="images/pic02.jpg" alt="" />
											<h3>Lorem ipsum dolor sit amet.</h3>
										</div>
									</div>
									<div className="6u$ 12u$(xsmall)">
										<div className="image fit captioned">
											<img src="images/pic03.jpg" alt="" />
											<h3>Illum, maiores tempora cupid?</h3>
										</div>
									</div>
								</div>
								<ul className="actions">
									<li><a href="#" className="button special big">Nulla luctus</a></li>
									<li><a href="#" className="button big">Sed vulputate</a></li>
								</ul>
							</div>
						</section>


						<section id="three" className="wrapper style1">
							<div className="container">
								<header className="major special">
									<h2>Mauris vulputate dolor</h2>
									<p>Feugiat sed lorem ipsum magna</p>
								</header>
								<div className="feature-grid">
									<div className="feature">
										<div className="image rounded"><img src="images/pic04.jpg" alt="" /></div>
										<div className="content">
											<header>
												<h4>Lorem ipsum</h4>
												<p>Lorem ipsum dolor sit</p>
											</header>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse tenetur accusantium porro omnis, unde mollitia totam sit nesciunt consectetur.</p>
										</div>
									</div>
									<div className="feature">
										<div className="image rounded"><img src="images/pic05.jpg" alt="" /></div>
										<div className="content">
											<header>
												<h4>Recusandae nemo</h4>
												<p>Ratione maiores a, commodi</p>
											</header>
											<p>Animi mollitia optio culpa expedita. Dolorem alias minima culpa repellat. Dolores, fuga maiores ut obcaecati blanditiis, at aperiam doloremque.</p>
										</div>
									</div>
									<div className="feature">
										<div className="image rounded"><img src="images/pic06.jpg" alt="" /></div>
										<div className="content">
											<header>
												<h4>Laudantium fugit</h4>
												<p>Possimus ex reprehenderit eaque</p>
											</header>
											<p>Maiores iusto inventore fugit architecto est iste expedita commodi sed, quasi feugiat nam neque mollitia vitae omnis, ea natus facere.</p>
										</div>
									</div>
									<div className="feature">
										<div className="image rounded"><img src="images/pic07.jpg" alt="" /></div>
										<div className="content">
											<header>
												<h4>Porro aliquam</h4>
												<p>Quaerat, excepturi eveniet laboriosam</p>
											</header>
											<p>Vitae earum unde, autem labore voluptas ex, iste dolorum inventore natus consequatur iure similique obcaecati aut corporis hic in! Porro sed.</p>
										</div>
									</div>
								</div>
							</div>
						</section>


						

			</div>
		)
	}
}

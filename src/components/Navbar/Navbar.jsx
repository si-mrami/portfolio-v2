import './Navbar.scss'

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="nav-Centent">
				<div className="left">
					<div className="logo">
						Mrami
					</div>
					<span>toggle</span>
				</div>
				<div className="right">
					<div className="listelement">
					<div className="r-list">
						<ul>
							<li>Home</li>
							<li>Experiences</li>
							<li>Portfolio</li>
						</ul>
					</div>
					<button className="btn">Contact Us</button>
					</div>
					<div className="humburger">
						<span className='lin1'></span>
						<span className='lin2'></span>
						<span className='lin2'></span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar

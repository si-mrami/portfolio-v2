import './Portfolio.scss';
import exp from '../../assets/exper.png'

const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="Container">
				<div className="top">
					<div className="badge">
						<span>Experiences</span>
						<img src={exp} alt="" />
					</div>
				</div>
				<div className="Centent">
					<div className="items">
						<div className="item">

							<div className="itemTop">
								<h1>Fi Leadder</h1>
								<span>MERN Stack Developer Intern</span>
								<p>Apr 2022 - Jul 2022 · 4 mos</p>
							</div>
							<div className="itemDesc">
								<p>Réalisation d'une application web concerant
									l'audit automatique des écritures comptables.</p>
							</div>
						</div>


						<div className="item">
							<div className="itemTop">
								<h1>Freelancer</h1>
								<span>Full Stack Web Developer</span>
								<p>Aprl 2023 - Present</p>
							</div>
							<div className="itemDesc">
								<p>Work on Multible E-commerce Project</p>
							</div>
						</div>

						<div className="item">
							<div className="itemTop">
								<h1>E-AMBITION</h1>
								<span>Angular Développeur Intern</span>
								<p>Nov 2023 - Present</p>
							</div>
							<div className="itemDesc">
								<p>A Web Application Booking medical appointments online.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio

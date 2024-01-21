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
			<div className="Centent">centent</div>
		</div>
	</div>
  )
}

export default Portfolio

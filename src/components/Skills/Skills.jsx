import './Skills.scss';
import skills from '../../assets/skills.png';

const Skills = () => {
	return (
		<div className="skils">
			<div className="skilsCentent">
				<div className="top">
					<div className="badge">
						<span>Skills</span>
						<img src={skills} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills

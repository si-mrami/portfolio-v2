import './Skills.scss'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { backendSkills, frontendSkils, DatabaseSkils } from '../../data';
import SkillsList from '../SkillsLIst/SkillsList';

const Skills = () => {

	const [slected, setSelected] = useState("front-end")
	const [data, setData] = useState([]);

	const list = [
		{
			id: "front-end",
			title: "Front-End",
		},
		{
			id: "back-end",
			title: "Back-End",
		},
		{
			id: "database",
			title: "Database"
		}
	]

	useEffect(() => {
		switch (slected) {
			case "back-end":
				setData(backendSkills);
				break;
			case "front-end":
				setData(frontendSkils);
				break;
			case "database":
				setData(DatabaseSkils);
				break;
			default:
				setData(frontendSkils)
		}
	}, [slected])

	return (
		<div className='skills' id='skills'>
			<div className="centent">
				<div className="top">
					<div className="headerText">
						<span>Skills</span>
						<img src="https://cdn-icons-png.flaticon.com/128/10165/10165378.png" alt="" />
					</div>
				</div>
				<div className="skillscentent">
					<ul>
						{
							list.map((item) => (
								<SkillsList
									key={item.id}
									title={item.title}
									active={slected === item.id}
									setSelected={setSelected}
									id={item.id}
								/>
							))
						}
					</ul>
				</div>
				<div className="skillsElement">
					<div className="items">
						{data.map((d) => (
							<div className="item" key={d.id}>
								<div className="item-top">
									<h2>{d.Name}</h2>
									<img src={d.img} alt="" />
								</div>
								<ProgressBar className="prog" variant={d.variant} now={d.now} label={d.leble} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills

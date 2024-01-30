import React from 'react'
import './SkillsList.scss'
// skils component
const SkillsList = ({ id, title, active, setSelected }) => {
	return (
		<li className={active ? "skillslist active" : "skillslist"}
			onClick={() => setSelected(id)}
		>
			{title}
		</li>
	)
}

export default SkillsList

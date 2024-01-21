import './Header.scss';
import GitHub from "../../assets/github.png";
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Imoj from '../../assets/glassesimoji.png';
import mrami from '../../assets/mrami.jpeg';
import heartemoji from '../../assets/heartemoji.png';
import { motion } from "framer-motion";


const Header = () => {

	const transition = { duration: 2, type: "spring" };

	return (
		<div className="header">
			<div className="head-Centent">
				<div className="left">
					<div className="name">
						<span>Hey! I'm</span>
						<span>Mohamed Rami</span>
						<span>
							I'm a Web Developer with a
							strong foundation in web
							development technologies. Eager
							to contribute skills in front-end
							and back-end development to a
							dynamic team. Adept at
							collaborating with cross-
							functional teams to deliver high-
							quality, user-centric solutions.
						</span>
					</div>
					<button className="btn">
						Her Me
					</button>
					<div className="icons">
						<img src={GitHub} alt="" />
						<img src={Instagram} alt="" />
						<img src={LinkedIn} alt="" />
					</div>
				</div>
				<div className="right">
					<div className="top">
						<motion.img
							className='imoji'
							whileHover={{ scale: 1.2, rotate: 360 }}
							whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
							src={Imoj}
							alt=""
						/>
						<motion.div
							className='badge'
							whileHover={{ scale: 1.2, rotate: 120 }}
							whileTap={{ scale: 0.8, rotate: -120, borderRadius: "100%" }}
							initial={{ left: "9rem", top: "18rem" }}
							whileInView={{ left: "0rem" }}
							transition={transition}
						>
							<span>Full Stack Web Developer</span>
							<img src={heartemoji} alt="" />
						</motion.div>
					</div>
					<div className="images">
						<motion.div
							className="container"
							whileHover={{ scale: 1.1, rotate: 360 }}
							whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
						>
							<img src={mrami} alt="" />
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header

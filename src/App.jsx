import Navbar from "./components/Navbar/Navbar";
import './App.scss';
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";


const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header/>
			<Portfolio/>
			<Skills/>
		</div>
	)
}

export default App

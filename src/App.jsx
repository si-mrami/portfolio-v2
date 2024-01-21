import Navbar from "./components/Navbar/Navbar";
import './App.scss';
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";


const App = () => {
	return (
		<div className="app">
			<Navbar />
			<Header/>
			<Portfolio/>
		</div>
	)
}

export default App


import './App.scss';
import About from './components/About/Presentational';
import Experiences from './components/Experiences/Presentational';
import Hero from './components/Hero/Presentational';
import Navbar from './components/Navbar/Presentational';
import Technologies from './components/Technologies/Presentational';

function App() {
  return (
    <div className="App">
      <div className='app_element'>
      <div className="app_background">
      </div>
      </div>
      <div className='app_navbar'>
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experiences />
      </div>
      
    </div>
  );
}

export default App;

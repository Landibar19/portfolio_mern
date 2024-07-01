
import './App.scss';
import About from './components/About/Presentational';
import Hero from './components/Hero/Presentational';
import Navbar from './components/Navbar/Presentational';

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
      </div>
      
    </div>
  );
}

export default App;

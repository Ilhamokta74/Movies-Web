// import { Row, Container, Col } from 'react-bootstrap';
import './App.css';

import NavigationBar from './component/NavigasiBar';
import Intro from './component/Intro';
import Trending from './component/Trending';
import Superhero from './component/Superhero';

import "./style/LandingPage.css"

function App() {
  return (
    <div>
      <div className='myBG '>
        <NavigationBar />
        <Intro />
      </div>

      <div className='trending'>
        <Trending />
      </div>

      <div className='superhero'>
        <Superhero />
      </div>
    </div>
  );
}

export default App;

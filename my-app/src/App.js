import logo from './logo.svg';
import './App.css';
import { Frame1 } from './Components/LandingPage/frame1/Frame1';
import { Frame2 } from './Components/LandingPage/frame2/Frame2';
import { Frame3 } from './Components/LandingPage/frame3/Frame3';
import { Frame4 } from './Components/LandingPage/frame4/Frame4';
import { Frame5 } from './Components/LandingPage/frame5/Frame5';
import { Frame6 } from './Components/LandingPage/frame6/Frame6';
import { Frame7 } from './Components/LandingPage/frame7/Frame7';

function App() {
  return (
    <div className="App">
      <Frame1/>
      <Frame2/>
      <Frame3/>
      <Frame4/>
      <Frame5/>
      <Frame6/>
      <Frame7/>
    </div>
  );
}

export default App;

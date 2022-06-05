import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';
// https://www.youtube.com/watch?v=K7vHoUwClaM

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />

        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import HeaderHang from './components/header/header'
import Game from './components/game/game'



function App() {
  return (
    <div className="bg">
      <HeaderHang/>
      <h3>Type a word for Hangman</h3>
      <Game/>
    </div>
  );
}

export default App;

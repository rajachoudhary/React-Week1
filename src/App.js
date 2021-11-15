import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import icon from './svg/download.jpg';


function App() {
  return (
    <div className="App App-header">
      <Button title="A"/>
      <Button title="B"/>
      <Button title="D"/>
      <img src="logo192.png" alt="logo"/>
      <img src={icon} alt="react"></img>
      <div>raja</div>
    </div>
  );
}

export default App;

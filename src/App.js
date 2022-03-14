import logo from './logo.svg';
import './App.css';
import Message from './Component/Message';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome'
function App() {
  return (
    <div className="App">
    <Greet name={"animesh"} >
        <p>The name is animesh</p>
      </Greet>
      <Welcome name={"batman"} >
        <p>Thy name Batman</p>
      </Welcome>
      <Message/>
    </div>
  );
}

export default App;

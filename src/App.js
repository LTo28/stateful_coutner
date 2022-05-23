import Buttons from "./components/Buttons";
import Number_Display from "./components/Number_Display";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stateful Counter</h1>
        <Number_Display />
        <Buttons />
      </header>
    </div>
  );
}

export default App;

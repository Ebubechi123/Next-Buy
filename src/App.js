import './App.css';
import { Switch } from "react-router-dom";
import Routes from "./Routes/Routes";
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Switch>
      <Routes />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Faqs from "./Pages/Faqs";
import Contact from "./Pages/Contact";
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Faqs">Faqs</Link>
          <Link to="Contact">Contact</Link>
        </nav>
        <Route exact path="/" component={Home}></Route>
        <Route path="/Faqs" component={Faqs}></Route>
        <Route path="/Contact" component={Contact}></Route>
      </Router>
    </div>
  );
}

export default App;

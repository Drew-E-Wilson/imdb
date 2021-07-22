import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link path="/">Home</Link>
          <Link path="/Faqs">Faqs</Link>
          <Link path="Contact">Contact</Link>
        </nav>
        <h1>Hello World</h1>
      </Router>
    </div>
  );
}

export default App;

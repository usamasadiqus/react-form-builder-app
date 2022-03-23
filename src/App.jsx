import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormBuilder } from "./components";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<FormBuilder />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

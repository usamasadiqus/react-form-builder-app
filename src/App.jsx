import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormBuilder, FormPreview } from "./pages";
import "./styles/App.css";

const App = () => {
  return (
    <div className="container wrapper">
      <Router>
        <Routes>
          <Route exact path="/" element={<FormBuilder />} />
          <Route path="/form-preview" element={<FormPreview />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

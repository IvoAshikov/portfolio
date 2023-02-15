import "./App.css";
import SinglePage from "./components/SinglePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SinglePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

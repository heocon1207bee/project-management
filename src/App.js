import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import TaskPage from "./pages/TaskPage/TaskPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

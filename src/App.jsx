import MyComponent from "./components/MyComponent.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MyComponent />} />
        <Route path="/my-component" element={<MyComponent />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
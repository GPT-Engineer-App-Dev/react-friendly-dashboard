import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MyComponent />} />
        <Route path="/my-component" element={<MyComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
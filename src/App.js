import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginForm } from "./pages";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

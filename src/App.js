import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BooksPage, LoginForm, MoviesPage, MusicPage, TVPage } from "./pages";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

function App() {
  Amplify.configure(awsconfig);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/tv" element={<TVPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BooksPage,
  Dashboard,
  LoginForm,
  MoviesPage,
  MusicPage,
  TVPage,
  PracticePage,
} from "./pages";
import { PageWrapper, PrivateRoute } from "./components";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

function App() {
  Amplify.configure(awsconfig);
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="*" element={<LoginForm />} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<PageWrapper />}>
              <Route path="*" element={<PracticePage />} />
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/tv" element={<TVPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/* <Router>
<Routes>
  <Route path="*" element={<PageNotFoundPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/" element={<PrivateRoute />}>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/" element={<FiltersLayout />}>
      <Route path="/scorecard" element={<ScorecardPage dataSet={demoDataSet} />} />
      <Route path="/drivers" element={<DriversPage />} />
      <Route path="/topics" element={<TopicsPage />} />
      <Route path="/trends" element={<TrendsPage />} />
      <Route path="/reviews" element={<ReviewMiningPage />} />
      <Route path="/forum" element={<ForumMiningPage />} />
      <Route path="/practice" element={<PracticePage />} />
      <Route path="/data" element={<DataTablePage dataSet={demoDataSet} />} />
      <Route exact path="/settings" element={<SettingsPage />} />
    </Route>
  </Route>
</Routes>
</Router> */

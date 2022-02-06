import "./App.css";
import WeatherPage from "./WeatherPage";
import Form from './Form';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/weather/:place">
        <WeatherPage />
      </Route>
      <Route path="/">
        <div>
          <h1>Startsida</h1>
          <Link to="/weather">Gå till väder för Stockholm</Link>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default App;

import { Switch, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import CountryPage from "pages/CountryPage";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/country" render={() => <CountryPage />} />
    </Switch>
  );
};

export default App;

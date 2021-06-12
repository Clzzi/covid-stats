import { Switch, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <MainPage />} />
    </Switch>
  );
};

export default App;

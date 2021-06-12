import { Tab, Tabs, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStores from "hooks/useStores";
import { observer } from "mobx-react";

const NavBar = () => {
  const { store } = useStores();
  const { pageValue, handlePageValue } = store.MainStore;
  return (
    <AppBar position="static" color="default">
      <Tabs value={pageValue} onChange={handlePageValue}>
        <Tab label="Main" component={Link} to="/" />
        <Tab label="Country" component={Link} to="/country" />
      </Tabs>
    </AppBar>
  );
};

export default observer(NavBar);

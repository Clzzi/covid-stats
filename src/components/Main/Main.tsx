import useStores from "hooks/useStores";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const Main = () => {
  const { store } = useStores();
  const { coronaData } = store.MainStore;
  console.log(toJS(coronaData));
  return <>{coronaData.resultCode}</>;
};

export default observer(Main);

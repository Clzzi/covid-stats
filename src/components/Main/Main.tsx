import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import { toJS } from "mobx";
const Main = () => {
  const { store } = useStores();
  const { coronaData } = store.MainStore;
  console.log(toJS(coronaData));
  return <>{coronaData.resultCode}</>;
};

export default observer(Main);

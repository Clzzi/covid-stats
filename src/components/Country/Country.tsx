import useStores from "hooks/useStores";
import { toJS } from "mobx";
import { observer } from "mobx-react";

const Country = () => {
  const { store } = useStores();
  const { countryCoronaData } = store.MainStore;
  console.log(toJS(countryCoronaData));

  return <div>{countryCoronaData.resulltCode}</div>;
};

export default observer(Country);

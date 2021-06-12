import useStores from "hooks/useStores";
import Country from "components/Country";
import { useEffect } from "react";
import { observer } from "mobx-react";

const CountryContainer = () => {
  const { store } = useStores();
  const { handleGetCountryCoronaData } = store.MainStore;
  
  const request = async () => {
    await handleGetCountryCoronaData();
  };
  
  useEffect(() => {
    request();
  }, []);

  return <Country />;
};

export default observer(CountryContainer);

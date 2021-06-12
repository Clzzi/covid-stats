/* eslint-disable */
import useStores from "hooks/useStores";
import Main from "components/Main";
import { useEffect, useState } from "react";
import { observer } from 'mobx-react';

const MainContainer = () => {
  const { store } = useStores();
  const { handleGetCoronaData } = store.MainStore;

  const request = async () => {
    await handleGetCoronaData();
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <Main/>
  );
};

export default observer(MainContainer);

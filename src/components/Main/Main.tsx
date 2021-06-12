import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import Card from 'components/Common/Card';
import classNames from 'classnames';
import { toJS } from "mobx";

const style = require("./Main.scss");
const cx = classNames.bind(style);

const Main = () => {
  const { store } = useStores();
  const { coronaData } = store.MainStore;
  return (
    <div className={cx('Main')}>
      <Card message="국내 확진자수" content={coronaData.TotalCase} percent={coronaData.TotalCase}/>
      <Card message="국내 완치자수" content={coronaData.TotalRecovered} percent={coronaData.TotalRecovered}/>
      <Card message="국내 격리자수" content={coronaData.NowCase} percent={coronaData.NowCase}/>
      <Card message="국내 사망자수" content={coronaData.TotalDeath} percent={coronaData.TotalDeath}/>
      <br/>
      <Card message="지역별 현황" content={coronaData.city1n} percent={coronaData.city1p}/>
      <Card message="지역별 현황" content={coronaData.city2n} percent={coronaData.city2p}/>
      <Card message="지역별 현황" content={coronaData.city3n} percent={coronaData.city3p}/>
      <Card message="지역별 현황" content={coronaData.city4n} percent={coronaData.city4p}/>
      <Card message="지역별 현황" content={coronaData.city5n} percent={coronaData.city5p}/>

    </div>
  );
};

export default observer(Main);

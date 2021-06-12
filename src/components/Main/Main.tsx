import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import Card from 'components/Common/Card';
import classNames from 'classnames';

const style = require("./Main.scss");
const cx = classNames.bind(style);

const Main = () => {
  const { store } = useStores();
  const { coronaData } = store.MainStore;
  return (
    <div className={cx('Main')}>
      <Card message="국내 확진자수" content={coronaData.TotalCase} percent={`전날대비${coronaData.TotalCaseBefore}명 확진`}/>
      <Card message="국내 완치자수" content={coronaData.TotalRecovered} percent={`완치율 ${coronaData.recoveredPercentage}%`} />
      <Card message="국내 격리자수" content={coronaData.NowCase} percent={`현재 ${coronaData.checkingCounter}명 검사중`} />
      <Card message="국내 사망자수" content={coronaData.TotalDeath} percent={`오늘 ${coronaData.TodayDeath}명 사망`}/>
      <Card message="총 검사완료" content={coronaData.TotalChecking} percent="빨리 해결되기를 바래요" />
      <br/>
      <Card message="지역별 현황" content={coronaData.city1n} percent={`${coronaData.city1p}%`}/>
      <Card message="지역별 현황" content={coronaData.city2n} percent={`${coronaData.city2p}%`}/>
      <Card message="지역별 현황" content={coronaData.city3n} percent={`${coronaData.city3p}%`}/>
      <Card message="지역별 현황" content={coronaData.city4n} percent={`${coronaData.city4p}%`}/>
      <Card message="지역별 현황" content={coronaData.city5n} percent={`${coronaData.city5p}%`}/>
      <br/>
    </div>
  );
};

export default observer(Main);

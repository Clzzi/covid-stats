import useStores from "hooks/useStores";
import { observer } from "mobx-react";
import Card from "components/Common/Card";
import classNames from "classnames";

const style = require("./Country.scss");
const cx = classNames.bind(style);

const Country = () => {
  const { store } = useStores();
  const { countryCoronaData } = store.MainStore;
  return (
    <div className={cx("Country")}>
      <div className={cx("Country-Title")}>서울</div>
      <Card
        message="확진자"
        content={`전체${countryCoronaData.seoul.totalCase}`}
        percent={`오늘${countryCoronaData.seoul.newCase}명`}
      />
      <Card
        message="완치자"
        content={`전체${countryCoronaData.seoul.recovered}`}
        percent={`오늘${countryCoronaData.seoul.newCase}명`}
      />
      <Card
        message="사망자"
        content={`전체${countryCoronaData.seoul.death}`}
        percent={`오늘${countryCoronaData.seoul.newCase}명`}
      />
      <Card
        message="발생률"
        content={`${countryCoronaData.seoul.percentage}%`}
        percent={`오늘${countryCoronaData.seoul.newCase}명`}
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.seoul.newCcase}명`}
        percent="국내"
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.seoul.newFcase}명`}
        percent="해외"
      />

      <div className={cx("Country-Title")}>대구</div>
      <Card
        message="확진자"
        content={`전체${countryCoronaData.daegu.totalCase}`}
        percent={`오늘${countryCoronaData.daegu.newCase}명`}
      />
      <Card
        message="완치자"
        content={`전체${countryCoronaData.daegu.recovered}`}
        percent={`오늘${countryCoronaData.daegu.newCase}명`}
      />
      <Card
        message="사망자"
        content={`전체${countryCoronaData.daegu.death}`}
        percent={`오늘${countryCoronaData.daegu.newCase}명`}
      />
      <Card
        message="발생률"
        content={`${countryCoronaData.daegu.percentage}%`}
        percent={`오늘${countryCoronaData.daegu.newCase}명`}
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.daegu.newCcase}명`}
        percent="국내"
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.daegu.newFcase}명`}
        percent="해외"
      />

      <div className={cx("Country-Title")}>부산</div>
      <Card
        message="확진자"
        content={`전체${countryCoronaData.busan.totalCase}`}
        percent={`오늘${countryCoronaData.busan.newCase}명`}
      />
      <Card
        message="완치자"
        content={`전체${countryCoronaData.busan.recovered}`}
        percent={`오늘${countryCoronaData.busan.newCase}명`}
      />
      <Card
        message="사망자"
        content={`전체${countryCoronaData.busan.death}`}
        percent={`오늘${countryCoronaData.busan.newCase}명`}
      />
      <Card
        message="발생률"
        content={`${countryCoronaData.busan.percentage}%`}
        percent={`오늘${countryCoronaData.busan.newCase}명`}
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.busan.newCcase}명`}
        percent="국내"
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.busan.newFcase}명`}
        percent="해외"
      />

      <div className={cx("Country-Title")}>인천</div>
      <Card
        message="확진자"
        content={`전체${countryCoronaData.incheon.totalCase}`}
        percent={`오늘${countryCoronaData.incheon.newCase}명`}
      />
      <Card
        message="완치자"
        content={`전체${countryCoronaData.incheon.recovered}`}
        percent={`오늘${countryCoronaData.incheon.newCase}명`}
      />
      <Card
        message="사망자"
        content={`전체${countryCoronaData.incheon.death}`}
        percent={`오늘${countryCoronaData.incheon.newCase}명`}
      />
      <Card
        message="발생률"
        content={`${countryCoronaData.incheon.percentage}%`}
        percent={`오늘${countryCoronaData.incheon.newCase}명`}
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.incheon.newCcase}명`}
        percent="국내"
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.incheon.newFcase}명`}
        percent="해외"
      />

      <div className={cx("Country-Title")}>광주</div>
      <Card
        message="확진자"
        content={`전체${countryCoronaData.gwangju.totalCase}`}
        percent={`오늘${countryCoronaData.gwangju.newCase}명`}
      />
      <Card
        message="완치자"
        content={`전체${countryCoronaData.gwangju.recovered}`}
        percent={`오늘${countryCoronaData.gwangju.newCase}명`}
      />
      <Card
        message="사망자"
        content={`전체${countryCoronaData.gwangju.death}`}
        percent={`오늘${countryCoronaData.gwangju.newCase}명`}
      />
      <Card
        message="발생률"
        content={`${countryCoronaData.gwangju.percentage}%`}
        percent={`오늘${countryCoronaData.gwangju.newCase}명`}
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.gwangju.newCcase}명`}
        percent="국내"
      />
      <Card
        message="전일대비"
        content={`${countryCoronaData.gwangju.newFcase}명`}
        percent="해외"
      />
    </div>
  );
};

export default observer(Country);

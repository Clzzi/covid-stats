import { action, observable, runInAction } from "mobx";
import { autobind } from "core-decorators";
import MainRepository from "./MainRepository";

@autobind
class MainStore {
  @observable coronaData = {};
  @observable countryCoronaData = {
    seoul: {

    },
    busan: {

    },
    daegu: {

    },
    incheon: {

    },
    gwangju: {
      
    }
  };
  @observable pageValue = 0;

  @action
  async handleGetCoronaData() {
    const response = await MainRepository.getCoronaData();
    runInAction(() => {
      this.coronaData = response;
    });
  }
  
  @action
  async handleGetCountryCoronaData() {
    const response = await MainRepository.getCountryCoronaData();
    runInAction(() => {
      this.countryCoronaData = response;
    });
  }

  @action
  handlePageValue(event: any, newValue: any) {
    runInAction(() => {
      this.pageValue = newValue;
    });
  }
}

export default MainStore;

import { action, observable, runInAction } from "mobx";
import { autobind } from "core-decorators";
import MainRepository from "./MainRepository";

@autobind
class MainStore {
  @observable coronaData = {};
  @observable countryCoronaData = {};
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
    const response = await MainRepository.getCounterCoronaData();
    runInAction(() => {
      this.countryCoronaData = response;
    });
  }

  @action
  handlePageValue(event: any, newValue: any) {
    this.pageValue = newValue;
  }
}

export default MainStore;

import { action, observable, runInAction } from "mobx";
import { autobind } from "core-decorators";
import MainRepository from "./MainRepository";

@autobind
class MainStore {
  @observable coronaData = {};

  @action
  async handleGetCoronaData() {
    const response = await MainRepository.getCoronaData();
    runInAction(() => {

      this.coronaData = response;
    })
  }
}

export default MainStore;

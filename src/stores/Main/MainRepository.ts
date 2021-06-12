import axios from "axios";

class MainRepository {
  getCoronaData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.corona-19.kr/korea/?serviceKey=v5W3QnydU8w7YLKJm241fFaehITzoqVB9"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  getCounterCoronaData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.corona-19.kr/korea/country/new/?serviceKey=v5W3QnydU8w7YLKJm241fFaehITzoqVB9"
      );
      return data;
    } catch (e) {
      console.log(e);
    }
  };
}

export default new MainRepository();

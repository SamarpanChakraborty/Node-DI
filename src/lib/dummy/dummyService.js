module.exports = class DummyService {
  constructor(axiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async getDummy() {
    try {
      const data = await this.axiosInstance.get('http://www.mocky.io/v2/5e7c6ae93500008900068c51');
      return data.data;
    } catch (e) {
      throw Error(e.message);
    }
  }
};

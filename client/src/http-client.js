class HttpClient {

  /**
   * @param {string} windFarm
   * @param {number} facility
   * @param {number} year
   * @returns {Promise<string>}
   */
  getCorrelationDiagram(windFarm, facility, year) {
    return new Promise((resolve, reject) => {
      fetch(`/api/windspeed?farm=${windFarm}&facility=${facility}&year=${year}`)
        .then((res) => {
          res.json()
            .then((data) => resolve(data.image))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * @param {{ windFarm: string; facility: number; year: number; month: number | null; }}
   * @returns {Promise<string>}
   */
  getErrorFrequencyDiagram({ windFarm, facility, year, month }) {
    return new Promise((resolve, reject) => {
      let uri = `/api/errorfrequency?farm=${windFarm}&facility=${facility}&year=${year}`;
      if (month !== null) {
        uri += `&month=${month}`;
      }

      fetch(uri)
        .then((res) => {
          res.json()
            .then((data) => resolve(data.image))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }

}

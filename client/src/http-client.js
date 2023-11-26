class HttpClient {

  /**
   * @param {string} windFarm
   * @param {number} facility
   * @param {number} year
   * @returns {Promise<string>}
   */
  getCorrelationDiagram(windFarm, facility, year) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost/api/windspeed?farm=${windFarm}&facility=${facility}&year=${year}`)
        .then((res) => {
          res.json()
            .then((data) => resolve(data.image))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }

  /**
   * @param {string} windFarm
   * @param {number} facility
   * @param {number} year
   * @returns {Promise<string>}
   */
  getErrorFrequencyDiagram(windFarm, facility, year) {
    return new Promise((resolve, reject) => {
      fetch(`http://localhost/api/errorfrequency?farm=${windFarm}&facility=${facility}&year=${year}`)
        .then((res) => {
          res.json()
            .then((data) => resolve(data.image))
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }

}

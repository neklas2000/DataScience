class Filter {

  /**
   * @param {string} root id of the root element
   */
  constructor(root) {
    this.wind_farm = 'a';
    this.facility = 1;
    this.year = 2014;
    this.container = document.getElementById(root);
    this.id = root;
    /**
     * @type {{
     *  [key: string]: {
     *    facilities: number[];
     *    years: {
     *      default: number[];
     *      [facility: number]: number[];
     *    };
     *  }
     * }}
     */
    this.windFarms = {
      a: {
        facilities: [1, 2, 3, 4, 5, 6, 7, 8],
        years: {
          default: [2014, 2015, 2016, 2017, 2018, 2019, 2020]
        }
      },
      b: {
        facilities: [1, 2, 3, 4],
        years: {
          default: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
        }
      },
      c: {
        facilities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        years: {
          default: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
          10: [2019, 2020],
          11: [2017, 2018, 2019, 2020],
          12: [2017, 2018, 2019, 2020]
        }
      },
      d: {
        facilities: [1, 2, 3, 4],
        years: {
          default: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
        }
      },
      e: {
        facilities: [3, 6, 7, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
        years: {
          default: [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
        }
      }
    };
    this.render();
  }

  handleWindFarmChange(ev) {
    this.wind_farm = ev.target.value;
  }

  handleFacilityChange(ev) {
    this.facility = Number(ev.target.value);
  }

  handleYearChange(ev) {
    this.year = Number(ev.target.value);
  }

  changeFacilities() {
    this.container.querySelector(`div#facility-filter__${this.id}-container`)
      .innerHTML = this.windFarms[this.wind_farm].facilities.map((facility, index) => {
        return `
          <div>
            <input type="radio" id="facility_${facility}" name="facility__${this.id}" value="${facility}" ${index === 0 ? 'checked' : ''} />
            <label for="facility_${facility}">Anlage ${facility}</label>
          </div>
        `;
      }).join('');

    this.facility = this.windFarms[this.wind_farm].facilities[0];
  }

  changeYears() {
    let years = this.windFarms[this.wind_farm].years.default;

    if (Object.hasOwn(this.windFarms[this.wind_farm].years, this.facility)) {
      years = this.windFarms[this.wind_farm].years[this.facility];
    }

    this.container.querySelector(`div#year-filter__${this.id}-container`)
      .innerHTML = years.map((year, index) => {
        return `
          <div>
            <input type="radio" id="year_${year}" name="year__${this.id}" value="${year}" ${index === 0 ? 'checked' : ''} />
            <label for="year_${year}">${year}</label>
          </div>
        `;
      }).join('');

    this.year = years[0];
  }

  render() {
    this.container.innerHTML = `
      <fieldset id="wind-farm-filter__${this.id}" style="flex: 33%;">
        <legend>Windpark auswählen</legend>
        <div>
          <input type="radio" id="wind_farm_a" name="wind_farm__${this.id}" value="a" checked />
          <label for="wind_farm_a">Windpark A</label>
        </div>
        <div>
          <input type="radio" id="wind_farm_b" name="wind_farm__${this.id}" value="b" />
          <label for="wind_farm_b">Windpark B</label>
        </div>
        <div>
          <input type="radio" id="wind_farm_c" name="wind_farm__${this.id}" value="c" />
          <label for="wind_farm_c">Windpark C</label>
        </div>
        <div>
          <input type="radio" id="wind_farm_d" name="wind_farm__${this.id}" value="d" />
          <label for="wind_farm_d">Windpark D</label>
        </div>
        <div>
          <input type="radio" id="wind_farm_e" name="wind_farm__${this.id}" value="e" />
          <label for="wind_farm_e">Windpark E</label>
        </div>
      </fieldset>
      <fieldset id="facility-filter__${this.id}" style="flex: 33%;">
        <legend>Anlage auswählen</legend>
        <div id="facility-filter__${this.id}-container">
          <div>
            <input type="radio" id="facility_1" name="facility__${this.id}" value="1" checked />
            <label for="facility_1">Anlage 1</label>
          </div>
          <div>
            <input type="radio" id="facility_2" name="facility__${this.id}" value="2" />
            <label for="facility_2">Anlage 2</label>
          </div>
          <div>
            <input type="radio" id="facility_3" name="facility__${this.id}" value="3" />
            <label for="facility_3">Anlage 3</label>
          </div>
          <div>
            <input type="radio" id="facility_4" name="facility__${this.id}" value="4" />
            <label for="facility_4">Anlage 4</label>
          </div>
          <div>
            <input type="radio" id="facility_5" name="facility__${this.id}" value="5" />
            <label for="facility_5">Anlage 5</label>
          </div>
          <div>
            <input type="radio" id="facility_6" name="facility__${this.id}" value="5" />
            <label for="facility_6">Anlage 6</label>
          </div>
          <div>
            <input type="radio" id="facility_7" name="facility__${this.id}" value="7" />
            <label for="facility_7">Anlage 7</label>
          </div>
          <div>
            <input type="radio" id="facility_8" name="facility__${this.id}" value="8" />
            <label for="facility_8">Anlage 8</label>
          </div>
        </div>
      </fieldset>
      <fieldset id="year-filter__${this.id}" style="flex: 33%;">
        <legend>Jahr auswählen</legend>
        <div id="year-filter__${this.id}-container">
          <div>
            <input type="radio" id="year_2014" name="year__${this.id}" value="2014" checked />
            <label for="year_2014">2014</label>
          </div>
          <div>
            <input type="radio" id="year_2015" name="year__${this.id}" value="2015" />
            <label for="year_2015">2015</label>
          </div>
          <div>
            <input type="radio" id="year_2016" name="year__${this.id}" value="2016" />
            <label for="year_2016">2016</label>
          </div>
          <div>
            <input type="radio" id="year_2017" name="year__${this.id}" value="2017" />
            <label for="year_2017">2017</label>
          </div>
          <div>
            <input type="radio" id="year_2018" name="year__${this.id}" value="2018" />
            <label for="year_2018">2018</label>
          </div>
          <div>
            <input type="radio" id="year_2019" name="year__${this.id}" value="2019" />
            <label for="year_2019">2019</label>
          </div>
          <div>
            <input type="radio" id="year_2020" name="year__${this.id}" value="2020" />
            <label for="year_2020">2020</label>
          </div>
        </div>
      </fieldset>
    `;

    this.container.querySelector(`fieldset#wind-farm-filter__${this.id}`)
      .addEventListener('change', (ev) => {
        this.handleWindFarmChange(ev);
        this.changeFacilities();
        this.changeYears();
      });
    this.container.querySelector(`fieldset#facility-filter__${this.id}`)
      .addEventListener('change', (ev) => {
        this.handleFacilityChange(ev);
        this.changeYears();
      });
    this.container.querySelector(`fieldset#year-filter__${this.id}`)
      .addEventListener('change', (ev) => {
        this.handleYearChange(ev);
      });
  }

}

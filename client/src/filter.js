class Filter {

  /**
   * @param {string} root id of the root element
   * @param {boolean} includeMonths
   */
  constructor(root, includeMonths) {
    this.wind_farm = 'a';
    this.facility = 1;
    this.year = 2014;
    this.month = 9;
    this.container = document.getElementById(root);
    this.id = root;
    /**
     * @type {boolean}
     */
    this.includeMonths = includeMonths;
    /**
     * @type {{
     *  [key: string]: {
     *    facilities: number[];
     *    months: {
     *      [facility: number]: {
     *        default: number[];
    *         [year: number]: number[];
     *      };
     *    };
     *    years: {
     *      default: number[];
     *      [facility: number]: number[];
     *    };
     *  }
     * }}
     */
    this.windFarms = {
      a: {
        facilities: [ 1, 2, 3, 4, 5, 6, 7, 8],
        months: {
          1: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          2: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          3: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          4: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          5: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          6: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          7: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          },
          8: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2014: [ 9, 10, 11, 12],
            2020: [ 1, 2 ]
          }
        },
        years: {
          default: [ 2014, 2015, 2016, 2017, 2018, 2019, 2020 ]
        }
      },
      b: {
        facilities: [ 1, 2, 3, 4 ],
        months: {
          1: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          2: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          3: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          4: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          }
        },
        years: {
          default: [ 2014, 2015, 2016, 2017, 2018, 2019, 2020 ]
        }
      },
      c: {
        facilities: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
        months: {
          1: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2011: [ 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          2: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2011: [ 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          3: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 12 ],
            2020: [ 1, 2 ]
          },
          4: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          5: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2013: [ 12 ],
            2020: [ 1, 2 ]
          },
          6: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 12 ],
            2020: [ 1, 2 ]
          },
          7: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 12 ],
            2020: [ 1, 2 ]
          },
          8: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 12 ],
            2020: [ 1, 2 ]
          },
          9: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2010: [ 12 ],
            2020: [ 1, 2 ]
          },
          10: {
            2019: [ 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          11: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2017: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          12: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2017: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          }
        },
        years: {
          default: [ 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          1: [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          2: [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          4: [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          5: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          10: [ 2019, 2020 ],
          11: [ 2017, 2018, 2019, 2020 ],
          12: [ 2017, 2018, 2019, 2020 ]
        }
      },
      d: {
        facilities: [ 1, 2, 3, 4 ],
        months: {
          1: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2011: [ 12 ],
            2020: [ 1, 2 ]
          },
          2: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2011: [ 12 ],
            2020: [ 1, 2 ]
          },
          3: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2011: [ 12 ],
            2020: [ 1, 2 ]
          },
          "4": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          }
        },
        years: {
          default: [ 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          4: [ 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ]
        }
      },
      e: {
        facilities: [ 3, 6, 7, 10, 11, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38 ],
        months: {
          10: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 12 ],
            2020: [ 1, 2 ]
          },
          11: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          12: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          15: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 12 ],
            2020: [ 1, 2 ]
          },
          16: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          17: {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "18": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "19": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "20": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "21": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "22": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "23": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "24": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "3": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 11, 12 ],
            2020: [ 1, 2 ]
          },
          "6": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 11, 12 ],
            2020: [ 1, 2 ]
          },
          "7": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "25": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "26": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "27": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "28": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "29": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "30": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "31": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "32": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "33": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "34": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "35": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "36": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2012: [ 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "37": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          },
          "38": {
            default: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
            2020: [ 1, 2 ]
          }
        },
        years: {
          default: [ 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          16: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          20: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          21: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          22: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          23: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          24: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          28: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          29: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          32: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          33: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          34: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ],
          38: [ 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ]
        }
      }
    };
    this.monthMapping = {
      1: 'Januar',
      2: 'Februar',
      3: 'März',
      4: 'April',
      5: 'Mai',
      6: 'Juni',
      7: 'Juli',
      8: 'August',
      9: 'September',
      10: 'Oktober',
      11: 'November',
      12: 'Dezember',
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

  handleMonthChange(ev) {
    this.month = Number(ev.target.value);
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

  changeMonths() {
    let months = this.windFarms[this.wind_farm].months[this.facility].default;

    if (Object.hasOwn(this.windFarms[this.wind_farm].months[this.facility], this.year)) {
      months = this.windFarms[this.wind_farm].months[this.facility][this.year];
    }

    this.container.querySelector(`div#month-filter__${this.id}-container`)
      .innerHTML = months.map((month, index) => {
        return `
          <div>
            <input type="radio" id="month_${month}" name="month__${this.id}" value="${month}" ${index === 0 ? 'checked' : ''} />
            <label for="month_${month}">${this.monthMapping[month]}</label>
          </div>
        `;
      }).join('');

    this.month = months[0];
  }

  render() {
    this.container.innerHTML = `
      <fieldset id="wind-farm-filter__${this.id}" style="flex: ${this.includeMonths ? 25 : 33}%;">
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
      <fieldset id="facility-filter__${this.id}" style="flex: ${this.includeMonths ? 25 : 33}%;">
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
      <fieldset id="year-filter__${this.id}" style="flex: ${this.includeMonths ? 25 : 33}%;">
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
      ${
        this.includeMonths ? (
          `
            <fieldset id="month-filter__${this.id}" style="flex: 25%;">
              <legend>Monat auswählen</legend>
              <div id="month-filter__${this.id}-container">
                <div>
                  <input type="radio" id="month_9" name="month__${this.id}" value="9" checked />
                  <label for="month_9">September</label>
                </div>
                <div>
                  <input type="radio" id="month_10" name="month__${this.id}" value="10" />
                  <label for="month_10">Oktober</label>
                </div>
                <div>
                  <input type="radio" id="month_11" name="month__${this.id}" value="11" />
                  <label for="month_11">November</label>
                </div>
                <div>
                  <input type="radio" id="month_12" name="month__${this.id}" value="12" />
                  <label for="month_12">Dezember</label>
                </div>
              </div>
            </fieldset>
          `
        ) : ''
      }
    `;

    this.container.querySelector(`fieldset#wind-farm-filter__${this.id}`)
      .addEventListener('change', (ev) => {
        this.handleWindFarmChange(ev);
        this.changeFacilities();
        this.changeYears();
        if (this.includeMonths) {
          this.changeMonths();
        }
      });
    this.container.querySelector(`fieldset#facility-filter__${this.id}`)
      .addEventListener('change', (ev) => {
        this.handleFacilityChange(ev);
        this.changeYears();
        if (this.includeMonths) {
          this.changeMonths();
        }
      });
    this.container.querySelector(`fieldset#year-filter__${this.id}`)
      .addEventListener('change', (ev) => {
        this.handleYearChange(ev);
        if (this.includeMonths) {
          this.changeMonths();
        }
      });

    if (this.includeMonths) {
      this.container.querySelector(`fieldset#month-filter__${this.id}`)
        .addEventListener('change', (ev) => {
          this.handleMonthChange(ev);
        });
    }
  }

}

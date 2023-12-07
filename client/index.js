var client = new HttpClient();
var errorFrequencyDiagramContainer = document.getElementById('image-container-1');
var monthlyErrorFrequencyDiagramContainer = document.getElementById('image-container-2');
var correlationDiagramContainer = document.getElementById('image-container-3');
var errorFrequencyFilter = new Filter('filter-container-1', false);
var monthlyErrorFrequencyFilter = new Filter('filter-container-2', true);
var correlationFilter = new Filter('filter-container-3');

function loadCorrelationDiagram() {
  var loader = new Loader('loader-container', 'loader-overlay');

  client.getCorrelationDiagram(correlationFilter.wind_farm, correlationFilter.facility, correlationFilter.year)
    .then((diagram) => {
      const img = new Base64Image(diagram, 'Test');
      loader.destroy();
      correlationDiagramContainer.innerHTML = '';
      correlationDiagramContainer.appendChild(img);
    })
    .catch((err) => {
      console.log(err);
      loader.destroy();
    });
}

/**
 * @param {boolean} includeMonth
 */
function loadErrorFrequencyDiagram(includeMonth) {
  var loader = new Loader('loader-container', 'loader-overlay');

  client.getErrorFrequencyDiagram({
    windFarm: includeMonth ? monthlyErrorFrequencyFilter.wind_farm : errorFrequencyFilter.wind_farm,
    facility: includeMonth ? monthlyErrorFrequencyFilter.facility : errorFrequencyFilter.facility,
    year: includeMonth ? monthlyErrorFrequencyFilter.year : errorFrequencyFilter.year,
    month: includeMonth ? monthlyErrorFrequencyFilter.month : null
  }).then(({ image: diagram, okayCount }) => {
      const img = new Base64Image(diagram, 'Test');
      const okay = document.createElement('p');
      okay.innerHTML = `Die Fehlernummer 0 ist ${okayCount} mal aufgetreten.<br />Diese wurde aber aus dem Diagramm entfernt, da 0 für "System Ok" steht.`;
      okay.style.fontSize = '1.7rem';
      okay.style.margin = '32px 0 0';
      loader.destroy();
      if (!includeMonth) {
        errorFrequencyDiagramContainer.innerHTML = '';
        errorFrequencyDiagramContainer.append(okay, img);
      } else {
        monthlyErrorFrequencyDiagramContainer.innerHTML = '';
        monthlyErrorFrequencyDiagramContainer.append(okay, img);
      }
    })
    .catch((err) => {
      console.log(err);
      loader.destroy();
    });
}

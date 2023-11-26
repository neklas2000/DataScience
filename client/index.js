var client = new HttpClient();
var errorFrequencyDiagramContainer = document.getElementById('image-container-1');
var correlationDiagramContainer = document.getElementById('image-container-2');
var errorFrequencyFilter = new Filter('filter-container-1');
var correlationFilter = new Filter('filter-container-2');

function toggleTab(ev, tabId) {
  var i, tabContents, tabLinks;
  tabContents = document.getElementsByClassName('tab-content');

  for (i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  tabLinks = document.getElementsByClassName('tablink');

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].parentElement.className = tabLinks[i].parentElement.className.replace(' active', '');
  }

  document.getElementById(tabId).style.display = 'block';
  ev.currentTarget.parentElement.className += ' active';
}

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

function loadErrorFrequencyDiagram() {
  var loader = new Loader('loader-container', 'loader-overlay');

  client.getErrorFrequencyDiagram(errorFrequencyFilter.wind_farm, errorFrequencyFilter.facility, errorFrequencyFilter.year)
    .then((diagram) => {
      const img = new Base64Image(diagram, 'Test');
      loader.destroy();
      errorFrequencyDiagramContainer.innerHTML = '';
      errorFrequencyDiagramContainer.appendChild(img);
    })
    .catch((err) => {
      console.log(err);
      loader.destroy();
    });
}

document.getElementById('default-open').click();

class MatTab extends HTMLElement {
  static observedAttributes = ["opened", "label"];

  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .tab {
          display: flex;
          flex-direction: column;
        }

        .tab.active .active-bar {
          height: 2px;
          background-color: var(--primary);
        }

        .tab button {
          background-color: inherit;
          float: left;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 16px 16px;
          transition: background-color 0.3s ease;
          font-size: 17px;
        }

        .tab button:hover {
          background-color: rgba(0, 105, 174, 0.06);
        }

        .tab.active button {
          color: var(--primary);
        }
      </style>
      <div class="tab" id="tab-container">
        <button class="tablink" id="tab-button">
          Fehlernummern (jährlich)
        </button>
        <div class="active-bar"></div>
      </div>
    `;

    this.document = this.attachShadow({ mode: 'open' });
    this.document.appendChild(template.content.cloneNode(true));
    this.opened = false;
    this.label = '';
    /**
     * @type {{[key: string]: Array<(tab: MatTab) => void>}}
     */
    this.listeners = {};
  }

  connectedCallback() {
    if (!this.hasAttribute('slot')) {
      this.setAttribute('slot', 'tab');
    }

    const button = this.document.getElementById('tab-button');
    button.innerText = this.label;
    button.addEventListener('click', () => {
      this.activate();
    });

    if (this.opened) {
      button.click();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'opened') {
      this.opened = JSON.parse(newValue);
    } else if (name === 'label') {
      this.label = newValue;
    }
  }

  deactivate() {
    const tabContainer = this.document.getElementById('tab-container');
    tabContainer.setAttribute('class', 'tab');
  }

  activate() {
    const tabContainer = this.document.getElementById('tab-container');
    tabContainer.setAttribute('class', 'tab active');

    setTimeout(() => {
      for (const fn of (this.listeners['toggled'] || [])) {
        fn(this);
      }
    });
  }

  /**
   * @param {'toggled'} channel
   * @param {(tab: MatTab) => void} callback
   */
  on(channel, callback) {
    const callbacks = this.listeners[channel] || [];
    callbacks.push(callback);
    this.listeners[channel] = callbacks;
  }

}

window.customElements.define('mat-tab', MatTab);

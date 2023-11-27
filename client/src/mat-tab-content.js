class MatTabContent extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .tab-content {
          display: none;
          padding: 8px 16px;
        }
      </style>
      <div class="tab-content" id="tab-content">
        <slot></slot>
      </div>
    `;

    this.document = this.attachShadow({ mode: 'open' });
    this.document.appendChild(template.content.cloneNode(true));
    this.opened = false;
    this.label = '';
    /**
     * @type {{[key: string]: Array<() => void>}}
     */
    this.listeners = {};
  }

  connectedCallback() {
    if (!this.hasAttribute('slot')) {
      this.setAttribute('slot', 'tab-content');
    }
  }

  deactivate() {
    const tabContentContainer = this.document.getElementById('tab-content');
    tabContentContainer.style.display = 'none';
  }

  activate() {
    const tabContentContainer = this.document.getElementById('tab-content');
    tabContentContainer.style.display = 'block';
  }

}

window.customElements.define('mat-tab-content', MatTabContent);

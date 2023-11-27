class MatTabs extends HTMLElement {

  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .tabs {
          overflow: hidden;
          display: flex;
        }
      </style>
      <div>
        <div class="tabs">
          <slot name="tab" id="tabs-container"></slot>
        </div>
        <slot id="tabs-content-container" name="tab-content"></slot>
      </div>
    `;

    this.document = this.attachShadow({ mode: 'open' });
    this.document.appendChild(template.content.cloneNode(true));
    /**
     * @type {MatTab[]}
     */
    this.tabs = [];
    /**
     * @type {MatTabContent[]}
     */
    this.tabsContent = [];
  }

  connectedCallback() {
    /**
     * @type {HTMLSlotElement}
     */
    const tabsContainer = this.document.getElementById('tabs-container');
    /**
     * @type {HTMLSlotElement}
     */
    const tabsContentContainer = this.document.getElementById('tabs-content-container');

    setTimeout(() => {
      let tabId = 0;
      let tabContentId = 0;
      tabsContainer.assignedNodes().forEach(
        /**
         * @param {MatTab} node
         */
        (node) => {
          tabId++;
          node.setAttribute('id', `tab-${tabId}`);

          node.on('toggled', (tab) => {
            for (const otherTab of this.tabs) {
              if (otherTab.id !== tab.id) {
                otherTab.deactivate();
              }
            }

            const idParts = tab.getAttribute('id').split('-');
            idParts.splice(1, 0, 'content');
            const tabContentId = idParts.join('-');

            for (const tabContent of this.tabsContent) {
              if (tabContent.id === tabContentId) {
                tabContent.activate();
              } else {
                tabContent.deactivate();
              }
            }
          });

          this.tabs.push(node);
        }
      );

      tabsContentContainer.assignedNodes().forEach(
        /**
         * @param {MatTabContent} node
         */
        (node) => {
          tabContentId++;
          node.setAttribute('id', `tab-content-${tabContentId}`);

          this.tabsContent.push(node);
        }
      );
    });
  }

  disconnectedCallback() {
    console.log('disconnected');
  }

}

window.customElements.define('mat-tabs', MatTabs);

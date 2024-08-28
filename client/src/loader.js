class Loader {

  /**
   * @param {string} root id of the root element
   * @param {string} overlay id of the overlay element
   */
  constructor(root, overlay) {
    this.container = document.getElementById(root);
    this.overlay = document.getElementById(overlay);
    this.overlay.style.display = 'block';
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <style>
        .turbine {
          display: grid;
          justify-items: center;
          align-items: center;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(1, 1fr);
          height: 100%;
          width: 100%;
        }

        .pole,.pilot {
          grid-row:1;
          grid-column: 1;
        }

        .pole {
          position: relative;
          display: block;
          background: linear-gradient(90deg, rgba(97,97,101,1) 0%, rgba(255,255,255,1) 100%);
          height: 100px;
          width: 10px;
          border-radius: 5px 5px 0 0;
          z-index: 0;
          margin-top: 160px;
        }

        .pilot {
          position: relative;
          z-index: 1;
        }

        .pilot:after {
          content: '';
          display: block;
          position: absolute;
          top: 46px;
          left: 0px;
          z-index: 1;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          box-sizing: border-box;
        }

        .pilot:after, .pilot .prop {
          background: linear-gradient(90deg, rgba(97,97,101,1) 0%, rgba(255,255,255,1) 100%);
        }

        .pilot .prop-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          align-items: center;
          justify-items: center;
          animation: propeller 1.5s infinite linear;
          transform-origin: 7px 53px;
        }

        .pilot .prop {
          height: 50px;
          width: 14px;
          border-radius: 50%;
          grid-column: 1;
          grid-row:1;
          transform-origin: 50% 50%;
        }

        .prop:first-child {
          transform: rotate(360deg) translate(0px) rotate(-360deg);
        }

        .prop:nth-child(2) {
          transform: rotateZ(120deg) rotate(120deg) translate(-50px) rotate(-120deg);
        }

        .prop:last-child {
          transform: rotateZ(240deg) rotate(240deg) translate(50px) rotate(-240deg);
        }

        @keyframes propeller {
          to {
            transform: rotateZ(360deg);
          }
        }

        .loading-label {
          position: absolute;
          margin-top: 300px;
          color: #fefefe;
          font-size: 1.6rem;
        }
      </style>
      <div style="height: inherit;">
        <div class="turbine">
          <div class="pilot">
            <div class="prop-container">
              <div class="prop"></div>
              <div class="prop"></div>
              <div class="prop"></div>
            </div>
          </div>
          <div class="pole"></div>
          <div class="loading-label">
            <span>Loading ...</span>
          </div>
        </div>
      </div>
    `;
  }

  destroy() {
    this.container.innerHTML = '';
    this.overlay.style.display = 'none';
  }

}

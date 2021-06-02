import {LitElement, html, css} from 'lit';

export class ChallengeChart extends LitElement {
  static get properties() {
    return {
      /**
       * The chart currently being displayed.
       */
      currentChart: {type: String},
    };
  }

  constructor() {
    super();
    this.currentChart = '';
  }

  render() {
    return html`
      <div class="chart-container">
        A chart will go here.
      </div>
    `;
  }
}

window.customElements.define('lit-chart', ChallengeChart)

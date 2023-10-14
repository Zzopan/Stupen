class PlayerList extends HTMLElement {
    constructor() {
      super();
      // Inisialisasi data pemain (bisa disesuaikan sesuai kebutuhan)
      this.players = [];
    }
  
    static get observedAttributes() {
      return ['players'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'players' && oldValue !== newValue) {
        this.players = JSON.parse(newValue);
        this.render();
      }
    }
  
    render() {
      this.innerHTML = `
        <div class="player-list">
          <h3>List of Players</h3>
          <ul>
            ${this.players.map(player => `<li>${player.name} - ${player.club}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  
    get players() {
      return JSON.parse(this.getAttribute('players')) || [];
    }
  
    set players(value) {
      this.setAttribute('players', JSON.stringify(value));
    }
  }
  
  customElements.define('player-list', PlayerList);
  
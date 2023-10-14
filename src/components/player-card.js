class PlayerCard extends HTMLElement {
    constructor() {
      super();
      // Inisialisasi properti pemain (bisa disesuaikan sesuai kebutuhan)
      this.playerName = '';
      this.playerPosition = '';
      this.playerClub = '';
    }
  
    static get observedAttributes() {
      return ['player-name', 'player-position', 'player-club'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this[name] = newValue;
        this.render();
      }
    }
  
    render() {
      this.innerHTML = `
        <div class="player-card">
          <h2>${this.playerName}</h2>
          <p>Position: ${this.playerPosition}</p>
          <p>Club: ${this.playerClub}</p>
        </div>
      `;
    }
  
    get playerName() {
      return this.getAttribute('player-name') || '';
    }
  
    set playerName(value) {
      this.setAttribute('player-name', value);
    }
  
    get playerPosition() {
      return this.getAttribute('player-position') || '';
    }
  
    set playerPosition(value) {
      this.setAttribute('player-position', value);
    }
  
    get playerClub() {
      return this.getAttribute('player-club') || '';
    }
  
    set playerClub(value) {
      this.setAttribute('player-club', value);
    }
  }
  
  customElements.define('player-card', PlayerCard);
  
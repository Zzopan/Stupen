// search-bar.js
class SearchBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div class="search-bar">
          <input type="text" id="search-input" placeholder="Search player">
          <button id="search-button">Search</button>
        </div>
      `;
  
      this.querySelector('#search-button').addEventListener('click', this.searchPlayer.bind(this));
    }
  
    async searchPlayer() {
      const searchInput = this.querySelector('#search-input').value;
      //const apiKey = 'a7f622147e8f43df9b83347355ef609a'; 
      const apiUrl = `http://fm-api-heroku.herokuapp.com/api/v2/players/${searchInput}`;
  
      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          
          mode:'no-cors'
        });
  
        if (!response.ok) {
          throw new Error('Permintaan gagal: ' + response.statusText);
        }
  
        const data = await response.json();
  
        // Lanjutkan dengan menampilkan hasil pencarian (data) atau mengirimnya ke komponen PlayerList
       
      } catch (error) {
        console.error('Error:', error);
        // Tampilkan pesan kesalahan ke pengguna jika terjadi masalah
      }
    }
  
    displaySearchResults(data) {
      // Di sini Anda dapat mengambil data hasil pencarian dan menampilkannya dalam komponen PlayerList
      // Misalnya, dengan mengirim data ke PlayerList menggunakan event atau memperbarui DOM langsung
    }
  }
  
  customElements.define('search-bar', SearchBar);
  
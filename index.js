fetch('https://raw.githubusercontent.com/AwokenYT/nostalking/master/static/assets/JSON/games.json')
  .then(response => response.json())
  .then(data => {
    const games = data;
    console.log('Fetched games data:', games);

    // Function to get query parameters from the URL
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Handle user input and filter the JSON data
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    searchButton.addEventListener('click', () => {
      const searchQuery = searchInput.value.toLowerCase();
      console.log('Search query:', searchQuery);

      const filteredGames = games.filter(game =>
        game.name.toLowerCase().includes(searchQuery) ||
        game.id.includes(searchQuery)
      );
      console.log('Filtered games:', filteredGames);

      // Display the search results
      searchResults.innerHTML = '';
      filteredGames.forEach(game => {
        const img = document.createElement('img');
        const gameInfoDiv = document.createElement('div');
        const gameDetailsDiv = document.createElement('div');
        const fixedSrc = `https://awokenyt.github.io/gamestorage/${game.image.replace('/cdn/', '')}`;
        
        img.src = fixedSrc;
        gameInfoDiv.textContent = `${game.name} (Game ID: ${game.id})`;
        gameDetailsDiv.appendChild(img);
        gameDetailsDiv.appendChild(gameInfoDiv);
        searchResults.appendChild(gameDetailsDiv);
      });
    });

    // Handle game display based on URL parameter
    const gameId = getQueryParam('id');
    if (gameId) {
      const game = games.find(g => g.id === gameId);
      if (game) {
        const fixedSrc = `https://awokenyt.github.io/gamestorage/${game.target.replace('/cdn/', '')}`;
        window.location.href = fixedSrc
      } else {
        searchResults.innerHTML = '<p>Game not found.</p>';
      }
    }
  })
  .catch(error => console.error('Error fetching games data:', error));

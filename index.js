fetch('https://raw.githubusercontent.com/AwokenYT/nostalking.lol/master/static/assets/JSON/games.json')
  .then(response => response.json())
  .then(data => {
    const games = data;
    console.log('Fetched games data:', games);

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
        const div = document.createElement('div');
        const fixedsrc = `https://awokenyt.github.io/gamestorage/${game.image.replace('/cdn/', '')}`
        img.src = fixedsrc;fetch('https://raw.githubusercontent.com/AwokenYT/nostalking.lol/master/static/assets/JSON/games.json')
          .then(response => response.json())
          .then(data => {
            const games = data;
            console.log('Fetched games data:', games);
        
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
                const img = document.createElement('img');fetch('https://raw.githubusercontent.com/AwokenYT/nostalking.lol/master/static/assets/JSON/games.json')
                  .then(response => response.json())
                  .then(data => {
                    const games = data;
                    console.log('Fetched games data:', games);
                
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
                        const baseURL = 'https://cdn.nostalking.lol';
                        const gameImageURL = `${baseURL}/gameID=${game.id}`;
                        img.src = gameImageURL;
                        gameInfoDiv.textContent = `${game.name} (Game ID: ${game.id})`;
                        gameDetailsDiv.appendChild(img);
                        gameDetailsDiv.appendChild(gameInfoDiv);
                        searchResults.appendChild(gameDetailsDiv);
                      });
                    });
                  });
                const gameInfoDiv = document.createElement('div');
                const gameDetailsDiv = document.createElement('div');
                const fixedsrc = `https://awokenyt.github.io/gamestorage/${game.image.replace('/cdn/', '')}`;
                img.src = fixedsrc;
                gameInfoDiv.textContent = `${game.name} (Game ID: ${game.id})`;
                gameDetailsDiv.appendChild(img);
                gameDetailsDiv.appendChild(gameInfoDiv);
                searchResults.appendChild(gameDetailsDiv);
              });
            });
          });
        div.textContent = `${game.name} (Game ID: ${game.id})`;
        div.appendChild(img);
        searchResults.appendChild(div);
      });
    });
  });
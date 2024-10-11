fetch("./games.json")
  .then((response) => response.json())
  .then((data) => {
    const games = data;
    console.log("Fetched games data:", games);

    // Function to get query parameters from the URL
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Handle user input and filter the JSON data
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const searchResults = document.getElementById("searchResults");

    searchButton.addEventListener("click", () => {
      const searchQuery = searchInput.value.toLowerCase();
      console.log("Search query:", searchQuery);

      const filteredGames = games.filter(
        (game) =>
          game.name.toLowerCase().includes(searchQuery) ||
          game.id.includes(searchQuery)
      );
      console.log("Filtered games:", filteredGames);

      // Display the search results
      searchResults.innerHTML = "";
      filteredGames.forEach((game) => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        const img = document.createElement("img");
        const gameInfoDiv = document.createElement("div");
        const gameButton = document.createElement("a");

        const fixedSrc = `https://awokenyt.github.io/gamestorage/${game.image.replace(
          "/cdn/",
          ""
        )}`;

        // Create a new Image object to test if the image loads correctly
        const testImage = new Image();
        testImage.src = fixedSrc;

        // Set a handler for the image loading error
        testImage.onerror = () => {
          // Fallback to the default image
          img.src = "https://static.thenounproject.com/png/482114-200.png"; // Fallback image
        };

        // Set a handler for successful image load
        testImage.onload = () => {
          // If the image loads successfully, set it as the src for the actual img element
          img.src = fixedSrc;
        };

        // Set alt, dimensions, and classes for the img element
        img.alt = game.name;
        img.width = 200;  // Enforce image width
        img.height = 200; // Enforce image height
        img.classList.add("game-img");

        // Set game info and button
        gameInfoDiv.textContent = `${game.name} (Game ID: ${game.id})`;

        gameButton.href = `https://awokenyt.github.io/gamestorage/index.html?id=${game.id}`;
        gameButton.textContent = "Play";
        gameButton.classList.add("game-button");

        // Append elements to the card
        gameCard.appendChild(img);
        gameCard.appendChild(gameInfoDiv);
        gameCard.appendChild(gameButton);
        searchResults.appendChild(gameCard);
      });
    });

    // Handle game display based on URL parameter
    const gameId = getQueryParam("id");
    if (gameId) {
      const game = games.find((g) => g.id === gameId);
      if (game) {
        const fixedSrc = `https://awokenyt.github.io/gamestorage/${game.target.replace(
          "/cdn/",
          ""
        )}`;
        window.location.href = fixedSrc;
      } else {
        searchResults.innerHTML = "<p>Game not found.</p>";
      }
    }
  })
  .catch((error) => console.error("Error fetching games data:", error));

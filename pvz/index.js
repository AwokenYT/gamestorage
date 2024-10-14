window.RufflePlayer = window.RufflePlayer || {};

window.addEventListener("load", (event) => {
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  const container = document.getElementById("ruffle-player");
  container.appendChild(player);

  player.style.width = "100%";
  player.style.height = "100%";

  player.config = {
    autoplay: "on",
    unmuteOverlay: "hidden",
    letterbox: "off",
    fullscreen: true,
    backgroundColor: "#000000",
  };

  player.load("./plants-vs-zombies.swf");

  // Ensure fullscreen on window resize
  window.addEventListener("resize", () => {
    player.style.width = "100%";
    player.style.height = "100%";
  });
});

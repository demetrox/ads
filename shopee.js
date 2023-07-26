var lastExecutionTime = localStorage.getItem("lastExecutionTime");
var currentTime = new Date().getTime();

if (lastExecutionTime && currentTime - lastExecutionTime < 3600000) {
  console.log("Script has already run in the past hour.");
} else {
  var links = [
    "https://zass.to/btf8e",
    "https://zass.to/6mmg6",
    "https://zass.to/o1yvc",
    "https://zass.to/si14x",
    "https://zass.to/ws3j0"
  ];

  var randomIndex = Math.floor(Math.random() * links.length);

  setTimeout(function () {
    window.location = links[randomIndex];
  }, 15000);

  localStorage.setItem("lastExecutionTime", currentTime.toString());
}

var lastExecutionTime = localStorage.getItem("lastExecutionTime");
var currentTime = new Date().getTime();

if (lastExecutionTime && currentTime - lastExecutionTime < 3600000) {
  console.log("Script has already run in the past hour.");
} else {
  var links = [
    "https://zass.to/vh2qk",
    "https://zass.to/npten",
    "https://zass.to/w1urj",
    "https://zass.to/yxq68",
    "https://zass.to/jimzs"
  ];

  var randomIndex = Math.floor(Math.random() * links.length);

  setTimeout(function () {
    window.location = links[randomIndex];
  }, 15000);

  localStorage.setItem("lastExecutionTime", currentTime.toString());
}

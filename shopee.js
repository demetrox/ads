var lastExecutionTime = localStorage.getItem("lastExecutionTime");
var currentTime = new Date().getTime();

if (lastExecutionTime && currentTime - lastExecutionTime < 3600000) {
  console.log("Script has already run in the past hour.");
} else {
  var links = [
    "https://c.lazada.com.my/t/c.cGkaD1",
    "https://c.lazada.com.my/t/c.cGkaD2",
    "https://c.lazada.com.my/t/c.cGkaDd",
    "https://c.lazada.com.my/t/c.cGkaD3",
    "https://c.lazada.com.my/t/c.cGkaDg"
  ];

  var randomIndex = Math.floor(Math.random() * links.length);

  setTimeout(function () {
    window.location = links[randomIndex];
  }, 15000);

  localStorage.setItem("lastExecutionTime", currentTime.toString());
}

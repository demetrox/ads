var lastExecutionTime = localStorage.getItem("lastExecutionTime");
var currentTime = new Date().getTime();

if (lastExecutionTime && currentTime - lastExecutionTime < 3600000) {
  console.log("Script has already run in the past hour.");
} else {
  var links = [
    "https://c.lazada.com.my/t/c.cGkb8w",
    "https://c.lazada.com.my/t/c.cGkb8B",
    "https://c.lazada.com.my/t/c.cGkb8z",
    "https://c.lazada.com.my/t/c.cGkb8A",
    "https://c.lazada.com.my/t/c.cGkbja"
  ];

  var randomIndex = Math.floor(Math.random() * links.length);

  setTimeout(function () {
    window.location = links[randomIndex];
  }, 15000);

  localStorage.setItem("lastExecutionTime", currentTime.toString());
}

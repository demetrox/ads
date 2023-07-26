<style type="text/css">
  .iframe-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: 0;
    height: 100%;
    min-width: 100%;
    width: 10px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
  }
</style>

<script>
var lastExecutionTime = localStorage.getItem("lastExecutionTime");
var currentTime = new Date().getTime();

if (lastExecutionTime && currentTime - lastExecutionTime < 3600000) {
  // Script has already run within the past hour, exit the script
  console.log("Script has already run in the past hour.");
} else {
  var links = [
    "https://zass.to/zzn7p",
    "https://zass.to/ms4mr",
    "https://zass.to/se07n",
    "https://zass.to/0xj4s",
    "https://zass.to/j143n"
  ];

  var randomIndex = Math.floor(Math.random() * links.length);

  setTimeout(function () {
    window.location = links[randomIndex];
  }, 15000);

  // Store the current time in the local storage
  localStorage.setItem("lastExecutionTime", currentTime.toString());
}
</script>

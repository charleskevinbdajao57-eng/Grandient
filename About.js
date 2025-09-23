 window.addEventListener("load", function () {
            const loader = document.getElementById("loader");
            loader.style.display = "none";
        });

        const banner = document.getElementById("offline-banner");

  function updateNetworkStatus() {
    if (navigator.onLine) {
      banner.classList.remove("show");
    } else {
      banner.classList.add("show");
    }
  }

  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  // Run on initial load
  updateNetworkStatus();
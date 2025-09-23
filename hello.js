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


    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let x = 0;
    let speed = 2;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // clear
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(x, 100, 20, 0, Math.PI * 2); // red circle
      ctx.fill();

      x += speed;
      if (x > canvas.width || x < 0) {
        speed *= -1;
      }

      requestAnimationFrame(draw); // animate
    }

    draw();


  
function searchPage() {
    const keyword = document.getElementById("search-input").value.toLowerCase();
    const bodyText = document.body.innerText.toLowerCase();

    if (keyword === "") {
      alert("Please enter a search keyword.");
      return;
    }

    if (bodyText.includes(keyword)) {
      document.getElementById("search-result").innerText = `✅ Found: "${keyword}" on this page.`;
    } else {
      document.getElementById("search-result").innerText = `❌ No result found for: "${keyword}".`;
    }
  }
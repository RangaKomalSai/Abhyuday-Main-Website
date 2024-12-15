function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
    const btn = document.getElementById("read-more-btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerText = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerText = "Read Less";
      moreText.style.display = "inline";
    }
  }
  
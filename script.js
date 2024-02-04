document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const paper = document.getElementById("paper");
  let clickCount = 0;

  envelope.addEventListener("click", function () {
    clickCount++;

    if (clickCount < 3) {
      enlargeEnvelope();
    } else if (clickCount === 3) {
      openEnvelope();
    }
  });

  function enlargeEnvelope() {
    envelope.style.width = `${parseInt(envelope.style.width || 700) + 60}px`;
    envelope.style.height = `${parseInt(envelope.style.height || 350) + 60}px`;
  }

  function openEnvelope() {
    paper.style.opacity = 1;
    paper.innerHTML = "<div class='content'></div>";
    setLargePaper();
  }

  function setLargePaper() {
    const content = document.querySelector(".content");
    content.style.width = "400px"; // Adjust as needed
    content.style.height = "300px"; // Adjust as needed
  }
});

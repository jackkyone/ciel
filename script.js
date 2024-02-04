document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const paper = document.getElementById("paper");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  let clickCount = 0;

  envelope.addEventListener("click", function () {
    clickCount++;

    if (clickCount % 2 !== 0) {
      enlargeEnvelope();
      openEnvelope();
    } else {
      closeEnvelope();
    }
  });

  function enlargeEnvelope() {
    envelope.style.width = `${parseInt(envelope.style.width || 700) + 50}px`;
    envelope.style.height = `${parseInt(envelope.style.height || 400) + 50}px`;
  }

  function openEnvelope() {
    paper.style.opacity = 1;
    paper.innerHTML = "<div class='content'></div>";
    setLargePaper();
  }

  function closeEnvelope() {
    envelope.style.width = "700px";
    envelope.style.height = "400px";
    paper.style.opacity = 0;
  }

  function setLargePaper() {
    const content = document.querySelector(".content");
    content.style.width = "400px"; // Adjust as needed
    content.style.height = "300px"; // Adjust as needed
  }
});

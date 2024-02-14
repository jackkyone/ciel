document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  const paper = document.getElementById("paper");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const audio = document.querySelector("audio");
  let clickCount = 0;

  envelope.addEventListener("click", function () {
    clickCount++;

    if (clickCount % 2 !== 0) {
      enlargeEnvelope();
      openEnvelope();
      // Start playing the audio
      audio.play();
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
    paper.innerHTML = "<div class='content'><img src='pic/letter.png'></div>";
    setLargePaper();
  }

  function closeEnvelope() {
    envelope.style.width = "700px";
    envelope.style.height = "400px";
    paper.style.opacity = 0;
    // Pause the audio when closing the envelope
    audio.pause();
  }

  function setLargePaper() {
    const content = document.querySelector(".content");
    content.style.width = "100%";
    content.style.height = "100%";
  }
});

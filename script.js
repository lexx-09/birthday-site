function showMessage() {
  const messageBox = document.getElementById("hiddenMessage");

  if (messageBox) {
    messageBox.innerText =
      "Just so you know, you mean so much to me Jisil Mi. Looking forward sa imong debut 😜";
  }
}

/* 🎵 MUSIC FIX (CLICKABLE TOGGLE BUTTON) */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play()
        .then(() => {
          musicBtn.innerText = "Pause Music ⏸️";
        })
        .catch((err) => {
          console.log("Music blocked until interaction:", err);
        });
    } else {
      music.pause();
      musicBtn.innerText = "Play Music 🎵";
    }
  });
}
const sounds = ["applause", "boo", "oh-yeah", "victory", "love-u-mommy"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;
  document.getElementById("buttons").appendChild(btn);
  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });
});

function stopSound() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}

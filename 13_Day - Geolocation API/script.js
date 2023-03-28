const btn = document.querySelector(".btn");
const longitude = document.querySelector(".longitude");
const latitude = document.querySelector(".latitude");

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPostion);
  generateColor();
});

function showPostion(position) {
  latitude.innerHTML = "latitude  : " + position.coords.latitude;
  longitude.innerHTML = "longitude: " + position.coords.longitude;
}

const generateColor = () => {
  const color = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + color;
  hex.innerHTML = "#" + color;
};

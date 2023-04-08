const btn = document.querySelector(".btn");
const suburb = document.querySelector(".suburb");
const city = document.querySelector(".city");
const pincode = document.querySelector(".pincode");
const state = document.querySelector(".state");
const country = document.querySelector(".country");
const map = document.querySelector(".map");

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPostion);
  generateColor();
});

function showPostion(position) {
  // latitude.innerHTML = "latitude  : " + position.coords.latitude;
  // longitude1.innerHTML = "longitude: " + position.coords.longitude;
  getLocation(position);
  map.innerHTML =
    '<iframe width="700" height="300" src="https://maps.google.com/maps?q=' +
    position.coords.latitude +
    "," +
    position.coords.longitude +
    '&amp;z=15&amp;output=embed"></iframe>';
}

const generateColor = () => {
  const color = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + color;
  // hex.innerHTML = "#" + color;
};

function getLocation(position) {
  let { latitude, longitude } = position.coords;
  let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  fetch(url)
    .then((res) => res.json())
    .then(async (data) => {
      console.table(data.address);
      suburb.innerHTML = "Area: " + (await data.address.suburb);
      city.innerHTML = "City: " + (await data.address.city);
      pincode.innerHTML = "Pincode: " + (await data.address.postcode);
      state.innerHTML = "State: " + (await data.address.state);
      country.innerHTML = "Country: " + (await data.address.country);
    })
    .catch((error) => {
      return error;
    });
}

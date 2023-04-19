const currentDate = document.querySelector(".current-date");
let daysTag = document.querySelector(".days");
let prevNextIcon = document.querySelectorAll(".icons i");
let showCard = document.querySelector(".card");
let title = document.querySelector(".title");
let date = new Date();
let currMonth = date.getMonth();
let currentYear = date.getFullYear();

let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  let firstDayOfMonth = new Date(currentYear, currMonth, 1).getDay(); //getting first day of month
  let lastDateOfLastMonth = new Date(currentYear, currMonth, 0).getDate(); //getting last date of month
  let lastDateOfMonth = new Date(currentYear, currMonth + 1, 0).getDate(); //getting last date of last month
  let lastDayOfMonth = new Date(
    currentYear,
    currMonth,
    lastDateOfMonth
  ).getDay(); //getting last day of month
  let liTag = "";
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";

    let isBday = "";
    Object.keys(localStorage).forEach(function (key) {
      isBday +=
        i === JSON.parse(localStorage.getItem(key)).day &&
        currMonth === JSON.parse(localStorage.getItem(key)).month &&
        currentYear === JSON.parse(localStorage.getItem(key)).year
          ? "b-day"
          : "";
    });

    liTag += `<li class="${isToday} ${isBday}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach((icon) =>
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currentYear, currMonth);
      currMonth = date.getMonth();
      currentYear = date.getFullYear();
    }
    renderCalendar();
  })
);

let li = document.querySelectorAll(".days li");
li.forEach((day) =>
  day.addEventListener("click", () => {
    if (day.classList.contains("b-day")) {
      Object.keys(localStorage).forEach((key) => {
        if (JSON.parse(localStorage.getItem(key)).day == day.textContent) {
          console.log("key");
          showCard.style.display = "block";
          title.innerText = `Birthday: ${key}`;
        }
      });
    } else {
      let name = prompt("Please enter your name");
      let obj = {
        day: parseInt(day.textContent),
        month: currMonth,
        year: currentYear,
      };
      if (name !== null) {
        localStorage.setItem(name, JSON.stringify(obj));
        renderCalendar();
      }
    }
  })
);

let nama = localStorage.getItem("nama");
let judul = document.querySelector("h1");

if (!nama) {
  nama = prompt("input your name : ");
  judul.innerHTML = `hai ${nama}`;
  localStorage.setItem("nama", nama);
}

const asma = document.querySelector(".asma");
asma.addEventListener("click", function () {
  nama = prompt("input your new name");
  judul.innerHTML = `hello ${nama}`;
  localStorage.setItem("nama", nama);
});

//membuat toogle dark mode
const tombol = document.querySelector(".tombol");
//menyimpan storage default yaitu light mode
let mode = localStorage.getItem("mode");

if (!mode) {
  localStorage.setItem("mode", "light");
} else if (mode === "dark") {
  document.body.classList.add("dark-mode");
  tombol.innerHTML = "change light mode";
  localStorage.setItem("mode", "dark");
}

const darkMode = () => {
  document.body.classList.add("dark-mode");
  tombol.innerHTML = "change light mode";
  localStorage.setItem("mode", "dark");
};
const lightMode = () => {
  document.body.classList.remove("dark-mode");
  tombol.innerHTML = "change dark mode";
  localStorage.setItem("mode", "light");
};

tombol.addEventListener("click", function (element) {
  mode = localStorage.getItem("mode");
  if (mode === "light") {
    darkMode();
  } else {
    lightMode();
  }
  element.preventDefault();
});

//clear data user

const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  localStorage.clear();
});

//panggil element tombol
//tombol add event listener
//jika storage default / light mode makan bisa buat fungsi dark mode
//jika storage sudah dark maka buat fungsi light mode

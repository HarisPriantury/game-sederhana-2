//tangkap tombol
const tUbahWarna = document.getElementById("tUbahWarna");
//tangkap element yang dieksekusi
const body = document.getElementsByTagName("body")[0];

tUbahWarna.onclick = function () {
  // body.setAttribute("class", "biru-muda");
  body.classList.toggle("biru-muda");
};

//membuat element button
const tAcakWarna = document.createElement("button");
//membuat isi text node dan memasukan ke element button
const textAcakWarna = document.createTextNode("ubah warna acak");
tAcakWarna.appendChild(textAcakWarna);
tAcakWarna.setAttribute("type", "button");
//seleksi element yang dipakai untuk after

//masukan
tUbahWarna.after(tAcakWarna);
//buat addeventlistener

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const slideRed = document.querySelector("input[name=slideRed]");
slideRed.addEventListener("input", function () {
  const r = slideRed.value;
  const g = slideGreen.value;
  const b = slideBlue.value;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const slideGreen = document.querySelector("input[name=slideGreen]");
slideGreen.addEventListener("input", function () {
  const r = slideRed.value;
  const g = slideGreen.value;
  const b = slideBlue.value;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const slideBlue = document.querySelector("input[name=slideBlue]");
slideBlue.addEventListener("input", function () {
  const r = slideRed.value;
  const g = slideGreen.value;
  const b = slideBlue.value;
  console.log(r);
  console.log(g);
  console.log(b);
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

//latihan dengane mousemove

body.addEventListener("mousemove", function (event) {
  const positionX = Math.round((event.clientX / window.innerWidth) * 255);
  const positionY = Math.round((event.clientY / window.innerHeight) * 255);
  console.log(positionY);
  body.style.backgroundColor = `rgb(${positionX},${positionY},125)`;
});

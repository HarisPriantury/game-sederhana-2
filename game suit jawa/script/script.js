//kasih event
//kasih pilihan komputer

let scorePlayer = 0;
let scoreMusuh = 0;

function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp <= 0.66) return "orang";

  return "semut";
}
// aturan
function getHasil(player, comp) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "gajah" ? "KALAH" : "MENANG";
  if (player == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
}

//membuat function putar
//ambil gambar computer const
//membuat set interval dalamnya function ,100

function putar() {
  const imgComputer = document.querySelector(".area-computer img");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll(".bulat");
pilihan.forEach(function (x) {
  x.addEventListener("click", function () {
    putar();
    setTimeout(function () {
      const pilihanComputer = getPilihanComputer();
      const pilihanPlayer = x.id;

      const imgComputer = document.querySelector(".area-computer img");
      imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

      const hasil = getHasil(pilihanPlayer, pilihanComputer);

      const info = document.querySelector(".info");
      info.innerHTML = `selamat kamu ${hasil} hehe`;

      const totalPlayer = document.querySelector(".scorePlayer");
      const totalMusuh = document.querySelector(".scoreMusuh");

      // const hasil = getHasil(pilihanPlayer, pilihanComputer);
      // alert(hasil);
      if (hasil == "MENANG") {
        scorePlayer += 1;
      } else if (hasil == "KALAH") {
        scoreMusuh += 1;
      }

      totalPlayer.innerHTML = `${scorePlayer}`;
      totalMusuh.innerHTML = `${scoreMusuh}`;

      if (scorePlayer >= 3) {
        alert("selamat kamu menang");
        scoreMusuh = 0;
        scoreMusuh = 0;
      } else if (scoreMusuh >= 3) {
        alert("selamat kamu kalah hehe tetap semangat");
        scoreMusuh = 0;
        scoreMusuh = 0;
      }

      // membuat tombol reset
      const reset = document.querySelector("#reset");
      reset.addEventListener("click", function () {
        scoreMusuh = 0;
        scorePlayer = 0;
        totalPlayer.innerHTML = `${scorePlayer}`;
        totalMusuh.innerHTML = `${scoreMusuh}`;
      });

      // scoreWrite();
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = "gajah";
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);

//   const info = document.querySelector(".info");
//   info.innerHTML = `selamat kamu ${hasil} hehe`;

//   const imgComputer = document.querySelector(".area-computer img");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);
// });

// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = "orang";
//   const hasil = getHasil(pilihanPlayer, pilihanComputer);

//   const info = document.querySelector(".info");
//   info.innerHTML = `selamat kamu ${hasil} hehe`;

//   const imgComputer = document.querySelector(".area-computer img");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);
// });

// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanPlayer = "semut";
//   const pilihanComputer = getPilihanComputer();

//   const imgComputer = document.querySelector(".area-computer img");
//   imgComputer.setAttribute("src", `img/${pilihanComputer}.png`);

//   const hasil = getHasil(pilihanPlayer, pilihanComputer);

//   const info = document.querySelector(".info");
//   info.innerHTML = `Selemat kamu ${hasil} hehe`;
// });

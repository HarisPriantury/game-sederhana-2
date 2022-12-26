//seleksi container
const container = document.querySelector(".container");
const imageUtama = document.querySelector(".image-utama");
const thumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if (e.target.classList == "thumb") {
    // thumbs.forEach(function (thumb) {
    //   if (thumb.classList.contains("active")) {
    //     thumb.classList.remove("active");
    //   }
    // });
    // bisa diganti dengan seperti ini

    thumbs.forEach((thumb) => {
      thumb.className = "thumb";
    });

    imageUtama.src = e.target.src;
    imageUtama.classList.add("fade");

    setTimeout(function () {
      imageUtama.classList.remove("fade");
    }, 1000);
    e.target.classList.add("active");
  }
});

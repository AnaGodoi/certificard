function mudaTema() {
  document.body.classList.toggle("dark");
}

document.querySelectorAll(".projetos-item").forEach((item) =>
  item.addEventListener("click", function (e) {
    item.querySelector(".codepen-container").classList.toggle("open");
  })
);
document.getElementById("gilaki").addEventListener("click", () => {
    document.getElementsByClassName("body")[0].classList.remove("tetri");
    document.getElementsByClassName("body")[0].classList.add("shavi");
  });

document.getElementById("gilaki2").addEventListener("click", () => {
    document.getElementsByClassName("body")[0].classList.remove("shavi");
    document.getElementsByClassName("body")[0].classList.add("tetri");
  });
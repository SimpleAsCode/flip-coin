const btn = document.querySelector(".btn");
const coin = document.querySelector(".coin");

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

btn.addEventListener("click", () => {
  const multiplier = rand(5, 100);
  const angle = multiplier * 180;
  coin.style.transform = "rotateY(" + angle + "deg)";
  setTimeout(() => {
    if (multiplier % 2 === 0) {
      alert("reszka");
    } else {
      alert("orzeł");
    }
  }, 1000);
});

// 1*180 = orzeł
// 2*180 = reszka
// 3*180 = orzeł
// 4*180 = reszka
// ...

// 5-10 5 6 7 8 9 10

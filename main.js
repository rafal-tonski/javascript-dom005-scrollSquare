let square = document.querySelector("div");

let size = 10;

let grow = true;

window.addEventListener("scroll", () => {
  if (grow) {
    size += 5;
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
  } else {
    size -= 5;
    square.style.height = `${size}px`;
    square.style.width = `${size}px`;
  }

  if (size >= window.innerHeight / 2) {
    grow = !grow;
  } else if (size <= 0) {
    grow = !grow;
  }
});

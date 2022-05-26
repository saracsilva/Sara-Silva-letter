function hello() {
  let name = prompt("what is your name?");
  let h1 = document.querySelector("h1");
  if (name === `` || name === null) {
    h1.innerHTML = `Hello, You!`;
  } else {
    h1.innerHTML = `Hello, ${name}!`;
  }
}

let animationArea = document.querySelector(".animation");
let animationObject = bodymovin.loadAnimation({
  container: animationArea,
  renderer: "svg",
  loop: true,
  autoplay: true,
  autoloadSegments: false,
  path: "media/data.json",
});

hello();

var body = document.querySelector("body");
body.style.cssText = "margin: 0; font-family: Poppins, sans-serif; background-color: #f3e7d3; transition: all 0.15s ease-in-out;";

var main = document.createElement("main");
main.style.cssText = "padding: 1rem 4rem; display: flex; overflow: hidden; flex-direction: column; transition: all 0.15s ease-in-out; justify-content: center; align-items: center;";
body.appendChild(main);

var heading = document.createElement("h1");
heading.textContent = "Light Bulb"
heading.style.cssText = "text-decoration-line: underline; text-decoration-style: wavy; cursor: pointer; color: #121212; font-size: 4rem; text-align: center; transition: all 0.15s ease-in-out; ";
main.appendChild(heading);

// bulb

on = "https://i.postimg.cc/VNqpqwwM/on.png";

var bulb = document.createElement("img");
bulb.style.filter = "grayscale(0%)"
bulb.style.cssText = "height: 25rem; cursor: pointer;"
bulb.alt = "bulb image ";
bulb.src = on;

bulb.addEventListener("click", function() {
  if(bulb.style.filter === "grayscale(100%)") {
    bulb.style.filter = "grayscale(0%)";
    body.style.background = "#f3e7d3";
    heading.style.color = "#121212";
    heading.addEventListener("mouseover", () => {
      heading.style.color = "#b5916e";
    })
    heading.addEventListener("mouseout", () => {
      heading.style.color = "#121212";
    })
  }
  else {
    bulb.style.filter = "grayscale(100%)";
    body.style.background = "#121212";
    heading.style.color = "#e2e2e2";
    heading.addEventListener("mouseover", () => {
      heading.style.color = "#b5916e";
    })
    heading.addEventListener("mouseout", () => {
      heading.style.color = "#e2e2e2";
    })
  }
});

main.appendChild(bulb);

if( window.innerWidth < 700) {
  heading.style.fontSize = "2.5rem";
}
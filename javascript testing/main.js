var body = document.querySelector("body");
body.style.cssText = "margin: 0; font-family: Poppins, sans-serif; background-color: #121212;";

var main = document.createElement("main");
main.style.cssText = "padding: 1rem 4rem; display: flex; overflow: hidden; flex-direction: column; justify-content: center; align-items: center;";
body.appendChild(main);

var heading = document.createElement("h1");
heading.textContent = "Light Bulb"
heading.style.cssText = "color: beige; font-size: 4rem; text-align: center; transition: all 0.15s ease-in-out; ";
heading.addEventListener("mouseover", () => {
  heading.style.color = "#F4CA56";
})
heading.addEventListener("mouseout", () => {
  heading.style.color = "beige";
})
main.appendChild(heading);

// bulb

var body = document.querySelector("body");
body.style.cssText = "margin: 0; font-family: Poppins, sans-serif; background-color: #f3e7d3; transition: all 0.15s ease-in-out;";

var main = document.createElement("main");
main.style.cssText = "padding: 1rem 4rem; display: flex; overflow: hidden; flex-direction: column; transition: all 0.15s ease-in-out; justify-content: center; align-items: center;";
body.appendChild(main);

var heading = document.createElement("h1");
heading.textContent = "Light Bulb"
heading.style.cssText = "text-decoration-line: underline; text-decoration-style: wavy; pointer-event: none; color: #121212; font-size: 4rem; text-align: center; transition: all 0.15s ease-in-out; z-index: 999;";
heading.addEventListener("mouseover", () => {
  heading.style.color = "#b5916e";
})
heading.addEventListener("mouseout", () => {
  heading.style.color = "#121212";
})
main.appendChild(heading);

// Typography
var backgroundContainer = document.createElement("div");
backgroundContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; display: flex; justify-content: center; align-item: center;';
main.appendChild(backgroundContainer);

var backgroundText = "LIGHT";

var span = document.createElement("h1");
span.textContent = backgroundText;
span.style.cssText = `width: 100%; height: 100%; font-size: 20rem; font-weight: 900; text-align: center; pointer-event: none; color: #f7eee0; position: absolute; margin: 0; top: 17%; left: 0; z-index: -1; overflow: hidden; transform: rotate(-7deg); text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`;
backgroundContainer.appendChild(span);

document.addEventListener('mousemove', function(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  var headingRect = span.getBoundingClientRect();
  var headingCenterX = headingRect.left + headingRect.width / 2;
  var headingCenterY = headingRect.top + headingRect.height / 2;

  var distanceX = mouseX - headingCenterX;
  var distanceY = mouseY - headingCenterY;

  var maxDistance = 15;
  var offsetX = (distanceX / window.innerWidth) * maxDistance;
  var offsetY = (distanceY / window.innerHeight) * maxDistance;

  var rotation = -7; 
  var radian = rotation * (Math.PI / 180); 
  var cos = Math.cos(radian);
  var sin = Math.sin(radian);
  var translatedX = cos * offsetX - sin * offsetY;
  var translatedY = sin * offsetX + cos * offsetY;

  span.style.transform = `translate(${translatedX}px, ${translatedY}px) rotate(${rotation}deg)`;
});


// bulb
const on = "https://i.postimg.cc/VNqpqwwM/on.png";

var bulb = document.createElement("img");
bulb.style.filter = "grayscale(0%)"
bulb.style.cssText = "height: 25rem; pointer-event: none; position: absolute; top: 25%;"
bulb.alt = "bulb image ";
bulb.src = on;

bulb.addEventListener("click", function() {
  if(bulb.style.filter === "grayscale(100%)") {
    bulb.style.filter = "grayscale(0%)";
    body.style.background = "#f3e7d3";
    heading.style.color = "#121212";
    span.textContent = "LIGHT";
    span.style.color = "#f7eee0";
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
    span.textContent = "DARK";
    span.style.color = "#C0C0C0";
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
  backgroundContainer.style.cssText = "display: none";
}
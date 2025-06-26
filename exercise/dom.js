const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "border: solid black; background-color: pink");
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div too!";
div.appendChild(h1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divP);
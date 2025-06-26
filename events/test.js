// method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert('Hello World!');


// // method 3
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => alert("Hello World!"))

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    e.target.style.background = "blue";

})
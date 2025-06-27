// method 2
// const btn = document.querySelector("#btn");
// btn.onclick = () => alert('Hello World!');


// // method 3
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => alert("Hello World!"))

// e event
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//     console.log(e);
//     console.log(e.target);
//     e.target.style.background = "blue";

// })

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
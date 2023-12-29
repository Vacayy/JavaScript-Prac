const menu_title = document.getElementById("title");
menu_title.textContent = 'Thank you!';

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    window.alert("Button clicked!");
});
//your JS code here. If required.
//your JS code here. If required.
let form = document.querySelector("form");
let userInput = document.getElementById("username");
let passwordinput = document.getElementById("password");
let remember = document.getElementById("checkbox");
let existing = document.getElementById("existing");

let savedUser = localStorage.getItem("user");

if (savedUser) {
    existing.style.display = "block";
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    let username = userInput.value;
    let password = passwordinput.value;
    if (username.trim() === "" || password.trim() === "") {
        alert("Please provide the username and password.");
        return;
    }
    if (remember.checked) {
        let user = {
            username,
            password,
        }

        localStorage.setItem("user", JSON.stringify(user));
        alert(`Logged in as ${username}`)
    } else {
        localStorage.removeItem("user");
        existing.style.display = "none"
    }
})

existing.addEventListener("click", () => {
    let savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
        alert(`Logged in as ${savedUser.username}`)
    }
})
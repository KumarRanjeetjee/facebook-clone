
var settingsMenuToggle = document.querySelector(".setings-menu")
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle() {
settingsMenu.classList.toggle("setings-menu-height")
}


darkBtn.onclick = function () {
darkBtn.classList.toggle("dark-btn-on");
document.body.classlist.toggle("dark-theme")


if (localStorage.getItem("theme") == "light") {
localStorage.setItem("theme", "dark");
}
else {
localStorage.setItem("theme", "light");
}

}






if (localStorage.getItem("theme") == "light") {
darkBtn.classList.remove("dark-btn-on");
document.body.classlist.remove("dark-theme");
}
else if (localStorage.getItem("theme") == "dark") {
darkBtn.classList.add("dark-btn-on");
document.body.classlist.add("dark-theme");
}

else {
localStorage.setItem("theme", "light");

}

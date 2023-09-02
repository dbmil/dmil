var titles = ["NEW WEBSITE"];
var dates = ["9/2/23"];
var articles = ["The Dingabadonga Military launches their new website. This new website has a better design and includes all of the same features from the original website. Site security and user accessibility has also been improved."];
var article = 0;
function right() {
article += 1;
if (article === articles.length) {
article = 0;
}
document.getElementById("title").textContent = titles[article];
document.getElementById("date").textContent = dates[article];
document.getElementById("text").textContent = articles[article];
}
function left() {
article -= 1;
if (article < 0) {
article = articles.length - 1;
}
document.getElementById("title").textContent = titles[article];
document.getElementById("date").textContent = dates[article];
document.getElementById("text").textContent = articles[article];
}
document.getElementById("title").textContent = titles[article];
document.getElementById("date").textContent = dates[article];
document.getElementById("text").textContent = articles[article];
document.addEventListener("click", e => {
if (e.target.className === "button" || e.target.textContent === "close") {
document.getElementById("menu").style.right = "-100%";
}
})
function openMenu() {
document.getElementById("menu").style.right = 0;
}
function changeHash(hash) {
location.hash = "";
location.hash = hash;
}

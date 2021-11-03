const h2 = document.createElement("h2");
h2.textContent = "Starter's Guide";

document.querySelector("body header#header").appendChild(h2);

document.getElementById("button").addEventListener('click', showMoreText)

function showMoreText() {
    document.getElementById("showMore").style.display = "block";
}



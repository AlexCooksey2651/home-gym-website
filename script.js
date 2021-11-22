const h2 = document.createElement("h2");
h2.textContent = "Starter's Guide";

document.querySelector("body header#header").appendChild(h2);

// const button = document.getElementById("button");


function toggleText() {
    const buttonText = document.getElementById("button");
    const showMore = document.getElementById("showMore")
    
    if (buttonText.innerHTML === "Show More") {
        showMore.style.display = "block";
        buttonText.innerHTML = "Show Less";
    } 
    else if (buttonText.innerHTML === "Show Less") {
        showMore.style.display = "none";
        buttonText.innerHTML = "Show More";
    }
 }

// button.addEventListener('click', toggleText)


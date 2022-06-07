let exos = document.querySelectorAll(".exo")

// Exo1
let exo1 = document.getElementById("exo1")
let titre = document.querySelector("h2")
titre.innerText = "le titre modifié"
titre.style.color = "red"
titre.style.backgroundColor = "#007BFF"
titre.classList.add("bg-success")

// Exo2
let exo2 = document.getElementById("exo2")
// Active
exos.forEach(element => {
    element.addEventListener("click", ()=> {
        let x = document.querySelector(".active")
        x.setAttribute("class","")
        element.classList.add("active")
    })
});

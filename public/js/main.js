// Menu nav
let nav = document.querySelector(".nav")
let navItem = document.querySelectorAll(".nav-item")
let exo1 = document.getElementById("exo1")
let exo2 = document.getElementById("exo2")
let exo3 = document.getElementById("exo3")
let exo4 = document.getElementById("exo4")
let exo5 = document.getElementById("exo5")
let exo6 = document.getElementById("exo6")

// Contenus
let contenu = document.querySelectorAll("div")
let div1 = document.querySelector(".div1")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")
let div5 = document.querySelector(".div5")
let div6 = document.querySelector(".div6")


// Exo1
if (exo1.classList.contains("active")) {
    // Changement titre h2
    let titre = document.querySelector("h2")
    titre.innerText = "le titre modifié"
    titre.style.color = "red"
    titre.style.backgroundColor = "#007BFF"
    titre.classList.add("bg-success")
}

// Exo2: Active + Display
navItem.forEach((element, index) => {
    element.addEventListener("click", () => {
        // La couleur de la nav change à chaque clic
        let x = document.querySelector(".active")
        x.setAttribute("class", "nav-item")
        element.classList.add("active")
        // Display none pour tous les contenus
        contenu.forEach(d => {
            d.style.display = "none"
        })
        // Affichage de l'exercice selectionné
        if (element.classList.contains("active")) {
            contenu[index].style.display = "block"
        }
    })
})
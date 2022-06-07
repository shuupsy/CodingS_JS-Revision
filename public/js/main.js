// Menu nav
let nav = document.querySelector(".nav")
let navItem = document.querySelectorAll(".nav-item")

// Contenus
let contenu = document.querySelectorAll("div")

// Exo1
let exo1 = document.getElementById("exo1")
if (exo1.classList.contains("active")) {
    // Changement titre h2
    let titre = document.querySelector("h2")
    titre.innerText = "le titre modifié"
    titre.style.color = "red"
    titre.style.backgroundColor = "#007BFF"
    titre.classList.add("bg-success")
}

// Exo2: Active + Display
// navItem.forEach((element, index) => {
//     element.addEventListener("click", () => {
//         // Réinitialisation
//         let x = document.querySelector(".active")
//         x.setAttribute("class", "nav-item")
//         // La navItem cliquée reprend les propriétés "active" du CSS
//         element.classList.add("active")
//         // Display none pour tous les contenus
//         contenu.forEach(d => {
//             d.style.display = "none"
//         })
//         // Affichage de l'exercice selectionné
//         if (element.classList.contains("active")) {
//             contenu[index].style.display = "block"
//         }
//     })
// })

// Exo3
let input = document.querySelector("input")
let btn = document.querySelector("button")
let nom = document.querySelector("span")

function Exo3() {
    if (input.value == "") {
        nom.innerText = "Inconnu"
        input.value = ""
    } else {
        nom.innerText = input.value
        input.value = ""
    }
}
// Clic sur le bouton
btn.addEventListener("click", Exo3)
// Touche enter via input
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        Exo3()
    }
})
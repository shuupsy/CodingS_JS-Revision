// Menu nav
let nav = document.querySelector(".nav")
let navItem = document.querySelectorAll(".nav-item")

// Contenu de départ
let contenu = document.querySelectorAll(".exo")
// contenu.forEach(d => {
//     d.style.display = "none"
// })
// contenu[0].style.display = "block"

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
//         contenu.forEach(d => {
//             // Display none pour tous les contenus
//             d.style.display = "none"
//             // Affichage de l'exercice selectionné
//             if (element.classList.contains("active")) {
//                 contenu[index].style.display = "block"
//             }
//         })
//     })
// })

// Exo3 : formulaire
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


// Exo4 : déplacement carré rouge
let btn4 = document.querySelectorAll("button")[1]
let dispClick = document.querySelectorAll("span")[1]
let click = 0

let rectangle1 = document.querySelector(".rectangle1")
let rectangle2 = document.querySelector(".rectangle2")
let rouge1 = rectangle1.childNodes[1]
let rouge2 = rectangle2.childNodes[1]

// Clic clic
btn4.addEventListener("click", () => {
    if (rouge1.classList.contains("red")) {
        rouge2.classList.add("red")
        rouge1.classList.remove("red")
    } else if (rouge2.classList.contains("red")) {
        rouge1.classList.add("red")
        rouge2.classList.remove("red")
    }
    // Nombre de clicks
    click += 1;
    dispClick.innerHTML = click;
})


// Exo5 : oeufs
let btn5 = document.querySelectorAll("button")[3]
let boite = document.querySelector(".boite")

btn5.addEventListener("click", () => {
    let oeuf = document.createElement("img")
    oeuf.setAttribute("src", "public/img/oeuf.png")
    oeuf.setAttribute("alt", "oeuf cartoon")
    boite.appendChild(oeuf)
})

// Exo6 : Calculatrice
// Niveau1
let x = document.querySelectorAll(".calc")[0]
let y = document.querySelectorAll(".calc")[1]
let equal = document.querySelectorAll(".equal")[0]
let rep1 = document.getElementById("response")

equal.addEventListener("click", calc1)
y.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        calc1()
    }
})
function calc1() {
    rep1.innerText = +(x.value) + +(y.value)
}

// Niveau2

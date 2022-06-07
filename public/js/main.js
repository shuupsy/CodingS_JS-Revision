let exos = document.querySelectorAll(".exo")

// Exo1
let exo1 = document.getElementById("exo1")
let exo1Contenu = document.getElementsByClassName("exo1")

if (exo1.classList.contains("active")){
    // Changement titre h2
    let titre = document.querySelector("h2")
    titre.innerText = "le titre modifié"
    titre.style.color = "red"
    titre.style.backgroundColor = "#007BFF"
    titre.classList.add("bg-success")
}

// Display 
let exoContenu = document.querySelectorAll("div")
console.log(exoContenu)

// Exo2
// Active
exos.forEach(element => {
    element.addEventListener("click", ()=> {
        let x = document.querySelector(".active")
        x.setAttribute("class","exo")
        element.classList.add("active")
    })
});

let exo2 = document.getElementById("exo2")


// exoContenu.forEach(d => {
//     d.style.display = "none"
//     if (d.classList.contains("on")) {
//         d.style.display = "block"
//         console.log(d)
//     }
// })
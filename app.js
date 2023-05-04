const buttonFooter = document.getElementById("abu-content-movil-1")
const buttonFooter2 = document.getElementById("abu-content-movil-2")
const buttonFooter3 = document.getElementById("abu-content-movil-3")
const buttonFooter4 = document.getElementById("abu-content-movil-4")
const buttonFooter5 = document.getElementById("abu-content-movil-5")
const buttonFooter6 = document.getElementById("abu-content-movil-6")
const buttonFooter7 = document.getElementById("abu-content-movil-7")
const buttonFooter8 = document.getElementById("abu-content-movil-8")

const buttonContainer = document.getElementById("abu-button-movile-1")
const buttonContainer2 = document.getElementById("abu-button-movile-2")
const buttonContainer3 = document.getElementById("abu-button-movile-3")
const buttonContainer4 = document.getElementById("abu-button-movile-4")
const buttonContainer5 = document.getElementById("abu-button-movile-5")
const buttonContainer6 = document.getElementById("abu-button-movile-6")
const buttonContainer7 = document.getElementById("abu-button-movile-7")
const buttonContainer8 = document.getElementById("abu-button-movile-8")

function EfectoBoton(){
buttonContainer.addEventListener("click", () =>{
    buttonFooter.classList.toggle('efectoBoton')
}),
buttonContainer2.addEventListener("click", () => {
    buttonFooter2.classList.toggle("efectoBoton")
}),
buttonContainer3.addEventListener("click", () => {
    buttonFooter3.classList.toggle("efectoBoton")
}),
buttonContainer4.addEventListener("click", () => {
    buttonFooter4.classList.toggle("efectoBoton")
}),
buttonContainer5.addEventListener("click", () => {
    buttonFooter5.classList.toggle("efectoBoton")
}),
buttonContainer6.addEventListener("click", () => {
    buttonFooter6.classList.toggle("efectoBoton")
}),
buttonContainer7.addEventListener("click", () => {
    buttonFooter7.classList.toggle("efectoBoton")
}),
buttonContainer8.addEventListener("click", () => {
    buttonFooter8.classList.toggle("efectoBoton")
})

}

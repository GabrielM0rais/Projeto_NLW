// create options do map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// pegando dinamicamente os valores da latidude e longitude do span criado
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng


// create map
var map = L.map('mapid', options).setView([lat, lng], 15);

// create and att titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

L.marker([lat, lng], {icon})
    .addTo(map)


/* image gallery */

function selectImage(event){
    const button = event.currentTarget
    
    // console.log(button.children)

    /* procurar em todos os botões a classe .active e remover */
    const buttons = document.querySelectorAll(".images button")

    //buttons.forEach((button) => {button.classList.remove("active")}) 
    // ↑ usando arrow function ao em vez de usar a função escrita por inteiro

    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }

    /* selecionar a imagem clicada */
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    /* atualizar o container com a imagem selecionada */ 
    imageContainer.src = image.src

    /* adicionar a classe .active a esse botão */
    button.classList.add("active")
}

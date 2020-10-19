// create map
var map = L.map('mapid').setView([-5.1840236,-37.3559235], 15);

// create and att titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
let marker;

map.on('click', (event) => {
    // console.log(event)
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon  
    marker && map.removeLayer(marker);

    // adicionadno marker ao mapa
    marker = L.marker([lat, lng], { icon })
            .addTo(map);
})

// add to photo field
function addPhotoField(){
    // pegar container de imagens #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // relizar clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio, se estiver, não adicionar ao container images
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    // limpar o campo antes de adicioanr
    input.value = ""
    // adicionar clone ao container de #images
    container.appendChild(newFieldContainer)
}

// apagando campo de foto
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove();
}

// selecionar entre "Sim" e "Não"
function toggleSelect(event){
    // retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button') 
        .forEach(button => button.classList.remove('active')) 

    // colcoar a class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')
    // console.log(input)

    // verificar sim ou não
    input.value = button.dataset.value
    // console.log(input.value)
}
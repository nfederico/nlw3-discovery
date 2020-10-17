
const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,

}

//get values from HTML 
const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

//Create Map
const map = L.map('mapid',options).setView([lat, lng], 15);

//Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon

const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170,2],

});


//Create markers and add them


L.marker([lat, lng],{icon})
    .addTo(map);
    

// Image Galery

function selectImage(event) {
 const button= event.currentTarget;
 const buttons= document.querySelectorAll(".images button");
 buttons.forEach((button)=>{ button.classList.remove("active")});
 

 //seleccionar imagen clickeada
 const image = button.children[0];
 const imageContainer = document.querySelector(".orphanage-details > img");

 //actualizar el container general con la nueva imagen seleccionada
 imageContainer.src =image.src;

 //agregar la clase active para e boton
 button.classList.add("active");
}
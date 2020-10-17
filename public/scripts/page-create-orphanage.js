//Create Map
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

//Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon

const icon = L.icon({
    iconUrl:"/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170,2],

});


let marker ;
//Create markers and add it
map.on('click',(event)=>{
 const lat = event.latlng.lat;
 const lng = event.latlng.lng;

 document.querySelector('[name=lat]').value = lat;
 document.querySelector('[name=lng]').value = lng;

 //
 marker && map.removeLayer(marker);

 //add icon layer
 marker =L.marker([lat, lng],{icon}).addTo(map);
});

//Photo upload
function addPhotoField () {

    //select the photo cointainer #images

    const container = document.querySelector('#images');

    //select the photo cointainer to duplicate it .new-upload

    const fieldsContainer = document.querySelectorAll('.new-upload');
    //Clone  last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
    
    //verify if the field is empty if it is not to add to the images container
    const input = newFieldContainer.children[0];
    if( input.value == "") {return};

    //clear field before to add it to the images container
    input.value="";

    //Add the clone to the images container 

    container.appendChild(newFieldContainer);


}    

function deleteField(event) {
    const span= event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <2) {
        // clean field
        span.parentNode.children[0].value = "";

        return
        
    };
    //delete the field    
    span.parentNode.remove();
}

//yes or no button logic

function toggleSelect(event){
          
    //From each button remove active class
    //console.log(document.querySelectorAll('.button-select button'));
     document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active') );
   
     //Assign as active th button clicked
    const button = event.currentTarget;
          button.classList.add('active');
          
    const input = document.querySelector('[name="open_on_weekends"]');
    
    
    input.value = button.dataset.value;
    

}


var distance;
var yourMarker;
var adress1 = "Westminster, London SW1A 1AA"
var adress2 = "204 Freedom Trail, Boston, MA 02113"
var address3 = "59 Washington Square S, Manhattan, NY 10012"
var address4 = "1509-1599 N Morgan St, Tampa, FL 33602"
var markers = [];
StopProcess = false;
animating = false;
setupFirst = true;
beginProcess = false;
var usableTerm;
var hardCoded = ["LON", "ATL", "TPA", "LAX", "NYC", "DEN", "BOS"];
var realNames = ["London","Atlanta, GA", "Tampa, FL", "Los Angeles, CA", "New York, NY", "Denver, CO", "Boston, MA"];
/*********Ride items*****************/
var latForRides = 100;
var longForRides = 100;
var rideLatArray = [];
var rideLongArray = [];
beginRides = false;
var rideFactor = 0;
rides = false;
var freeInfo;
var bikeInfoArray = [];
var bikeAddress;
var bikeAddressArray=[];
var useAbleNum = 1;  
/*********hotel items****************/
var key = "lqnTXAQShBz0yPpYXTA6LKoOdtI7tFDy";
var secret = "2eaQeSGY6hS7hpd6"; 
var inputLat = 100;
var inputLng = 100;    
hotelsArrayLat = [100];
hotelsArrayLng = [100];
hotelNameArray = [];
phoneNumbers = [];
hotels= false;
/********************/
food = false;
/********************/
begin = false;
var factor = 0;
rides = false;
food = false;
hotels = false;
var number = 0
var cityValue = document.getElementById("city");
var currentLocal = document.getElementById("current-location");
var submitButton = document.getElementById("submit");
/*active slot*/
console.log(submitButton);
var checkRides = document.getElementById("rides");

var checkHotels = document.getElementById("hotels");
var checkFood = document.getElementById("restaurants");

var active = document.getElementById("holder");
/*********************determine 2 points*********************************/
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    /*console.log(d);*/
    distance = d;
    
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  /******************************************************/
function fetchMeMyAddressLatLang(){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + currentLocal.value + "&key=AIzaSyB4oWBt6y4Uj1PPGR5T66y2gb3oojz0XCo")
    .then(function(response){
        return response.json()
        .then(function(data){
            console.log(data.results[0].geometry.location);
            yourMarker = data.results[0].geometry.location;
        console.log("hello");
    })}).catch(function (err) {

        // Log any errors
        console.log('something went wrong', err);
        
        });
        
        };
        


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
/************************************/
function animate(){ 
  
/********************************rides*/
    if(rides){
        rides = false;
var myVar = setInterval(function(){
    
    var bikes = document.getElementById("bikeId");
    /*bikes.setAttribute("class", "enterInfoAbove has-text-centered");*/
    if(number===0){number === number ++;
    bikes.textContent = 'Finding bikes.';}
    else if (number===1){number === number ++;
        bikes.textContent = 'Finding bikes..';}
    else if(number===2){number === number ++;
            bikes.textContent = 'Finding bikes...';}
            else if(number===3){number === number ++;
                bikes.textContent = 'Finding bikes.....';}
                else if(number===4){
                    bikes.textContent = 'Found bikes in your area.';
                    /*bikes.removeAttribute("class","has-text-centered");*/
                    number = 0;
                    if(StopProcess === false){  
                    animating = false;
                    clearInterval(myVar); 
                    }
                    else(animate());
   
                };
    
    console.log(number)
    },
    1000);
    
/*******************************hotels */
}else if(hotels){
        hotels = false;
        var myVar = setInterval(function(){
            
            var hotels = document.getElementById("hotelId");
            if(number===0){number === number ++;
            hotels.textContent = 'Finding hotels.';}
            else if (number===1){number === number ++;
                hotels.textContent = 'Finding hotels..';}
            else if(number===2){number === number ++;
                    hotels.textContent = 'Finding hotels...';}
                    else if(number===3){number === number ++;
                        hotels.textContent = 'Finding hotels.....';}
                        else if(number===4){
                            hotels.textContent = 'Found hotels in your area.';
                            /*hotels.removeAttribute("class","has-text-centered");*/
                               
                            number = 0;  
                            if(StopProcess === false){  
                                animating = false;
                                clearInterval(myVar); 
                                }
                                else(animate());
                        };
            
            console.log(number)
            },
            1000);
            
           
/*************************food*/
}else if(food){
    food = false;
    var myVar = setInterval(function(){
            
        var foods = document.getElementById("foodId");
        if(number===0){number === number ++;
        foods.textContent = 'Finding food.';}
        else if (number===1){number === number ++;
            foods.textContent = 'Finding food..';}
        else if(number===2){number === number ++;
                foods.textContent = 'Finding food...';}
                else if(number===3){number === number ++;
                    foods.textContent = 'Finding food.....';}
                    else if(number===4){
                        foods.textContent = 'Found food in your area.';
                        /*foods.removeAttribute("class","has-text-centered");*/
                        
                        number = 0;  
                        if(StopProcess === false){  
                            animating = false;
                            clearInterval(myVar); 
                            }
                            else(animate());
                    };
        
        console.log(number)
        },
        1000);
        
}

}
/**********************************/

let mapH;
function initMapH() {
    markers = [];
    
    if(begin){
        if(yourMarker!= null){
            console.log("your Marker Works")
            inputLat = parseFloat(yourMarker.lat);
            inputLng = parseFloat(yourMarker.lng);
            console.log(typeof inputLat);
            mapH = new google.maps.Map(document.getElementById("map"), {
            center: { lat: inputLat, lng: inputLng },
            zoom: 13,
    });
        }
        else{
        inputLat = parseFloat(hotelsArrayLat[factor]);
        inputLng = parseFloat(hotelsArrayLng[factor]);
        console.log(typeof inputLat);
        mapH = new google.maps.Map(document.getElementById("map"), {
        center: { lat: inputLat, lng: inputLng },
        zoom: 13,
    });}}
}
let mapR
/**********************************/
function initMapR() {
    markers = [];
    if(beginRides){
        if(yourMarker != null){
            console.log("your Marker Works")
            inputLat = parseFloat(yourMarker.lat);
            inputLng = parseFloat(yourMarker.lng);
            console.log(inputLat);
            console.log(typeof inputLat);
            mapR= new google.maps.Map(document.getElementById("map"), {
            center: { lat: inputLat, lng: inputLng },
            zoom: 15,
    });
        }
        else{
        latForRides = parseFloat(rideLatArray[rideFactor]);
        longForRides = parseFloat(rideLongArray[rideFactor]);
        /*console.log(typeof latForRides);
        console.log(latForRides);*/
        mapR = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latForRides, lng: longForRides},
        zoom: 15,
    });}}
    console.log("good");
}



/******************************************************* */
/******************************************************* */
function MakeMarkerRides(){
    for(var i = 0; i < rideLatArray.length+1; i ++){
    /*console.log(rideFactor);*/
        if(rideFactor === 0){
            latForRides = parseFloat(yourMarker.lat);
            longForRides = parseFloat(yourMarker.lng);
            /*yourMarker = null;*/
            console.log(yourMarker);
            const focalPoint = {lat: latForRides, lng: longForRides};
            // The map, centered at focalPoint
            var number = rideFactor;
            const marker = new google.maps.Marker({
                
                optimized: false,
                zIndex:99999999,  
            icon: "http://maps.google.com/mapfiles/kml/shapes/man.png",
            label: {color: 'red', fontSize: '30px', fontWeight: '600',
            /*text: hotelNameArray[factor] + number.toString()},*/
            text: "YOU ARE HERE"},
            position: focalPoint,
            map: mapR,
            

        })
        }

        else{
        latForRides = parseFloat(rideLatArray[rideFactor-1]);
        longForRides = parseFloat(rideLongArray[rideFactor-1]);
        /*console.log(factor);*/
        // The location of focalPoint
        const focalPoint = {lat: latForRides, lng: longForRides};
        // The map, centered at focalPoint
        var number = rideFactor;
        const marker = new google.maps.Marker({
        icon: "http://maps.google.com/mapfiles/kml/shapes/cycling.png",
        label: {color: 'white', fontSize: '12px', fontWeight: '600',
        text: number.toString()},
        position: focalPoint,
        map: mapR,
   });
        markers.push(marker);
        
        

}
rideFactor ++;
}

}
/****************************************************/    
    function MakeMarkerHotels(){console.log(hotelsArrayLat.length);
        for(var i = 0; i < hotelsArrayLat.length +1; i ++){
        if(factor===0){
            latForRides = parseFloat(yourMarker.lat);
            longForRides = parseFloat(yourMarker.lng);
            /*yourMarker = null;*/
            const focalPoint = {lat: latForRides, lng: longForRides};
            // The map, centered at focalPoint
            var number = rideFactor;
            const marker = new google.maps.Marker({
                
                optimized: false,
                zIndex:99999999,            
                icon: "http://maps.google.com/mapfiles/kml/shapes/man.png",
            
            label: {color: 'red', fontSize: '30px', fontWeight: '600',
            
            /*text: hotelNameArray[factor] + number.toString()},*/
            text: "YOU ARE HERE"},
            position: focalPoint,
            map: mapH,
            
        })
        
    }
        else{
        
        console.log(factor-1);         
        inputLat = parseFloat(hotelsArrayLat[factor-1]);
        inputLng = parseFloat(hotelsArrayLng[factor-1]);
        /*console.log(factor);*/
        // The location of focalPoint
        const focalPoint = {lat: inputLat, lng: inputLng};
        // The map, centered at focalPoint
        /**at this point its 1 so good to go for text**/
        var number = factor;
        const marker = new google.maps.Marker({
        icon:"http://maps.google.com/mapfiles/kml/shapes/lodging.png",
        label: {color: '#000', fontSize: '12px', fontWeight: '600',
        text:number.toString()},
        /*text: number.toString()},*/
        position: focalPoint,
        map: mapH,
        
    });
        markers.push(marker);
        
        

}       factor ++;
}}
/************************************/

    checkRides.addEventListener("click", function()
    {
        if(StopProcess === false && animating === false){
       markers = [];
    var activeElement = document.querySelector(".is-active-element");
    if(activeElement){
        activeElement.remove();
    console.log(activeElement);
    }else{
        console.log("not found activeElement");
    }
    if(checkFood.hasAttribute("class","is-active")||checkHotels.hasAttribute("class","is-active")){
    checkFood.removeAttribute("class","is-active");
    checkHotels.removeAttribute("class","is-active");
    console.log("found");
    checkRides.setAttribute("class","is-active");
    var divInfo = document.createElement("div");
    divInfo.setAttribute("class","is-active-element listedInfo");
    active.append(divInfo);
    divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>"
    }
    else{console.log("not found");
    }
    if(setupFirst === false){
        StopProcess = true;   
        animating = true;
        /*checkRides.setAttribute("class","is-active");*/

        
        if(beginProcess){
        divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove' id = 'bikeId'>Finding bikes</h3>";
        FindBikes(divInfo);
        rides=true;
        markers = [];
        var maps = document.getElementById("map")
        removeAllChildNodes(maps);
        animate();
        
    }
    else{
        divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";}   
    }}});
    
    /******************************/
 
    
    checkFood.addEventListener("click", function(){
        if(StopProcess === false && animating === false){
            markers = [];
        var activeElement = document.querySelector(".is-active-element");
    if(activeElement){
        activeElement.remove();
    console.log(activeElement);
    }else{
        console.log("not found activeElement");
    }
    if(checkRides.hasAttribute("class","is-active")||checkHotels.hasAttribute("class","is-active")){
    checkRides.removeAttribute("class","is-active");
    checkHotels.removeAttribute("class","is-active");
    console.log("found");
    checkFood.setAttribute("class","is-active");
    var divInfo = document.createElement("div");
    divInfo.setAttribute("class","is-active-element listedInfo");
    active.append(divInfo);
    divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";
    }
    else{console.log("not found");
    }
    if(setupFirst === false){
        StopProcess = true;   
        animating = true;
        /*checkFood.setAttribute("class","is-active");*/

       
        if(beginProcess){
        divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove' id = 'foodId'>Finding food</h3>";
        runFood(divInfo);
        food=true;
        markers = [];
        
        var maps = document.getElementById("map")
        removeAllChildNodes(maps);
        animate();
        }  
        else{
            divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";}   
    }}});

/*********************************/
    checkHotels.addEventListener("click", function(){
        if(StopProcess === false && animating === false){
            markers = [];
    var activeElement = document.querySelector(".is-active-element");
    if(activeElement){
        activeElement.remove();
    console.log(activeElement);
    }else{
        console.log("not found activeElement");
    }
    if(checkFood.hasAttribute("class","is-active")||checkRides.hasAttribute("class","is-active")){
    checkFood.removeAttribute("class","is-active");
    checkRides.removeAttribute("class","is-active");
    console.log("found");
    checkHotels.setAttribute("class","is-active");
    var divInfo = document.createElement("div");
    divInfo.setAttribute("class","is-active-element listedInfo");
    active.append(divInfo);
    divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>"
    }
    else{console.log("not found");
    }
    if(setupFirst === false){
        StopProcess = true;   
        animating = true;
        
        /*checkHotels.setAttribute("class","is-active");*/

        
        if(beginProcess){
        divInfo.innerHTML= "<h3 class='has-text-centered' id = 'hotelId'>Finding hotels</h3>";
        /*divInfo.innerHTML= cityValue.value;*/
        runHotels(divInfo);
        hotels = true;
        markers = [];
        
        var maps = document.getElementById("map")
        removeAllChildNodes(maps);
        animate();
        }  
        else{
            divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";}   
    }}});
/***************************API for food******************************/
function runFood(divInfo){
    
    StopProcess = false;
}
  /********************************************API for hotels**************************************************/
function runHotels(divInfo){
    
    bikeInfoArray = [];
    hotelsArrayLat = [];
    hotelsArrayLng = [];
    hotelNameArray = [];
    phoneNumbers = [];
    rideLatArray = [];
    rideLongArray = [];
    freeInfo = [];
    if(beginProcess){
var city = cityValue.value;

fetch("https://test.api.amadeus.com/v1/security/oauth2/token",         {
           
    method: 'post',
    body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    
    }
     
  }).then(function (resp) {

// Return the response as JSON
return resp.json();

}).then(function (data) {

// Log the API data
console.log('token', data);

// Return a second API call
// This one uses the token we received for authentication
return fetch("https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=" + city + "&roomQuantity=1&adults=2&radius=100&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=NONE", {
  headers: {
    'Authorization': data.token_type + ' ' + data.access_token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

}).then(function (resp) {

// Return the API response as JSON
return resp.json();

}).then(function (data) {

// Log the pet data
console.log('hotels', data);
/*divInfo.innerHTML= "";*/
factor = 0;
for(var i = 0; i < data.data.length; i++){
inputLat = data.data[i].hotel.latitude;
inputLng = data.data[i].hotel.longitude;
hotelName = data.data[i].hotel.name;
hotelName = hotelName.toUpperCase();

if(hotelName!="TEST CONTENT"){
    var hotelPhone;
    if(data.data[i].hotel.contact === null){
        hotelPhone = "Phone number not listed."
        phoneNumbers.push(hotelPhone);
    }
    else if(data.data[i].hotel.contact != null){
hotelPhone = data.data[i].hotel.contact.phone;
/*console.log(hotelPhone);*/
phoneNumbers.push(hotelPhone);
}
else{
    hotelPhone = "Phone number not listed."
}
}
if(i==0){

hotelsArrayLat[0] = inputLat;
hotelsArrayLng[0] = inputLng;
/*console.log(hotelsArrayLat, hotelsArrayLng);*/

hotelNameArray[0]= hotelName;
begin = true;
/*markers = [];*/
initMapH();

}
else{ 
if(hotelName!="TEST CONTENT"){
hotelNameArray.push(hotelName);

hotelsArrayLat.push(inputLat);
hotelsArrayLng.push(inputLng);

}

}


}
MakeMarkerHotels();
/******************adding hotel names**********************************/
/*console.log(hotelNameArray);
console.log(phoneNumbers);*/
for(var i = 0; i < hotelNameArray.length; i++){
var ListOfHotels = document.createElement("h2");
var phoneNum = document.createElement("p");
phoneNum.setAttribute("class", "textEditP")
useAbleNum = i + 1;
ListOfHotels.setAttribute("class", "textEdit");
ListOfHotels.textContent = useAbleNum + ". " + hotelNameArray[i];
phoneNum.textContent = phoneNumbers[i];
divInfo.append(ListOfHotels);
divInfo.append(phoneNum);
}
}).catch(function (err) {

// Log any errors
console.log('something went wrong', err);

});

}
console.log("got here");

StopProcess = false;

};
/*************************Api for bikes******************************/
function FindBikes(divInfo){
    
    bikeInfoArray = []
    hotelsArrayLat = [];
    hotelsArrayLng = [];
    hotelNameArray = [];
    phoneNumbers = [];
    rideLatArray = [];
    rideLongArray = [];
    freeInfo = [];
    console.log(cityValue.value);
    for(var i = 0; i < hardCoded.length; i++){
        if(hardCoded[i]===cityValue.value){
            usableTerm = realNames[i];
            console.log(realNames[i]);
        }
    }
    fetch("http://api.citybik.es/v2/networks")

    .then(function(response){

    return response.json();

    }).then(function(data){

        for(var i = 0; i < data.networks.length; i ++)
        {
            
        if(data.networks[i].location.city === usableTerm)
        {
            console.log(data.networks[i].href);
            var href = data.networks[i].href;
            
            console.log("http://api.citybik.es" + href);
            fetch("http://api.citybik.es" + href).then(function(response){
            return response.json();
            }).then(function(data){
                rideFactor = 0;
                for(var i = 0; i < data.network.stations.length; i++){
                   
                        latForRides = data.network.stations[i].latitude;
                        longForRides = data.network.stations[i].longitude;
                        getDistanceFromLatLonInKm(yourMarker.lat, yourMarker.lng, latForRides,longForRides);
                        
                if(distance<=1){
                if(rideLatArray.length === 0 && rideLongArray.length === 0){
                    rideLatArray[0]=latForRides;
                    rideLongArray[0]=longForRides;
                    bikeAddressArray[0] = data.network.stations[i].extra.name;
                    bikeInfoArray[0] = data.network.stations[i].free_bikes;
                    beginRides = true;
                    initMapR();
                    } 
                    else{rideLatArray.push(latForRides);
                    rideLongArray.push(longForRides);
                     var address = (data.network.stations[i].extra.name);
                     console.log(address);
                   
                    var info = data.network.stations[i].free_bikes;
                    
                    console.log(info);
                   

                    var bikesAdress = document.createElement("h2");
                    bikesAdress.setAttribute("class", "textEdit");
                    bikesAdress.textContent = useAbleNum + ". " + address;
                    divInfo.append(bikesAdress); 

                    var bikeInfoForFreeBikes = document.createElement("p");
                    bikeInfoForFreeBikes.setAttribute("class", "textEditP");
                    bikeInfoForFreeBikes.textContent = info + " " + "Free bikes";
                    divInfo.append(bikeInfoForFreeBikes);
                    useAbleNum++;   
                        
                    
                    }
                }
                
            }
                MakeMarkerRides();
    })
}
}
})

StopProcess = false;

}

submitButton.addEventListener("click", function(event){
    if(setupFirst === false){
        setupFirst = true
    };
    event.preventDefault();
    if(StopProcess === false && animating === false){
    console.log("foundButton");
    console.log(cityValue.value);
    beginProcess = false;
    if(cityValue.value === null||cityValue.value === ""){
    console.log("no value")}
    else{
        if(currentLocal.value ===null||currentLocal.value ===""){
            console.log("currentLocal")
        console.log("need a value");}
        
        
        else{
            console.log(currentLocal.value);
            fetchMeMyAddressLatLang();
            /************************************************/
            localStorage.setItem("lastSearch", currentLocal.value);
           /* var previousSearch = localStorage.getItem("lastSearch");*/
            console.log(previousSearch)
            /************************************************/
            var activeElement = document.querySelector(".is-active-element");
            if(activeElement){
                activeElement.remove();
            console.log(activeElement);
            }else{
                console.log("not found activeElement");
            }
            if(checkFood.hasAttribute("class","is-active")||checkHotels.hasAttribute("class","is-active")){
            checkFood.removeAttribute("class","is-active");
            checkHotels.removeAttribute("class","is-active");
            console.log("found");
            }
            else{
                console.log("not found");
            }
             if(setupFirst){
                checkRides.setAttribute("class","is-active");
                    StopProcess = true;
                    animating = true;
                    var divInfo = document.createElement("div");
                    divInfo.setAttribute("class","is-active-element listedInfo");
                    active.append(divInfo);
                    console.log("here");
                    divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove' id = 'bikeId'>Finding bikes</h3>";
                    FindBikes(divInfo);
                    rides=true;
                    animate();
                    beginProcess = true;
                    setupFirst = false
                }
                
            }
        }

}else{
    console.log("not ready yet");
}

}

);
/******************************pop up modal for learn more***********************************/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/******************************pop up modal for previous searches***********************************/
// Get the modal
var pmodal = document.getElementById("previousModal");

// Get the button that opens the modal
var pbtn = document.getElementById("previous");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("pclose")[0];
var prevSearch = document.createElement("p");
var previousSearch = localStorage.getItem("lastSearch");
prevSearch.textContent = previousSearch
span.appendChild(prevSearch);
// When the user clicks the button, open the modal 
pbtn.onclick = function() {
  pmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  pmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {event.preventDefault();
  if (event.target == pmodal) {
    pmodal.style.display = "none";
  }
}
/*AIzaSyBEZNr5D8vA25MXqquK2LK2srC48P9czUA*/
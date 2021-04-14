/*********Ride items*****************/
var latForRides;
var longForRides;
var rideLat = [];
var rideLong = [];
beginRides = false;
/*********hotel items****************/
var key = "lqnTXAQShBz0yPpYXTA6LKoOdtI7tFDy";
var secret = "2eaQeSGY6hS7hpd6"; 
var inputLat = 100;
var inputLng = 100;    
hotelsArrayLat = [100];
hotelsArrayLng = [100];
hotelNameArray = [];
phoneNumbers = [];
/********************/
begin = false;
var factor = 0;
rides = false;
food = false;
hotels = false;
var number = 0
var cityValue = document.getElementById("city");
var submitButton = document.getElementById("submit");
/*active slot*/
console.log(submitButton);
var checkRides = document.getElementById("rides");

var checkHotels = document.getElementById("hotels");
var checkFood = document.getElementById("restaurants");

var active = document.getElementById("holder");

/************************************/
function animate(){
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
                    clearInterval(myVar);    
                };
    
    console.log(number)
    },1000);
   
}

let map;

function initMapH() {
    if(begin){
        inputLat = parseFloat(hotelsArrayLat[factor]);
            inputLng = parseFloat(hotelsArrayLng[factor]);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: inputLat, lng: inputLng },
    zoom: 13,
    });}
}
/**********************************/
function initMapR() {
    if(beginRides){
        rideLat = parseFloat(latForRides[0]);
        rideLong = parseFloat(longForRides[0]);

  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: rideLat, lng: rideLong },
    zoom: 13,
    });}
}

    function MakeMarker(){
     console.log(factor);
            inputLat = parseFloat(hotelsArrayLat[factor]);
            inputLng = parseFloat(hotelsArrayLng[factor]);
    /*console.log(factor);*/
    // The location of focalPoint
    const focalPoint = {lat: inputLat, lng: inputLng};
    // The map, centered at focalPoint
    var number = factor + 1;
    const marker = new google.maps.Marker({
        /*icon: "http://maps.google.com/mapfiles/kml/paddle/wht-blank.png",*/
        label: {color: '#000', fontSize: '12px', fontWeight: '600',
        /*text: hotelNameArray[factor] + number.toString()},*/
        text: number.toString()},
        position: focalPoint,
        map: map,
    });
    
}
function center(){ 
    console.log(map);
    map,{
    center: new google.maps.LatLng(inputLat,inputLng),


};
}    


/************************************/

    checkRides.addEventListener("click", function(){
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
    else{console.log("not found");
    }
        checkRides.setAttribute("class","is-active");

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class","is-active-element listedInfo");
        active.append(divInfo);
        divInfo.innerHTML= "finding rides";
        FindBikes();

    });
    
    /******************************/
 
    
    checkFood.addEventListener("click", function(){
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
    }
    else{console.log("not found");
    }
        checkFood.setAttribute("class","is-active");

        var divInfo = document.createElement("div");
        divInfo.setAttribute("id", "hotelId");
        divInfo.setAttribute("class","is-active-element listedInfo");
        active.append(divInfo);
        divInfo.innerHTML= "finding food";
});

/*********************************/
    checkHotels.addEventListener("click", function(){
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
    }
    else{console.log("not found");
    }
    
        checkHotels.setAttribute("class","is-active");

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class","is-active-element listedInfo");
        active.append(divInfo);
        
        divInfo.innerHTML= "<h3 class='has-text-centered' id = 'hotelId'>Finding hotels</h3>";
        /*divInfo.innerHTML= cityValue.value;*/
        runHotels(divInfo);

animate();
});
/************************************************************ */
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("foundButton");
    console.log(cityValue.value);
  });





  /********************************************API for hotels**************************************************/
function runHotels(divInfo){
    
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
console.log(hotelPhone);
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
initMapH();

}
else{ 
if(hotelName!="TEST CONTENT"){
hotelNameArray.push(hotelName);
/*console.log(hotelsArrayLng);*/
/*console.log(hotelsArrayLng);*/
hotelsArrayLat.push(inputLat);
hotelsArrayLng.push(inputLng);
/*phoneNumbers.push(hotelPhone);*/
/*console.log(inputLng);
console.log(inputLat);*/
/*console.log(hotelNameArray);*/
factor ++;
MakeMarker();
/*center();*/
}
}


}
/******************adding hotel names**********************************/
console.log(hotelNameArray);
console.log(phoneNumbers);
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

};
/*************************Api for bikes******************************/
function FindBikes(){
    fetch("http://api.citybik.es/v2/networks")
    .then(function(response){
    return response.json();
    }).then( function(data){
        for(var i = 0; i < data.networks.length; i ++)
        {
        if(data.networks[i].location.city = "Los Angeles")
        {
            if(data.networks[i].location.country = "US"){
            /*console.log(data.networks[i].location.city);*/
            var foundBikes = data.networks[i];
            /*console.log("found");
            console.log(foundBikes);*/
            latForRides = data.networks[i].location.latitude
            longForRides = data.networks[i].location.longitude;
            rideLat.push(latForRides);
            rideLong.push(longForRides);
            }
        }
    }
    console.log(rideLong,rideLat);
    beginRides = true;
    initMapR();
    }
    )
}

/*AIzaSyBEZNr5D8vA25MXqquK2LK2srC48P9czUA*/
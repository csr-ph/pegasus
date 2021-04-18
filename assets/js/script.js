// wrap script in a document.ready function
$(document).ready(function(){
  var markers = [];
    StopProcess = false;
    setupFirst = true;
    beginProcess = false;
    var usableTerm;
    var hardCoded = ["LON", "PHX", "LAX", "NYC", "DEN", "BOS"];
    var realNames = ["London", "Phoenix, AZ", "Los Angeles, CA", "New York, NY", "Denver, CO", "Boston, MA"];
    /*********Ride items*****************/
    var latForRides = 100;
    var longForRides = 100;
    var rideLatArray = [];
    var rideLongArray = [];
    beginRides = false;
    var rideFactor = 0;
    rides = false;
    bikeInfoArray = [];
    freeInfo = [];
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
    foodNameArray = [];
    beginFood = false;
    food = false;
    /********************/
    begin = false;
    var factor = 0;
    rides = false;
    food = false;
    hotels = false;
    var number = 0;
    var cityValue = document.getElementById("city");
    var submitButton = document.getElementById("submit");
    /*active slot*/
    console.log(submitButton);
    var checkRides = document.getElementById("rides");
    animating = false;

    var checkFood = document.getElementById("restaurants");
    var active = document.getElementById("holder");
    var checkHotels = document.getElementById("hotels");
    
    
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    // animation function
    function animate(){ 
  
    // rides section
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
                                animating = false;
                                clearInterval(myVar); 
                    
   
                            }
    
                console.log(number);
                },
                1000);
    
// hotels section
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
                            animating = false;
                            clearInterval(myVar);
                        }
            
            console.log(number);
            },
            1000);
            
           
// food section
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
                        animating = false;
                        clearInterval(myVar);
                    }
        
        console.log(number);
        },
        1000);
        
}

}
// initialize hotels map

let mapH;
function initMapH() {
    markers = [];
    if(begin){
        inputLat = parseFloat(hotelsArrayLat[factor]);
        inputLng = parseFloat(hotelsArrayLng[factor]);
        console.log(typeof inputLat);
        mapH = new google.maps.Map(document.getElementById("map"), {
        center: { lat: inputLat, lng: inputLng },
        zoom: 13,
    });}
}
let mapR;
// initialize rides map
function initMapR() {
    markers = [];
    if(beginRides){
        latForRides = parseFloat(rideLatArray[rideFactor]);
        longForRides = parseFloat(rideLongArray[rideFactor]);
        /*console.log(typeof latForRides);
        console.log(latForRides);*/
        mapR = new google.maps.Map(document.getElementById("map"), {
        center: { lat: latForRides, lng: longForRides},
        zoom: 15,
    });}
}
let mapF;
// initialize food map
function initMapF() {
    markers = [];
    if(begin){
        inputLat = parseFloat(foodArrayLat[factor]);
        inputLng = parseFloat(foodArrayLng[factor]);
        console.log(typeof inputLat);
        mapF = new google.maps.Map(document.getElementById("map"), {
        center: { lat: inputLat, lng: inputLng },
        zoom: 13,
    });}
/******************************************************* */
function MakeMarkerRides(){
        /*console.log(factor);*/
        latForRides = parseFloat(rideLatArray[rideFactor]);
        longForRides = parseFloat(rideLongArray[rideFactor]);
        /*console.log(factor);*/
        // The location of focalPoint
        const focalPoint = {lat: latForRides, lng: longForRides};
        // The map, centered at focalPoint
        var number = rideFactor;
        const marker = new google.maps.Marker({
        icon: "http://maps.google.com/mapfiles/kml/shapes/cycling.png",
        /*icon: "http://maps.google.com/mapfiles/kml/paddle/blu-blank-lv.png",*/
        /*icon: "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png",*/
        label: {color: 'white', fontSize: '12px', fontWeight: '600',
        /*text: hotelNameArray[factor] + number.toString()},*/
        text: number.toString()},
        position: focalPoint,
        map: mapR,
   });
        markers.push(marker);
        
}
/****************************************************/    
    function MakeMarkerHotels(){
                   
        inputLat = parseFloat(hotelsArrayLat[factor]);
        inputLng = parseFloat(hotelsArrayLng[factor]);
        /*console.log(factor);*/
        // The location of focalPoint
        const focalPoint = {lat: inputLat, lng: inputLng};
        // The map, centered at focalPoint
        var number = factor + 1;
        const marker = new google.maps.Marker({
        icon:"http://maps.google.com/mapfiles/kml/shapes/lodging.png",
        /*icon:"http://maps.google.com/mapfiles/kml/paddle/wht-blank.png",*/
        label: {color: '#000', fontSize: '12px', fontWeight: '600',
        /*text: hotelNameArray[factor] + number.toString()},*/
        text: number.toString()},
        position: focalPoint,
        map: mapH,
        
    });
        markers.push(marker);
        

}
/************************************/

    checkRides.addEventListener("click", function()
    {
        if(StopProcess === false && animating === false){
        StopProcess = true;
        animating = true;
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
        if(beginProcess){
        divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove' id = 'bikeId'>Finding bikes</h3>";
        FindBikes(divInfo);
        rides=true;
        markers = [];
        var maps = document.getElementById("map");
        removeAllChildNodes(maps);
        animate();
        
    }
    else{
        divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";}   
    }});
    
    /******************************/
 
    
    checkFood.addEventListener("click", function(){
        if(StopProcess === false && animating === false){
        StopProcess = true;
        animating = true;
        var activeElement = document.querySelector(".is-active-element");
    if(activeElement){
        activeElement.remove();
    console.log(activeElement);
    }else{
        console.log("not found activeElement");
    }
    if(checkRides.hasAttribute("class", "is-active")||checkHotels.hasAttribute("class", "is-active")){
    checkRides.removeAttribute("class", "is-active");
    checkHotels.removeAttribute("class", "is-active");
    console.log("found");
    }
    else{console.log("not found");
    }
        checkFood.setAttribute("class", "is-active");

        var divInfo = document.createElement("div");
        
        divInfo.setAttribute("class", "is-active-element listedInfo");
        active.append(divInfo);
        if(beginProcess){
        divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove' id = 'foodId'>Finding food</h3>";
        runFood(divInfo);
        food=true;
        markers = [];
        
        var maps = document.getElementById("map");
        removeAllChildNodes(maps);
        animate();
        }  
        else{
            divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";}   
    }});

/*********************************/
    checkHotels.addEventListener("click", function(){
        if(StopProcess === false && animating === false){
        StopProcess = true;   
        animating = true;
    var activeElement = document.querySelector(".is-active-element");
    if(activeElement){
        activeElement.remove();
        console.log(activeElement);
    }else{
        console.log("not found activeElement");
    }
    if(checkFood.hasAttribute("class", "is-active")||checkRides.hasAttribute("class", "is-active")){
        checkFood.removeAttribute("class", "is-active");
        checkRides.removeAttribute("class", "is-active");
        console.log("found");
    }
    else{console.log("not found");
    }
    
        checkHotels.setAttribute("class", "is-active");

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "is-active-element listedInfo");
        active.append(divInfo);
        if(beginProcess){
            divInfo.innerHTML= "<h3 class='has-text-centered' id = 'hotelId'>Finding hotels</h3>";
            /*divInfo.innerHTML= cityValue.value;*/
            runHotels(divInfo);
            hotels = true;
            markers = [];
        
            var maps = document.getElementById("map");
            removeAllChildNodes(maps);
            animate();
        }  
        else{
            divInfo.innerHTML= "<h3 class='has-text-centered enterinfoAbove'>Enter information above.</h3>";}   
    }});
/***************************API for food******************************/
function runFood(divInfo){
    const myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&location=" + city;

    $.ajax({
       url: myurl,
       headers: {
        'Authorization': 'Bearer QZ1THUpRKeMiusZGC5iYIZh1qbdmlpSr8yS1Hy3ZBobxNxs7Ks8YJDHsJfa4OWroUkJupEYEZwznc64mcNhX4AYq9Beu2PP9lLhCRllSmn0qY64d5RmjY6ERx-h5YHYx',
    },
       method: 'GET',
       dataType: 'json',
       success: function(data){
           // Grab the results from the API JSON return
           var totalresults = data.total;
           console.log(data);
           // If our results are greater than 0, continue
           if (totalresults > 0){
               // Create a loop to iterate through each item in the 'businesses' array
               $.each(data.businesses, function(i, item) {
                   // Store each business's object in a variable
                   var id = item.id;
                   var alias = item.alias;
                   var phone = item.display_phone;
                   var image = item.image_url;
                   var name = item.name;
                   console.log(name);
                   var rating = item.rating;
                   var reviewcount = item.review_count;
                   var address = item.location.address1;
                   var city = item.location.city;
                   var state = item.location.state;
                   var zipcode = item.location.zip_code;
                   
                   for(var i = 0; i < name.length; i++){
                       var listOfFood = document.createElement("h2");
                       var foodPhone = document.createElement("p");
                       listOfFood.setAttribute("class", "textEdit");
                       foodPhone.setAttribute("class", "textEditP");
                       foodPhone.textContent = phoneNumbers[i];
                       useAbleNum = i + 1;
                       listOfFood.textContent = useAbleNum + ". " + foodNameArray;
                       divInfo.append(listOfFood);
                       divInfo.append(foodPhone);
                   }

    }); 
    
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
        hotelPhone = "Phone number not listed.";
        phoneNumbers.push(hotelPhone);
    }
    else if(data.data[i].hotel.contact != null){
hotelPhone = data.data[i].hotel.contact.phone;
/*console.log(hotelPhone);*/
phoneNumbers.push(hotelPhone);
}
else{
    hotelPhone = "Phone number not listed.";
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
/*console.log(hotelsArrayLng);
console.log(hotelsArrayLng);*/
hotelsArrayLat.push(inputLat);
hotelsArrayLng.push(inputLng);
/*phoneNumbers.push(hotelPhone);*/
/*console.log(inputLng);
console.log(inputLat);*/
/*console.log(hotelNameArray);*/
factor ++;
MakeMarkerHotels();
/*center();*/
}

}


}
/******************adding hotel names**********************************/
/*console.log(hotelNameArray);
console.log(phoneNumbers);*/
for(var i = 0; i < hotelNameArray.length; i++){
var ListOfHotels = document.createElement("h2");
var phoneNum = document.createElement("p");
phoneNum.setAttribute("class", "textEditP");
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
StopProcess = false;

}
/*************************Api for bikes******************************/
function FindBikes(divInfo){
    
    bikeInfoArray = [];
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
        {/*console.log(data.networks[i].location.city);*/
            /*if(data.networks[i].location.city ==="London"){
                console.log("found LON");
            }*/
            
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
                    /*console.log(data.network.stations[0].latitude);*/
                    /*console.log(data.network.stations[i].latitude);
                    console.log(data.network.stations[i].longitude); */ 
                    /*console.log(data.network.stations[i].extra.address);   */  
                    /*console.log(typeof data.network.stations[i].free_bikes);*/
                    /*if(data.network.stations[i].free_bikes > 0){*/
                        /*freeBikeInfo = data.network.stations[i].free_bikes;*/
                        latForRides = data.network.stations[i].latitude;
                        longForRides = data.network.stations[i].longitude;
                        /*freeInfo.push(freeBikeInfo);*/
                        /*bikeAddress = data.network.stations[i].extra.address;*/
                        /*console.log(data.network.stations.length);*/
                        
                        /*var bikeInfoForFreeBikes = document.createElement("p");
                        bikeInfoForFreeBikes.setAttribute("class", "textEditP");
                        bikeInfoForFreeBikes.textContent = "hello"[i];
                        divInfo.append(bikeInfoForFreeBikes);
*/
                        /*if(bikeAddress === null|| bikeAddress ===""){
                            bikeAddress = "Address not given";
                        }
                        else{bikeInfoArray.push(bikeAddress)
                        console.log(data.network.stations[i].extra.address);     
                        console.log(data.network.stations[i].free_bikes);}*/

                if(rideLatArray.length === 0 && rideLongArray.length === 0){
                    rideLatArray[0]=latForRides;
                    rideLongArray[0]=longForRides;
                
                    beginRides = true;
                    /*markers = [];*/
                    initMapR();
                    } 
                    else{rideLatArray.push(latForRides);
                    rideLongArray.push(longForRides);
                    rideFactor ++;
                    MakeMarkerRides();
                    }
                
                
                }
                
                /*console.log(data.networks[i].name);*/
        
               /*for(var i = 0; i < bikeInfoArray.length; i++){
                var useAbleNum = i + 1;
                var bikeInfoForFreeBikes = document.createElement("p");
                bikeInfoForFreeBikes.setAttribute("class", "textEditP");
                bikeInfoForFreeBikes.textContent = freeInfo[i];
                var bikesAdress = document.createElement("h2");
                bikesAdress.setAttribute("class", "textEdit");
                bikesAdress.textContent = useAbleNum + ". " + bikeInfoArray[i];
                
               console.log(bikesAdress);*/
                /*divInfo.append(bikesAdress);*/
              /* divInfo.append(bikeInfoForFreeBikes);*/
    });
}
}
});
StopProcess = false;

}
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    if(StopProcess === false && animating === false){
    console.log("foundButton");
    console.log(cityValue.value);
    beginProcess = false;
    if(cityValue.value === null||cityValue.value === ""){
    console.log("no value");}
    else{
        /*if(setupFirst){*/
            
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
                    /*setupFirst = false*/
                    

            }
            /*else{setupFirst = true;
            beginProcess = true;
            console.log("else");*/
            
        
    
}else{
    console.log("not ready yet");
}}
);
// pop up modal for "Learn More"
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*AIzaSyBEZNr5D8vA25MXqquK2LK2srC48P9czUA*/
}
});
}}})
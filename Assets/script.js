rides = false;
food = false;
hotels = false;
/*active slot*/
var checkRides = document.getElementById("rides");
var checkFood = document.getElementById("food");
var checkHotels = document.getElementById("hotels");


var active = document.getElementById("holder");

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
        divInfo.innerHTML= "finding hotels";
}); 
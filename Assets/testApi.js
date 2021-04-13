
    var key = "lqnTXAQShBz0yPpYXTA6LKoOdtI7tFDy";
    var secret = "2eaQeSGY6hS7hpd6";     
    var city = "LON"
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
return fetch("https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=" + city + "&roomQuantity=1&adults=2&radius=10&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=NONE", {
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
/*console.log('hotels', data);*/

/*console.log('hotels', data);*/
console.log(data.data[0].hotel.latitude);

}).catch(function (err) {

// Log any errors
console.log('something went wrong', err);

});


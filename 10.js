function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe()









































/*

const users = [
    {
      name: 'Erik',
      age: 23,
    },
    {
      name: 'María',
      age: 34,
    },
    {
      name: 'Daniel',
      age: 12,
    },
    {
      name: 'José',
      age: 65,
    },
    {
      name: 'Daniela',
      age: 45,
    },
  ];
  
  // Tomar la edad y si es menor a 15 imprimir eres un niño
  // si es mayor a 15 y menor o igual a 20 imprimir eres un joven
  // si es mayor a 20 y menor a 30 señor
  // si es mayor a 30 eres un abuelito
  
  for (let i = 0; i < users.length; i++) {
    const age = users[i].age;
    switch (true) {
      case age < 15:
        console.log('Eres niño')
        break;
      case age >= 15 && age < 20:
        console.log('Eres un joven')
        break;
      case age <= 30:
        console.log('Eres un señor')
        break;
      default:
        console.log('Eres un abuelito')
    }
  }
  
  */

/*

function comparacion (a,b){
  //const a = 1;
  //const b = 10;
  
  

  switch(true){
    case a < b:
        console.log("A es menor a B");
        break;
        
    case b < a:
        console.log("A es mayor a B");
        break;
        
    case a === b:
        console.log("A es igual a B");
        break;

  

  }
}

comparacion(5,8);
comparacion(8,5);
comparacion(8,8);


// */

// function comparacion (a,b){

// switch(true){
//     case (a > b):
//         console.log("A es mayor a B")
//         break
//     case (a < b):
//             console.log("A es menor a B")
//             break
//     case (a === b):
//         console.log("A es igual a B")
//         break
// }
// }

// comparacion(10,80);
// comparacion(548,9475);
// comparacion(4584,64521);
// comparacion(647852,56486);
// comparacion(31145,641238);
// comparacion(87466564,97464);
// comparacion(5,5);

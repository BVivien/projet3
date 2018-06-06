function initMap()
{

    var bourges = { lat: 47.0781336, lng: 2.3282635 };
    map1 = new google.maps.Map(document.getElementById('map1'),
    {

      zoom: 5,
      center:bourges,
      mapTypeId: 'roadmap'

    });

    var coords = document.getElementsByClassName("city-coords");
    for(var i=0; i<coords.length; i++){
      console.log({
        lat: parseFloat(coords[i].dataset.lat),
        lng: parseFloat(coords[i].dataset.lon)
      })
      var marker = new  google.maps.Marker({
        position: {
          lat: parseFloat(coords[i].dataset.lat),
          lng: parseFloat(coords[i].dataset.lng)
        },
        map : map1
      });
    }

    var input = document.getElementById('city');
    var options = {
      types: ['geocode']

      };



var autocomplete = new google.maps.places.Autocomplete(input,options);
//
// new google.maps.places.Autocomplete(document.getElementById('ville'), {types:['geocode']});

}

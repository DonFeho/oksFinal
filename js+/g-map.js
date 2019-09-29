var map;
function initMap() {
    var myLatLng = {lat: 49.82070118517663, lng: 24.040231704711918};
    var id_map = document.getElementById('map-super');
    if (id_map) {
        map = new google.maps.Map(id_map, {
            center: myLatLng,
            scrollwheel: false,
            zoom: 17,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        });
    }
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Львівська кахлярня. Адреса: вул. Стуса 25-27, Львів, Україна'
    });
    var styles = [
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "saturation": "-44"
                },
                {
                    "color": "#f5a35c"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "gamma": 2
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                },
                {
                    "gamma": 1.22
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "weight": "0.55"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "hue": "#f5a35c"
                },
                {
                    "saturation": "47"
                },
                {
                    "gamma": "0.80"
                },
                {
                    "lightness": "12"
                },
                {
                    "weight": "2.32"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": 1
                },
                {
                    "hue": "#ff7000"
                },
                {
                    "gamma": 0.68
                },
                {
                    "saturation": -32
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ba7c7c"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#b8b8b8"
                },
                {
                    "lightness": 18
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#b6b6b6"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#a8908e"
                },
                {
                    "saturation": "19"
                },
                {
                    "lightness": "-44"
                },
                {
                    "gamma": "1.52"
                },
                {
                    "weight": "1.23"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#656565"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#cdcdcd"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#b6b6b6"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -100
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#f5a35c"
                },
                {
                    "lightness": "43"
                }
            ]
        },
        {
            "featureType": "transit.station.rail",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#003bff"
                },
                {
                    "gamma": 1.45
                }
            ]
        }
    ]
    map.setOptions({styles: styles});
}



let tour = [{
        country: 'England',
        date: '27.09',
        price: 750,
        tickets: 56,
        latitude: 51.505,
        longitude:-0.09,
    }, {
        country: 'Austria',
        date: '2.04',
        price: 500,
        tickets: 100,
        latitude: 45.505,
        longitude:-0.09,
    },
    {
        country: 'France',
        date: '18.09',
        price: 450,
        tickets: 400,
        latitude: 51.505,
        longitude:-34.09,
    },
    {
        country: 'Spain',
        date: '23.07',
        price: 200,
        tickets: 0,
        latitude: 54.87,
        longitude:-6.09,
    },
    {
        country: 'Italy',
        date: '14.01',
        price: 350,
        tickets: 3000,
        latitude: 65.505,
        longitude:4.09,
    },
    {
        country: 'USA',
        date: '1.09',
        price: 640,
        tickets: 80,
        latitude: 1.505,
        longitude:-98.549,
    },
    {
        country: 'Poland',
        date: '30.11',
        price: 800,
        tickets: 5000,
        latitude: 34.505,
        longitude:-34.09,
    },
    {
        country: 'Germany',
        date: '15.07',
        price: 550,
        tickets: 643,
        latitude: 65.505,
        longitude: 65.09,
    },
    {
        country: 'Ukraine',
        date: '9.09',
        price: 700,
        tickets: 1245,
        latitude: 50.505,
        longitude: -89.09,
    },
    {
        country: 'Netherland',
        date: '17.08',
        price: 2345,
        tickets: 322,
        latitude: 54.505,
        longitude:-0.09,
    },
    {
        country: 'Greece',
        date: '30.05',
        price: 660,
        tickets: 150,
        latitude: 12.505,
        longitude:-78.09,
    },
    {
        country: 'Belgium',
        date: '23.06',
        price: 2000,
        tickets: 76,
        latitude: 43.505,
        longitude:-9.09,
    },
    {
        country: 'Denmark',
        date: '6.10',
        price: 450,
        tickets: 500,
        latitude: 78.505,
        longitude:-78.09,
    },
];

function printTable(array) {
    const myNode = document.getElementById("content-table");
    myNode.innerHTML = '';
    const teachers_wrapper = document.getElementById("content-table");

    array.forEach((item, ind) => {
        const div_wrapper = document.createElement("tr");
        div_wrapper.innerHTML =
            ` 
            <td>${item.country}</td>
          <td>${item.date}</td> 
          <td>${item.price}</td> 
          <td>${item.tickets}</td> 
 
      `
      //addMap(ind, item.latitude, item.longitude);
        teachers_wrapper.appendChild(div_wrapper);
    })
};

printTable(tour);

function addMap() {
    let map = L.map('map').setView([51.505, -0.09], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
    }).addTo(map);


    _.forEach(tour, function(item) {
        let marker = new L.Marker([item.latitude, item.longitude]);
        marker.addTo(map);
    })
}

addMap();


function sortByMultipleKeyTrue(keys) {
    return function(a, b) {
        if (keys.length == 0) return 0; // force to equal if keys run out
        key = keys[0]; // take out the first key
        if (a[key] < b[key]) return -1; // will be 1 if DESC
        else if (a[key] > b[key]) return 1; // will be -1 if DESC
        else return sortByMultipleKeyTrue(keys.slice(1))(a, b);
    }
}

function sortByCountry() {
    tour.sort(sortByMultipleKeyTrue(['country']));
    printTable(tour);
}

function sortByDate() {
    tour.sort(function(o1, o2) {
        return sort_o1_before_o2 ? -1 : sort_o1_after_o2 ? 1 : 0;
    });
    printTable(tour);
}

function sortByPrice() {
    tour.sort(sortByMultipleKeyTrue(['price']));
    printTable(tour);
}

function sortByTickets() {
    tour.sort(sortByMultipleKeyTrue(['tickets']));
    printTable(tour);
}
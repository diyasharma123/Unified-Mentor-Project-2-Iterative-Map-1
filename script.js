
const map = L.map('map').setView([28.6139, 77.2090], 12); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
  {
    name: "India Gate",
    lat: 28.6129,
    lng: 77.2295,
    description: "War memorial in New Delhi."
  },
  {
    name: "Red Fort",
    lat: 28.6562,
    lng: 77.2410,
    description: "Historic fort and UNESCO World Heritage Site."
  },
  {
    name: "Qutub Minar",
    lat: 28.5244,
    lng: 77.1855,
    description: "Tallest brick minaret in the world."
  },
  {
    name: "Lotus Temple",
    lat: 28.5535,
    lng: 77.2588,
    description: "Baháʼí House of Worship, notable for its flowerlike shape."
  },
  {
    name: "Akshardham Temple",
    lat: 28.6127,
    lng: 77.2773,
    description: "Sprawling spiritual-cultural complex."
  }
];


const markers = [];
locations.forEach(loc => {
  const marker = L.marker([loc.lat, loc.lng])
    .addTo(map)
    .bindPopup(`<b>${loc.name}</b><br>${loc.description}`);
  markers.push({ name: loc.name.toLowerCase(), marker });
});


document.getElementById("search").addEventListener("input", function (e) {
  const query = e.target.value.toLowerCase();
  const match = markers.find(m => m.name.includes(query));
  if (match) {
    map.setView(match.marker.getLatLng(), 15);
    match.marker.openPopup();
  }
});


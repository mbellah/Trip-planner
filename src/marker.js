
const mapbox = require("mapbox-gl");

export const activityMarker = document.createElement("div");
activityMarker.style.width = "32px";
activityMarker.style.height = "39px";
activityMarker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

export const hotelMarker = document.createElement("div");
hotelMarker.style.width = "32px";
hotelMarker.style.height = "39px";
hotelMarker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

export const restaurantMarker = document.createElement("div");
restaurantMarker.style.width = "32px";
restaurantMarker.style.height = "39px";
restaurantMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const createMarker = (type, coordArr) => {
  return new mapbox.Marker(type).setLngLat(coordArr);
}

export default createMarker;

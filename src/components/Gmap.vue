<template>
  <div class="gmap" id="gmap"></div>
</template>

<script>
export default {
    name: "Gmap",
    props: ["homeInfo"],
    mounted() {
        this.renderMap();
    },
    methods: {
      renderMap() {
          
          const map = document.getElementById("gmap");
          const myLatLon = { lat: this.homeInfo.lat, lng: this.homeInfo.lon };
          const mapOptions = {
              center: myLatLon,
              zoom: 7,
              maxZoom: 15,
              minZoom: 3,
              streetViewControl: false
          };
          
          const setupMap = new google.maps.Map(map, mapOptions);
          const infoWindow = new google.maps.InfoWindow({
              content: this.homeInfo.street
          });
          const marker = new google.maps.Marker({
              position: myLatLon,
              map: setupMap
          });

          marker.addListener("click", () => infoWindow.open(setupMap, marker));
      }
    }
}
</script>

<style>

</style>
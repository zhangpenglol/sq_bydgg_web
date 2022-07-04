<template>
  <div class="map-container">
    <navbar :isMap="isMap"></navbar>
    <div id="map"></div>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar/Navbar.vue";
import pj4 from "proj4";
export default {
  components: {
    Navbar
  },
  data() {
    return {
      isMap: true,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 设置resolutions
      var res = [
        264.5833333333333, 132.29166666666666, 66.14583333333333,
        33.072916666666664, 16.933333333333334, 8.466666666666667,
        4.233333333333333, 2.1166666666666667, 1.0583333333333333,
        0.5291666666666667, 0.26458333333333334, 0.13229166666666667,
      ];

      // for (var i = 0; i < 12; i++) {
      //   let pow = Math.pow(2, i);
      //   let num = 264.5833333333333 / pow;
      //   res.push(num);
      // }
      Proj4js.defs(
        "EPSG:4527",
        "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=GRS80 +units=m +no_defs"
      );
      const map = L.map("map", {
        center: [33.7, 118.73],
        zoom: 9,
        zoomControl: false,
        crs: new L.Proj.CRS("EPSG:4527", {
          origin: [-20037508.342787, 20037508.342787],
          resolutions: res,
          bounds: window.L.bounds(
            [39584518.793019, 3666553.046666],
            [39720897.924935, 3814793.180413]
          ),
        }),
      });

      console.log(L.bounds);
      // 添加wmts图层
      L.kqmap.mapping
        .wmtsLayer(
          `http://kqgis.kq-map.com:9800/sqjsydzjgg-proxy/KQGis/rest/services/sqjsydzjgg/MapServer/WMTS`,
          {
            layer: 3,
            ua_token:
              "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdmp1biIsImNyZWF0ZWQiOjE2NDk3NTUzNTcyMjQsImV4cCI6MTc4MDE1NjgwMH0.p1PqlJk-Q8s8J-iiQuDUWZUTF9MfRTsxUuwDYDnwEzay-Ug1g6-cO7u0wAdFJPC_ulr1TmCKVZO9ELfGWTE2VQ&lang=zh-CN",
          }
        )
        .addTo(map);
    },
  },
};
</script>

<style lang="scss" scoped>
.map-container {
  height: 100%;
  #map {
    height: inherit;
  }
}
</style>
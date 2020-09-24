var RadarPOI = {

    show: function initFn() {

        AR.radar.container = document.getElementById("radarContainer");
        AR.radar.background = new AR.ImageResource("assets/radar_bg.png", {onError: ArTa.onError});
        AR.radar.northIndicator.image = new AR.ImageResource("assets/kompas.png", {onError: ArTa.onError});

        AR.radar.radius = 0.3;
        AR.radar.northIndicator.radius = 0.0;

        AR.radar.enabled = true;
    },

};
var World = {

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {

        var targetCollectionResource = new AR.TargetCollectionResource("assets/tracker.wtc", {
            onError: World.onError
        });

        var tracker = new AR.ImageTracker(targetCollectionResource, {
            onTargetsLoaded: World.showInfoBar,
            onError: World.onError
        });

        var imgD215 = new AR.ImageResource("assets/D215_desc.png", {
            onError: World.onError
        });

        var overlayD215 = new AR.ImageDrawable(imgD215, 0.5, {
            translate: {
                x: -1.1,
                y: 0.15
            },
            scale: {
                x: 5,
                y: 5
            }
        });

        var D215 = new AR.ImageTrackable(tracker, "D215", {
            drawables: {
                cam: overlayD215
            },
            onImageRecognized: World.hideInfoBar,
            onError: World.onError
        });
    },

    onError: function onErrorFn(error) {
        alert(error);
    },

    hideInfoBar: function hideInfoBarFn() {
        document.getElementById("infoBox").style.display = "none";
    },

    showInfoBar: function worldLoadedFn() {
        document.getElementById("infoBox").style.display = "table";
        document.getElementById("loadingMessage").style.display = "none";
    }
};

World.init();
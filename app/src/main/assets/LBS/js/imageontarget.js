var World = {

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {
        this.targetCollectionResource = new AR.TargetCollectionResource("assets/mag.wtc", {
            onError: World.onError
        });
        this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
            onTargetsLoaded: World.showInfoBar,
            onError: World.onError
        });

        this.logo_itera_bulet_head = new AR.ImageTrackable(this.tracker, "logo_itera_bulet_head", {
            onImageRecognized: World.nativePlatform,
            onError: World.onError
        });
    },

    onError: function onErrorFn(error) {
        alert(error);
    },

    nativePlatform: function nativePlatformFn(){
        var dummyJSON ={
            action: "intent_activity",
            id: "ID",
        };

        AR.platform.sendJSONObject(dummyJSON);
    },

    hideInfoBar: function hideInfoBarFn() {
        document.getElementById("infoBox").style.display = "none";
    },

    showInfoBar: function worldLoadedFn() {
        document.getElementById("infoBox").style.display = "table";
    }
};

World.init();
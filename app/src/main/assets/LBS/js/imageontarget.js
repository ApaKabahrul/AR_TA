var World = {

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {
        this.targetCollectionResource = new AR.TargetCollectionResource("assets/mag.wtc", {onError: World.onError});
        this.tracker = new AR.ImageTracker(this.targetCollectionResource, {onTargetsLoaded: World.showInfoBar,onError: World.onError});
        this.logo_itera_bulet_head = new AR.ImageTrackable(this.tracker, "logo_itera_bulet_head", {onImageRecognized: World.nativePlatform});
    },

    //Direksi ke intent image
    nativePlatform: function nativePlatformFn(){
        var dummyJSON ={
            action: "intent_activity",
            id: "ID",
        };

        //Kirim data ke kode native
        AR.platform.sendJSONObject(dummyJSON);
    },

    showInfoBar: function worldLoadedFn() {
        document.getElementById("infoBox").style.display = "table";
    },

    onError: function onErrorFn(error) {
        alert(error);
    },
};

World.init();
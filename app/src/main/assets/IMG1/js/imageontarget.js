var ARTA_IR = {

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {

        var targetCollectionResource = new AR.TargetCollectionResource("assets/tracker_new.wtc", { onError: ARTA_IR.onError });
        var tracker = new AR.ImageTracker(targetCollectionResource, { onTargetsLoaded: ARTA_IR.showInfoBar, onError: ARTA_IR.onError });

        //init ruangan
        var aMusik = new AR.ImageResource("assets/musik.png", {onError: ARTA_IR.onError});
        var oMusik = new AR.ImageDrawable(aMusik, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aKelas = new AR.ImageResource("assets/kelas.png", {onError: ARTA_IR.onError});
        var oKelas = new AR.ImageDrawable(aKelas, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aMusholla = new AR.ImageResource("assets/musholla.png", {onError: ARTA_IR.onError});
        var oMusholla = new AR.ImageDrawable(aMusholla, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        //Gedung C Lt 1 (disini)

        //Gedung C Lt 2 (disini)

        //Gedung C Lt 3 (disini)

        //Gedung D Lt 1 (disini)

        //Gedung D Lt 2 (disini)

        //Gedung D Lt 3
        var D301 = new AR.ImageTrackable(tracker, "D301", {drawables: { cam: oMusik }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D302 = new AR.ImageTrackable(tracker, "D302", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D303 = new AR.ImageTrackable(tracker, "D303", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D304 = new AR.ImageTrackable(tracker, "D304", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D305 = new AR.ImageTrackable(tracker, "D305", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D306 = new AR.ImageTrackable(tracker, "D306", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D307 = new AR.ImageTrackable(tracker, "D307", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D308 = new AR.ImageTrackable(tracker, "D308", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D309 = new AR.ImageTrackable(tracker, "D309", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D310 = new AR.ImageTrackable(tracker, "D310", {drawables: { cam: oMusholla }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D311 = new AR.ImageTrackable(tracker, "D311", {drawables: { cam: oMusholla }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D312 = new AR.ImageTrackable(tracker, "D312", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D313 = new AR.ImageTrackable(tracker, "D313", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D315 = new AR.ImageTrackable(tracker, "D315", {drawables: { cam: oKelas }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
    },

    onError: function onErrorFn(error) {
        alert(error);
    },

    hideInfoBar: function hideInfoBarFn() {
        document.getElementById("infoBox").style.display = "none";
    },

    showInfoBar: function worldLoadedFn() {
        document.getElementById("infoBox").style.display = "table";
    }
};

ARTA_IR.init();
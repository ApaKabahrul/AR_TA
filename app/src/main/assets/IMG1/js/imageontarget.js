var ARTA_IR = {

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {

        var targetCollectionResource = new AR.TargetCollectionResource("assets/tracker_fix.wtc", { onError: ARTA_IR.onError });
        var tracker = new AR.ImageTracker(targetCollectionResource, { onTargetsLoaded: ARTA_IR.showInfoBar, onError: ARTA_IR.onError });

        //init ruangan
        var aAkad = new AR.ImageResource("assets/akad.png", {onError: ARTA_IR.onError});
        var oAkad = new AR.ImageDrawable(aAkad, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aAkred = new AR.ImageResource("assets/akred.png", {onError: ARTA_IR.onError});
        var oAkred = new AR.ImageDrawable(aAkred, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aAsrama = new AR.ImageResource("assets/asrama.png", {onError: ARTA_IR.onError});
        var oAsrama = new AR.ImageDrawable(aAsrama, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aAula = new AR.ImageResource("assets/aula.png", {onError: ARTA_IR.onError});
        var oAula = new AR.ImageDrawable(aAula, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aBiomedis = new AR.ImageResource("assets/biomedis.png", {onError: ARTA_IR.onError});
        var oBiomedis = new AR.ImageDrawable(aBiomedis, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aBiosistem = new AR.ImageResource("assets/biosistem.png", {onError: ARTA_IR.onError});
        var oBiosistem = new AR.ImageDrawable(aBiosistem, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aBmkg = new AR.ImageResource("assets/bmkg.png", {onError: ARTA_IR.onError});
        var oBmkg = new AR.ImageDrawable(aBmkg, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aElektro = new AR.ImageResource("assets/elektro.png", {onError: ARTA_IR.onError});
        var oElektro = new AR.ImageDrawable(aElektro, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aEnergi = new AR.ImageResource("assets/energi.png", {onError: ARTA_IR.onError});
        var oEnergi = new AR.ImageDrawable(aEnergi, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aFisika = new AR.ImageResource("assets/fisika.png", {onError: ARTA_IR.onError});
        var oFisika = new AR.ImageDrawable(aFisika, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aGeofisika = new AR.ImageResource("assets/geofisika.png", {onError: ARTA_IR.onError});
        var oGeofisika = new AR.ImageDrawable(aGeofisika, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aGeologi = new AR.ImageResource("assets/geologi.png", {onError: ARTA_IR.onError});
        var oGeologi = new AR.ImageDrawable(aGeologi, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aGudang = new AR.ImageResource("assets/gudang.png", {onError: ARTA_IR.onError});
        var oGudang = new AR.ImageDrawable(aGudang, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aHutan = new AR.ImageResource("assets/hutan.png", {onError: ARTA_IR.onError});
        var oHutan = new AR.ImageDrawable(aHutan, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aIndustri = new AR.ImageResource("assets/industri.png", {onError: ARTA_IR.onError});
        var oIndustri = new AR.ImageDrawable(aIndustri, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aInformatika = new AR.ImageResource("assets/informatika.png", {onError: ARTA_IR.onError});
        var oInformatika = new AR.ImageDrawable(aInformatika, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aJteif = new AR.ImageResource("assets/jteif.png", {onError: ARTA_IR.onError});
        var oJteif = new AR.ImageDrawable(aJteif, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aJtmb = new AR.ImageResource("assets/jtmb.png", {onError: ARTA_IR.onError});
        var oJtmb = new AR.ImageDrawable(aJtmb, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aJtph = new AR.ImageResource("assets/jtph.png", {onError: ARTA_IR.onError});
        var oJtph = new AR.ImageDrawable(aJtph, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aKelas = new AR.ImageResource("assets/kelas.png", {onError: ARTA_IR.onError});
        var oKelas = new AR.ImageDrawable(aKelas, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aKimia = new AR.ImageResource("assets/kimia.png", {onError: ARTA_IR.onError});
        var oKimia = new AR.ImageDrawable(aKimia, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aKkn = new AR.ImageResource("assets/kkn.png", {onError: ARTA_IR.onError});
        var oKkn = new AR.ImageDrawable(aKkn, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aKob = new AR.ImageResource("assets/kob.png", {onError: ARTA_IR.onError});
        var oKob = new AR.ImageDrawable(aKob, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aLogistik = new AR.ImageResource("assets/logistik.png", {onError: ARTA_IR.onError});
        var oLogistik = new AR.ImageDrawable(aLogistik, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aLppm = new AR.ImageResource("assets/lppm.png", {onError: ARTA_IR.onError});
        var oLppm = new AR.ImageDrawable(aLppm, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aMaterial = new AR.ImageResource("assets/material.png", {onError: ARTA_IR.onError});
        var oMaterial = new AR.ImageDrawable(aMaterial, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aMusholla = new AR.ImageResource("assets/musholla.png", {onError: ARTA_IR.onError});
        var oMusholla = new AR.ImageDrawable(aMusholla, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aMusik = new AR.ImageResource("assets/musik.png", {onError: ARTA_IR.onError});
        var oMusik = new AR.ImageDrawable(aMusik, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aOail = new AR.ImageResource("assets/oail.png", {onError: ARTA_IR.onError});
        var oOail = new AR.ImageDrawable(aOail, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aOb = new AR.ImageResource("assets/ob.png", {onError: ARTA_IR.onError});
        var oOb = new AR.ImageDrawable(aOb, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aPangan = new AR.ImageResource("assets/pangan.png", {onError: ARTA_IR.onError});
        var oPangan = new AR.ImageDrawable(aPangan, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aR_lppm = new AR.ImageResource("assets/r_lppm.png", {onError: ARTA_IR.onError});
        var oR_lppm = new AR.ImageDrawable(aR_lppm, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aSarpras = new AR.ImageResource("assets/sarpras.png", {onError: ARTA_IR.onError});
        var oSarpras = new AR.ImageDrawable(aSarpras, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aSehat = new AR.ImageResource("assets/sehat.png", {onError: ARTA_IR.onError});
        var oSehat = new AR.ImageDrawable(aSehat, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aSeminar = new AR.ImageResource("assets/seminar.png", {onError: ARTA_IR.onError});
        var oSeminar = new AR.ImageDrawable(aSeminar, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aSpi = new AR.ImageResource("assets/spi.png", {onError: ARTA_IR.onError});
        var oSpi = new AR.ImageDrawable(aSpi, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aSpm = new AR.ImageResource("assets/spm.png", {onError: ARTA_IR.onError});
        var oSpm = new AR.ImageDrawable(aSpm, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aT_akad = new AR.ImageResource("assets/t_akad.png", {onError: ARTA_IR.onError});
        var oT_akad = new AR.ImageDrawable(aT_akad, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aT_industri_pert = new AR.ImageResource("assets/t_industri_pert.png", {onError: ARTA_IR.onError});
        var oT_industri_pert = new AR.ImageDrawable(aT_industri_pert, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aTambang = new AR.ImageResource("assets/tambang.png", {onError: ARTA_IR.onError});
        var oTambang = new AR.ImageDrawable(aTambang, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aTelekomunikasi = new AR.ImageResource("assets/telekomunikasi.png", {onError: ARTA_IR.onError});
        var oTelekomunikasi = new AR.ImageDrawable(aTelekomunikasi, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        var aTransit = new AR.ImageResource("assets/transit.png", {onError: ARTA_IR.onError});
        var oTransit = new AR.ImageDrawable(aTransit, 0.5, { translate: {x: -0.8, y: -0.04 }, scale: { x: 5, y: 5}});

        //Gedung C Lt 1 (disini)
        var C101 = new AR.ImageTrackable(tracker, "C101", {drawables: { cam: oLppm }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C102 = new AR.ImageTrackable(tracker, "C102", {drawables: { cam: oAkred }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C103 = new AR.ImageTrackable(tracker, "C103", {drawables: { cam: oAkred }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C104 = new AR.ImageTrackable(tracker, "C104", {drawables: { cam: oIndustri }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C105 = new AR.ImageTrackable(tracker, "C105", {drawables: { cam: oAkad }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});

        var C106 = new AR.ImageTrackable(tracker, "C106", {drawables: { cam: oSehat }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C107 = new AR.ImageTrackable(tracker, "C107", {drawables: { cam: oTransit }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C108 = new AR.ImageTrackable(tracker, "C108", {drawables: { cam: oT_akad }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C109 = new AR.ImageTrackable(tracker, "C109", {drawables: { cam: oElektro }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C110 = new AR.ImageTrackable(tracker, "C110", {drawables: { cam: oGeologi }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});

        //Gedung C Lt 2
        var C201 = new AR.ImageTrackable(tracker, "C201", {drawables: { cam: oAkred }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C202 = new AR.ImageTrackable(tracker, "C202", {drawables: { cam: oAkred }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C203 = new AR.ImageTrackable(tracker, "C203", {drawables: { cam: oAkred }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C204 = new AR.ImageTrackable(tracker, "C204", {drawables: { cam: oKimia }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C206 = new AR.ImageTrackable(tracker, "C206", {drawables: { cam: oOb }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C207 = new AR.ImageTrackable(tracker, "C207", {drawables: { cam: oOail }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C208 = new AR.ImageTrackable(tracker, "C208", {drawables: { cam: oBmkg }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C209 = new AR.ImageTrackable(tracker, "C209", {drawables: { cam: oAsrama }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C210 = new AR.ImageTrackable(tracker, "C210", {drawables: { cam: oGeofisika }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});

        //Gedung C Lt 3
        var C301 = new AR.ImageTrackable(tracker, "C301", {drawables: { cam: oAula }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var C304 = new AR.ImageTrackable(tracker, "C304", {drawables: { cam: oSeminar }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});

        //Gedung D Lt 1
        var D101 = new AR.ImageTrackable(tracker, "D101", {drawables: { cam: oR_lppm }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D102 = new AR.ImageTrackable(tracker, "D102", {drawables: { cam: oSpm }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D103 = new AR.ImageTrackable(tracker, "D103", {drawables: { cam: oJtmb }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D104 = new AR.ImageTrackable(tracker, "D104", {drawables: { cam: oKkn }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D105 = new AR.ImageTrackable(tracker, "D105", {drawables: { cam: oJtph }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D106 = new AR.ImageTrackable(tracker, "D106", {drawables: { cam: oGudang }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D107 = new AR.ImageTrackable(tracker, "D107", {drawables: { cam: oKob }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D108 = new AR.ImageTrackable(tracker, "D108", {drawables: { cam: oLogistik }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D109 = new AR.ImageTrackable(tracker, "D109", {drawables: { cam: oSarpras }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D110 = new AR.ImageTrackable(tracker, "D110", {drawables: { cam: oSarpras }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});

        //Gedung D Lt 2
        var D201 = new AR.ImageTrackable(tracker, "D201", {drawables: { cam: oHutan }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D202 = new AR.ImageTrackable(tracker, "D202", {drawables: { cam: oT_industri_pert }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D203 = new AR.ImageTrackable(tracker, "D203", {drawables: { cam: oBiosistem }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D204 = new AR.ImageTrackable(tracker, "D204", {drawables: { cam: oPangan }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D205 = new AR.ImageTrackable(tracker, "D205", {drawables: { cam: oBiomedis }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D206 = new AR.ImageTrackable(tracker, "D206", {drawables: { cam: oTambang }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D207 = new AR.ImageTrackable(tracker, "D207", {drawables: { cam: oEnergi }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D208 = new AR.ImageTrackable(tracker, "D208", {drawables: { cam: oMaterial }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D209 = new AR.ImageTrackable(tracker, "D209", {drawables: { cam: oTelekomunikasi }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D210 = new AR.ImageTrackable(tracker, "D210", {drawables: { cam: oMusholla }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D211 = new AR.ImageTrackable(tracker, "D211", {drawables: { cam: oSpi }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D212 = new AR.ImageTrackable(tracker, "D212", {drawables: { cam: oJteif }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D213 = new AR.ImageTrackable(tracker, "D213", {drawables: { cam: oFisika }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D214 = new AR.ImageTrackable(tracker, "D214", {drawables: { cam: oInformatika }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});
        var D215 = new AR.ImageTrackable(tracker, "D215", {drawables: { cam: oInformatika }, onImageRecognized: ARTA_IR.hideInfoBar, onImageLost: ARTA_IR.showInfoBar});

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
var changeAnimationDuration = 500;
var resizeAnimationDuration = 1000;

function Marker(dataPOI) {

    this.dataPOI = dataPOI;
    this.isSelected = false;
    this.animationGroupIdle = null;
    this.animationGroupSelected = null;

    var markerLocation = new AR.GeoLocation(dataPOI.latitude, dataPOI.longitude);

    this.markerDrawableIdle = new AR.ImageDrawable(ArTa.markerDrawableIdle, 2.5, {
        onClick: Marker.prototype.getOnClickTrigger(this)
    });

    this.markerDrawableSelected = new AR.ImageDrawable(ArTa.markerDrawableSelected, 2.5, {
        opacity: 0.0,
        onClick: null
    });

    this.titleLabel = new AR.Label(dataPOI.title.trunc(10), 1, {
        zOrder: 1,
        translate: {
            y: 0.5
        },
        style: {
            textColor: '#FFFFFF',
            fontStyle: AR.CONST.FONT_STYLE.BOLD
        }
    });

    this.descriptionLabel = new AR.Label(dataPOI.description.trunc(15), 0.8, {
        zOrder: 1,
        translate: {
            y: -0.5
        },
        style: {
            textColor: '#FFFFFF'
        }
    });

    this.directionIndicatorDrawable = new AR.ImageDrawable(ArTa.markerDrawableDirectionIndicator, 0.1, {
        enabled: false,
        verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
    });

    this.markerObject = new AR.GeoObject(markerLocation, {
        drawables: {
            cam: [this.markerDrawableIdle, this.markerDrawableSelected, this.titleLabel, this.descriptionLabel],
            indicator: this.directionIndicatorDrawable
        }
    });

    return this;
}

Marker.prototype.getOnClickTrigger = function(marker) {

    return function() {

        if (!Marker.prototype.isAnyAnimationRunning(marker)) {
            if (marker.isSelected) {
                Marker.prototype.setDeselected(marker);
            } else {
                Marker.prototype.setSelected(marker);
                try {
                    ArTa.onMarkerSelected(marker);
                } catch (err) {
                    alert(err);
                }

            }
        }
        return true;
    };
};

Marker.prototype.setSelected = function(marker) {
    marker.isSelected = true;
    if (marker.animationGroupSelected === null) {
        var easingCurve = new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {amplitude: 2.0});

        //(target, property, mulai PropertyAnimation, selesai, durasi)
        var hideIdleDrawableAnimation = new AR.PropertyAnimation(
            marker.markerDrawableIdle, "opacity", null, 0.0, changeAnimationDuration);
        var showSelectedDrawableAnimation = new AR.PropertyAnimation(
            marker.markerDrawableSelected, "opacity", null, 1.0, changeAnimationDuration);

        //(target, property, mulai PropertyAnimation, selesai, durasi, animasi)
        var idleDrawableResizeAnimationX = new AR.PropertyAnimation(
            marker.markerDrawableIdle, 'scale.x', null, 1.2, resizeAnimationDuration, easingCurve);
        var selectedDrawableResizeAnimationX = new AR.PropertyAnimation(
            marker.markerDrawableSelected, 'scale.x', null, 1.2, resizeAnimationDuration, easingCurve);
        var titleLabelResizeAnimationX = new AR.PropertyAnimation(
            marker.titleLabel, 'scale.x', null, 1.2, resizeAnimationDuration, easingCurve);
        var descriptionLabelResizeAnimationX = new AR.PropertyAnimation(
            marker.descriptionLabel, 'scale.x', null, 1.2, resizeAnimationDuration, easingCurve);

        var idleDrawableResizeAnimationY = new AR.PropertyAnimation(
            marker.markerDrawableIdle, 'scale.y', null, 1.2, resizeAnimationDuration, easingCurve);
        var selectedDrawableResizeAnimationY = new AR.PropertyAnimation(
            marker.markerDrawableSelected, 'scale.y', null, 1.2, resizeAnimationDuration, easingCurve);
        var titleLabelResizeAnimationY = new AR.PropertyAnimation(
            marker.titleLabel, 'scale.y', null, 1.2, resizeAnimationDuration, easingCurve);
        var descriptionLabelResizeAnimationY = new AR.PropertyAnimation(
            marker.descriptionLabel, 'scale.y', null, 1.2, resizeAnimationDuration, easingCurve);

        marker.animationGroupSelected = new AR.AnimationGroup(AR.CONST.ANIMATION_GROUP_TYPE.PARALLEL, [
            hideIdleDrawableAnimation,
            showSelectedDrawableAnimation,
            idleDrawableResizeAnimationX,
            selectedDrawableResizeAnimationX,
            titleLabelResizeAnimationX,
            descriptionLabelResizeAnimationX,
            idleDrawableResizeAnimationY,
            selectedDrawableResizeAnimationY,
            titleLabelResizeAnimationY,
            descriptionLabelResizeAnimationY
        ]);
    }

    marker.markerDrawableIdle.onClick = null;
    marker.markerDrawableSelected.onClick = Marker.prototype.getOnClickTrigger(marker);
    marker.directionIndicatorDrawable.enabled = true;
    marker.animationGroupSelected.start();
};

Marker.prototype.setDeselected = function(marker) {

    marker.isSelected = false;

    if (marker.animationGroupIdle === null) {
        var easingCurve = new AR.EasingCurve(AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC, {amplitude: 2.0});

        var showIdleDrawableAnimation = new AR.PropertyAnimation(
            marker.markerDrawableIdle, "opacity", null, 1.0, changeAnimationDuration);
        var hideSelectedDrawableAnimation = new AR.PropertyAnimation(
            marker.markerDrawableSelected, "opacity", null, 0, changeAnimationDuration);
        var idleDrawableResizeAnimationX = new AR.PropertyAnimation(
            marker.markerDrawableIdle, 'scale.x', null, 1.0, resizeAnimationDuration, easingCurve);
        var selectedDrawableResizeAnimationX = new AR.PropertyAnimation(
            marker.markerDrawableSelected, 'scale.x', null, 1.0, resizeAnimationDuration, easingCurve);
        var titleLabelResizeAnimationX = new AR.PropertyAnimation(
            marker.titleLabel, 'scale.x', null, 1.0, resizeAnimationDuration, easingCurve);
        var descriptionLabelResizeAnimationX = new AR.PropertyAnimation(
            marker.descriptionLabel, 'scale.x', null, 1.0, resizeAnimationDuration, easingCurve);
        var idleDrawableResizeAnimationY = new AR.PropertyAnimation(
            marker.markerDrawableIdle, 'scale.y', null, 1.0, resizeAnimationDuration, easingCurve);
        var selectedDrawableResizeAnimationY = new AR.PropertyAnimation(
            marker.markerDrawableSelected, 'scale.y', null, 1.0, resizeAnimationDuration, easingCurve);
        var titleLabelResizeAnimationY = new AR.PropertyAnimation(
            marker.titleLabel, 'scale.y', null, 1.0, resizeAnimationDuration, easingCurve);
        var descriptionLabelResizeAnimationY = new AR.PropertyAnimation(
            marker.descriptionLabel, 'scale.y', null, 1.0, resizeAnimationDuration, easingCurve);

        marker.animationGroupIdle = new AR.AnimationGroup(AR.CONST.ANIMATION_GROUP_TYPE.PARALLEL, [
            showIdleDrawableAnimation,
            hideSelectedDrawableAnimation,
            idleDrawableResizeAnimationX,
            selectedDrawableResizeAnimationX,
            titleLabelResizeAnimationX,
            descriptionLabelResizeAnimationX,
            idleDrawableResizeAnimationY,
            selectedDrawableResizeAnimationY,
            titleLabelResizeAnimationY,
            descriptionLabelResizeAnimationY
        ]);
    }

    marker.markerDrawableIdle.onClick = Marker.prototype.getOnClickTrigger(marker);
    marker.markerDrawableSelected.onClick = null;
    marker.directionIndicatorDrawable.enabled = false;
    marker.animationGroupIdle.start();
};

Marker.prototype.isAnyAnimationRunning = function(marker) {

    if (marker.animationGroupIdle === null || marker.animationGroupSelected === null) {
        return false;
    } else {
        return marker.animationGroupIdle.isRunning() === true || marker.animationGroupSelected.isRunning() === true;
    }
};

//Fungsi substring
String.prototype.trunc = function(n) {
    return this.substr(0, n - 1);
};
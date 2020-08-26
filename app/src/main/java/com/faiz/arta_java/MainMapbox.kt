package com.faiz.arta_java

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.BitmapFactory
import android.location.Location
import android.location.LocationManager
import android.os.Bundle
import android.os.PersistableBundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.faiz.arta_java.AR_View.Companion.WIKI_LAT
import com.faiz.arta_java.AR_View.Companion.WIKI_LONG
import com.mapbox.api.directions.v5.DirectionsCriteria
import com.mapbox.api.directions.v5.models.DirectionsResponse
import com.mapbox.api.directions.v5.models.DirectionsRoute
import com.mapbox.geojson.Feature
import com.mapbox.geojson.Point
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.location.LocationComponent
import com.mapbox.mapboxsdk.location.modes.CameraMode
import com.mapbox.mapboxsdk.maps.MapboxMap
import com.mapbox.mapboxsdk.maps.OnMapReadyCallback
import com.mapbox.mapboxsdk.maps.Style
import com.mapbox.mapboxsdk.style.layers.PropertyFactory.*
import com.mapbox.mapboxsdk.style.layers.SymbolLayer
import com.mapbox.mapboxsdk.style.sources.GeoJsonSource
import com.mapbox.services.android.navigation.ui.v5.NavigationLauncher
import com.mapbox.services.android.navigation.ui.v5.NavigationLauncherOptions
import com.mapbox.services.android.navigation.ui.v5.route.NavigationMapRoute
import com.mapbox.services.android.navigation.v5.navigation.NavigationRoute
import kotlinx.android.synthetic.main.activity_main_mapbox.*
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class MainMapbox : AppCompatActivity(), OnMapReadyCallback {

    var currentRoute: DirectionsRoute? = null
    var mapboxMap: MapboxMap? = null
    var navigationMapRoute: NavigationMapRoute? = null
    var locationComponent: LocationComponent? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(
            this,
            "pk.eyJ1IjoiYXBha2FiYWhydWwiLCJhIjoiY2tlODIxMmh0MTBmcDJycG83ZGF0YTBvOCJ9.WPiyOqgHv25c1NG1DzG47g"
        )
        setContentView(R.layout.activity_main_mapbox)
        mapbox.onCreate(savedInstanceState)
        mapbox.getMapAsync(this)
    }

    @SuppressLint("MissingPermission")
    override fun onMapReady(mapboxMap: MapboxMap) {
        this.mapboxMap = mapboxMap
        mapboxMap.setStyle(Style.TRAFFIC_DAY) { style ->
            enableLocationComponent(mapboxMap.style!!)
            enableLocationComponent(style)

            addDestinationIconSymbolLayer(style)

            val lm: LocationManager = getSystemService(Context.LOCATION_SERVICE) as LocationManager
            val userLocation: Location? = lm.getLastKnownLocation(LocationManager.GPS_PROVIDER)

            val destLat = intent.getStringExtra(WIKI_LAT)
            val destLong = intent.getStringExtra(WIKI_LONG)
            val originPoint: Point = Point.fromLngLat(userLocation?.longitude!!, userLocation.latitude)
            val destinationPoint: Point = Point.fromLngLat(destLong.toDouble(), destLat.toDouble())

            val source: GeoJsonSource = mapboxMap.style?.getSourceAs("destination-source-id")!!
            source.setGeoJson(Feature.fromGeometry(destinationPoint))

            getRoute(originPoint, destinationPoint)

            fab.setOnClickListener{
                val options = NavigationLauncherOptions.builder()
                    .directionsRoute(currentRoute)
                    .shouldSimulateRoute(false)
                    .build()
                NavigationLauncher.startNavigation(this, options)
            }
        }
    }

    private fun addDestinationIconSymbolLayer(style: Style) {
        style.addImage("destination-icon-id",
            BitmapFactory.decodeResource(this.resources, R.drawable.mapbox_marker_icon_default))

        val geoJsonSource = GeoJsonSource("destination-source-id")
        style.addSource(geoJsonSource)
        val destinationSymbolLayer = SymbolLayer(
            "destination-symbol-layer-id",
            "destination-source-id"
        )
        destinationSymbolLayer.withProperties(
            iconImage("destination-icon-id"),
            iconAllowOverlap(true),
            iconIgnorePlacement(true)
        )
        style.addLayer(destinationSymbolLayer)
    }

    private fun getRoute(originPoint: Point, destinationPoint: Point) {
        NavigationRoute.builder(this)
            .accessToken("pk.eyJ1IjoiYXBha2FiYWhydWwiLCJhIjoiY2tlODIxMmh0MTBmcDJycG83ZGF0YTBvOCJ9.WPiyOqgHv25c1NG1DzG47g")
            .origin(originPoint)
            .destination(destinationPoint)
            .profile(DirectionsCriteria.PROFILE_WALKING)
            .build()
            .getRoute(object : Callback<DirectionsResponse> { //6
                override fun onFailure(call: Call<DirectionsResponse>, t: Throwable) {
                    Toast.makeText(this@MainMapbox, t.localizedMessage, Toast.LENGTH_SHORT).show()
                }

                override fun onResponse(
                    call: Call<DirectionsResponse>,
                    response: Response<DirectionsResponse>
                ) {
                    currentRoute = response.body()?.routes()?.get(0)

                    if (navigationMapRoute != null) {
                        navigationMapRoute?.removeRoute()
                    } else {
                        navigationMapRoute = NavigationMapRoute(
                            null,
                            mapbox,
                            mapboxMap!!,
                            R.style.NavigationMapRoute
                        )
                    }

                    navigationMapRoute?.addRoute(currentRoute)

                }
            })
    }

    @SuppressLint("MissingPermission")
    private fun enableLocationComponent(style: Style) {
        locationComponent = mapboxMap?.locationComponent
        locationComponent?.activateLocationComponent(this, style)
        locationComponent?.isLocationComponentEnabled = true
        locationComponent?.cameraMode = CameraMode.TRACKING_GPS

    }

    override fun onStart() {
        super.onStart()
        mapbox.onStart()
    }

    override fun onStop() {
        super.onStop()
        mapbox.onStart()
    }

    override fun onPause() {
        super.onPause()
        mapbox.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapbox.onResume()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapbox.onDestroy()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapbox.onLowMemory()
    }

    override fun onSaveInstanceState(outState: Bundle, outPersistentState: PersistableBundle) {
        super.onSaveInstanceState(outState, outPersistentState)
        mapbox.onSaveInstanceState(outState)
    }
}
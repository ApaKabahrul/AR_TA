package com.faiz.arta_java

import android.annotation.SuppressLint
import android.graphics.BitmapFactory
import android.location.Location
import android.os.Bundle
import android.os.PersistableBundle
import androidx.appcompat.app.AppCompatActivity
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import com.mapbox.api.directions.v5.DirectionsCriteria
import com.mapbox.api.directions.v5.models.DirectionsResponse
import com.mapbox.api.directions.v5.models.DirectionsRoute
import com.mapbox.geojson.Feature
import com.mapbox.geojson.Point
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.location.LocationComponent
import com.mapbox.mapboxsdk.location.modes.CameraMode
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap
import com.mapbox.mapboxsdk.maps.OnMapReadyCallback
import com.mapbox.mapboxsdk.maps.Style
import com.mapbox.mapboxsdk.style.layers.PropertyFactory
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

class MapboxNav : AppCompatActivity(), OnMapReadyCallback {
    private lateinit var fusedLocationClient: FusedLocationProviderClient
    private var mapView: MapView? = null
    private var mapboxMap: MapboxMap? = null
    private var locationComponent: LocationComponent? = null
    private var currentRoute: DirectionsRoute? = null
    private var navigationMapRoute: NavigationMapRoute? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this)
        Mapbox.getInstance(
            this,
            "pk.eyJ1IjoiYXBha2FiYWhydWwiLCJhIjoiY2tlODIxMmh0MTBmcDJycG83ZGF0YTBvOCJ9.WPiyOqgHv25c1NG1DzG47g"
        )
        setContentView(R.layout.activity_main_mapbox)
        mapView = findViewById(R.id.mapbox)
        mapView!!.onCreate(savedInstanceState)
        mapView!!.getMapAsync(this)
    }

    @SuppressLint("MissingPermission")
    override fun onMapReady(mapboxMap: MapboxMap) {
        this.mapboxMap = mapboxMap
        mapboxMap.setStyle(Style.TRAFFIC_DAY) { style ->
            enabledLocationComponent(style)
            addDestinationIconSymbolLayer(style)

            val destLat = intent.getStringExtra(AR_View.WIKI_LAT)
            val destLong = intent.getStringExtra(AR_View.WIKI_LONG)

            val destinationPoint = Point.fromLngLat(destLong.toDouble(), destLat.toDouble())

            fusedLocationClient.lastLocation.addOnSuccessListener { location: Location?->
                val originPoint = Point.fromLngLat(location!!.longitude, location.latitude)
                val source = mapboxMap.style!!.getSourceAs<GeoJsonSource>("destination-source-id")
                source?.setGeoJson(Feature.fromGeometry(destinationPoint))
                getRoute(destinationPoint, originPoint)
            }

            fab.setOnClickListener{
                val options = NavigationLauncherOptions.builder()
                    .directionsRoute(currentRoute)
                    .shouldSimulateRoute(false)
                    .build()
                NavigationLauncher.startNavigation(this, options)
            }
        }
    }

    private fun getRoute(destinationPoint: Point, originPoint: Point) {
        NavigationRoute.builder(this)
            .accessToken("pk.eyJ1IjoiYXBha2FiYWhydWwiLCJhIjoiY2tlODIxMmh0MTBmcDJycG83ZGF0YTBvOCJ9.WPiyOqgHv25c1NG1DzG47g")
            .origin(originPoint).destination(destinationPoint)
            .profile(DirectionsCriteria.PROFILE_WALKING)
            .build().getRoute(object : Callback<DirectionsResponse> {
                override fun onResponse(
                    call: Call<DirectionsResponse>,
                    response: Response<DirectionsResponse>
                ) {
                    currentRoute = response.body()!!.routes()[0]
                    if (navigationMapRoute != null) {
                        navigationMapRoute!!.removeRoute()
                    } else {
                        navigationMapRoute = NavigationMapRoute(
                            null,
                            mapView!!,
                            mapboxMap!!,
                            R.style.NavigationMapRoute
                        )
                    }
                    navigationMapRoute!!.addRoute(currentRoute)
                }

                override fun onFailure(call: Call<DirectionsResponse>, t: Throwable) {}
            })
    }

    private fun addDestinationIconSymbolLayer(loadedMapStyle: Style) {
        loadedMapStyle.addImage(
            "destination-icon-id",
            BitmapFactory.decodeResource(this.resources, R.drawable.mapbox_marker_icon_default)
        )
        val geoJsonSource = GeoJsonSource("destination-source-id")
        loadedMapStyle.addSource(geoJsonSource)
        val destinationSymbolLayer =
            SymbolLayer("destination-symbol-layer-id", "destination-source-id")
        destinationSymbolLayer.withProperties(
            PropertyFactory.iconImage("destination-icon-id"),
            PropertyFactory.iconAllowOverlap(true),
            PropertyFactory.iconIgnorePlacement(true)
        )
        loadedMapStyle.addLayer(destinationSymbolLayer)
    }

    @SuppressLint("MissingPermission")
    private fun enabledLocationComponent(loadedMapStyle: Style) {
        locationComponent = mapboxMap!!.locationComponent
        locationComponent!!.activateLocationComponent(this, loadedMapStyle)
        locationComponent!!.isLocationComponentEnabled = true
        locationComponent!!.cameraMode = CameraMode.TRACKING
    }

    override fun onStart() {
        super.onStart()
        mapView!!.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView!!.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView!!.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView!!.onStop()
    }

    override fun onSaveInstanceState(outState: Bundle) {
        super.onSaveInstanceState(outState)
        mapView!!.onSaveInstanceState(outState)
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView!!.onDestroy()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView!!.onLowMemory()
    }
}
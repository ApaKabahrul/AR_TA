package com.faiz.arta_java

import android.content.Intent
import android.hardware.SensorManager
import android.location.Location
import android.location.LocationListener
import android.os.Bundle
import android.view.WindowManager
import android.webkit.WebView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.wikitude.architect.ArchitectJavaScriptInterfaceListener
import com.wikitude.architect.ArchitectStartupConfiguration
import com.wikitude.architect.ArchitectView
import com.wikitude.architect.ArchitectView.SensorAccuracyChangeListener
import org.json.JSONException
import org.json.JSONObject
import java.io.IOException

class AR_View : AppCompatActivity(), LocationListener, ArchitectJavaScriptInterfaceListener {
    private var architectView: ArchitectView? = null
    private var locationProvider: LocationProvider? = null
    private val errorCallback = LocationProvider.ErrorCallback  {
        Toast.makeText(this@AR_View,"Nyalakan GPS dan restart activity",Toast.LENGTH_LONG).show()
    }
    private val sensorAccuracyChangeListener = SensorAccuracyChangeListener { accuracy ->
        if (accuracy < SensorManager.SENSOR_STATUS_ACCURACY_MEDIUM) { // UNRELIABLE = 0, LOW = 1, MEDIUM = 2, HIGH = 3
            Toast.makeText(this@AR_View,"Mohon kalibrasikan kompas perangkat",Toast.LENGTH_LONG).show()
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_ar_view)

        val wiki_key: String = getString(R.string.wiki_key)

        locationProvider = LocationProvider(this, this, errorCallback)
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)
        //WebView.setWebContentsDebuggingEnabled(true)
        architectView = findViewById(R.id.architectViewLocation)
        val config = ArchitectStartupConfiguration()
        config.licenseKey = wiki_key
        architectView!!.onCreate(config)
        architectView!!.addArchitectJavaScriptInterfaceListener(this)
    }

    override fun onPostCreate(savedInstanceState: Bundle?) {
        super.onPostCreate(savedInstanceState)
        architectView!!.onPostCreate()
        try {
            architectView!!.load( "file:///android_asset/LBS/index.html" )
            //architectView!!.load("https://apakabahrul.github.io/")
        } catch (e: IOException) {
            e.printStackTrace()
        }
    }

    override fun onResume() {
        super.onResume()
        architectView!!.onResume()
        locationProvider!!.onResume()
        architectView!!.registerSensorAccuracyChangeListener(sensorAccuracyChangeListener)
    }

    override fun onDestroy() {
        super.onDestroy()
        architectView!!.clearCache()
        architectView!!.onDestroy()
        architectView!!.removeArchitectJavaScriptInterfaceListener(this)
    }

    override fun onPause() {
        super.onPause()
        architectView!!.onPause()
        locationProvider!!.onPause()
        architectView!!.unregisterSensorAccuracyChangeListener(sensorAccuracyChangeListener)
    }

    override fun onLocationChanged(location: Location) {
        val accuracy: Float = if (location.hasAccuracy()) location.accuracy else 1000.0F
        if (location.hasAltitude()) {
            architectView!!.setLocation(
                location.latitude,
                location.longitude,
                location.altitude,
                accuracy
            )
        } else {
            architectView!!.setLocation(location.latitude, location.longitude, accuracy.toDouble())
        }
    }

    override fun onStatusChanged(provider: String, status: Int, extras: Bundle) {}
    override fun onProviderEnabled(provider: String) {}
    override fun onProviderDisabled(provider: String) {}
    override fun onJSONObjectReceived(jsonObject: JSONObject) {
        try {
            when (jsonObject.getString("action")) {
                "intent_activity" -> {
                    val detailIntent = Intent(this@AR_View, ImageRecognition::class.java)
                    startActivity(detailIntent)
                }
                "poi" -> {
                    val i = Intent(this, MapboxNav::class.java)
                    i.putExtra(WIKI_LAT, jsonObject.getString("latitude"))
                    i.putExtra(WIKI_LONG, jsonObject.getString("longitude"))
                    startActivity(i)
                }
            }
        } catch (e: JSONException) {
            Toast.makeText(this, e.localizedMessage, Toast.LENGTH_SHORT).show()
        }
    }

    companion object {
        const val WIKI_LAT = "wiki_lat"
        const val WIKI_LONG = "wiki_long"
    }
}
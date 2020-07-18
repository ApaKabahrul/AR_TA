package com.faiz.arta_java;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.hardware.SensorManager;
import android.location.Location;
import android.location.LocationListener;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebView;
import android.widget.ImageButton;
import android.widget.Toast;

import com.wikitude.architect.ArchitectJavaScriptInterfaceListener;
import com.wikitude.architect.ArchitectStartupConfiguration;
import com.wikitude.architect.ArchitectView;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

public class AR_View extends AppCompatActivity implements LocationListener, ArchitectJavaScriptInterfaceListener {

    private ArchitectView architectView;
    private LocationProvider locationProvider;

    ImageButton search;

    private final LocationProvider.ErrorCallback errorCallback = new LocationProvider.ErrorCallback() {
        @Override
        public void noProvidersEnabled() {
            Toast.makeText(AR_View.this, "Please enable GPS and Network positioning in your Settings and restart the Activity", Toast.LENGTH_LONG).show();
        }
    };

    private final ArchitectView.SensorAccuracyChangeListener sensorAccuracyChangeListener = new ArchitectView.SensorAccuracyChangeListener() {
        @Override
        public void onCompassAccuracyChanged(int accuracy) {
            if ( accuracy < SensorManager.SENSOR_STATUS_ACCURACY_MEDIUM) { // UNRELIABLE = 0, LOW = 1, MEDIUM = 2, HIGH = 3
                Toast.makeText(AR_View.this, "Please re-calibrate compass by waving your device in a figure 8 motion", Toast.LENGTH_LONG ).show();
            }
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ar_view);

        locationProvider = new LocationProvider(this, this, errorCallback);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        WebView.setWebContentsDebuggingEnabled(true);

        this.architectView = this.findViewById( R.id.architectView );
        final ArchitectStartupConfiguration config = new ArchitectStartupConfiguration();
        config.setLicenseKey("IeQVz8D2u9RW8vt1yCQHzT+2ekMTnSrkpXtkOl0Eqgg1IfZAPSdtmSKY57YE1+i7qId/b2KuriaBhBbAUwZhBSx8xZkE9E5EzlGr9WJrDV28fjrhpWKkCe4TfQN6dlgZKRFc9IIZmSOHYv7zzQSH0tlA8wDa5l7wLKDQbdEPFHRTYWx0ZWRfX9E4gmog7c+1qQU+yYI9ckaCA/OMxkvT9++FlBlkKbFT2IxL8rR5eRBVLra501Im1JsyfIaCsLUCJ3xzt4kjY/VDFo5NNYG+SradPdBFohmmYs8coAcZb2uJpOBpiy3tlJJHjfMGEOokiJzhdKd0zfXogoPAMOyDiKNr11J6px5uRckCrsHym/tC8QE2uRwfyVHwG39zrVM6x0Pn3rGplbqYIVG4dMmQ7E2B2Xdfu0OnGPRlldjY2UfD8J8e0qFPAsrjR48JjeH+SNB6/VoC41ndGzY5paWKNh9KRNVMeyvvs6Lp7pFNBPRjhLB8U8bl6opB7iVeGlYj2oRCggwPTjC9RjJusOHdN+Va57JSNgOMDnbJ5KFWdu8Lpc97jSIexb38CU0QZsIEe3D+8QQ50s8b6psz4PhcmeKbrxsWD+dymuH2bbWeRWiS4bwaZLQrf9CuxrFOV81UhmJUpS/r8peTWakN62iF5YLPg+DCNpNTJbe1FICJTJbRKPFlIfIa2zCFh57VddC1HyrfajWKa3PUcTSX7wcqzziIOhytoRS+yIaKuZ4NYsUVUSgajSXJZxA+O8seXEohMbaY6/oCXMTGTBwVdqoPSZFxSOqMlX3Sv0v2ffKmPf4=");
        this.architectView.onCreate( config );

        search = findViewById(R.id.cari);


        search.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(AR_View.this, SearchActivity.class);
                startActivity(intent);
            }
        });

        architectView.addArchitectJavaScriptInterfaceListener(this);
    }

    @Override
    protected void onPostCreate(@Nullable Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);

        this.architectView.onPostCreate();
        try {
            //this.architectView.load( "file:///android_asset/POI4/index.html" );
            this.architectView.load( "https://apakabahrul.github.io/" );
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        architectView.onResume();
        locationProvider.onResume();
        architectView.registerSensorAccuracyChangeListener(sensorAccuracyChangeListener);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        architectView.onDestroy();
        architectView.removeArchitectJavaScriptInterfaceListener(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        architectView.onPause();
        architectView.unregisterSensorAccuracyChangeListener(sensorAccuracyChangeListener);
    }

    @Override
    public void onLocationChanged(Location location) {
        float accuracy = location.hasAccuracy() ? location.getAccuracy() : 1000;
        if (location.hasAltitude()) {
            architectView.setLocation(location.getLatitude(), location.getLongitude(), location.getAltitude(), accuracy);
        } else {
            architectView.setLocation(location.getLatitude(), location.getLongitude(), accuracy);
        }
    }

    @Override
    public void onStatusChanged(String provider, int status, Bundle extras) {

    }

    @Override
    public void onProviderEnabled(String provider) {

    }

    @Override
    public void onProviderDisabled(String provider) {

    }

    @Override
    public void onJSONObjectReceived(JSONObject jsonObject) {
        final Intent detailIntent = new Intent(AR_View.this, ImageRecognition.class);
        startActivity(detailIntent);
    }
}

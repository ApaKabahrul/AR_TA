package com.faiz.arta_java;

import android.annotation.SuppressLint;
import android.content.Context;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class LocationProvider {

    private final @NonNull
    LocationListener locationListener;
    private final @NonNull ErrorCallback callback;
    private final @Nullable
    LocationManager	locationManager;
    private static final int LOCATION_UPDATE_MIN_TIME_GPS = 1000;
    private static final int LOCATION_UPDATE_DISTANCE_GPS = 0;
    private static final int LOCATION_UPDATE_MIN_TIME_NW = 1000;
    private static final int LOCATION_UPDATE_DISTANCE_NW = 0;
    private static final int LOCATION_OUTDATED_WHEN_OLDER_MS = 1000 * 60 * 10;
    private boolean gpsProviderEnabled, networkProviderEnabled;

    public LocationProvider(@NonNull final Context context,
                            @NonNull final LocationListener locationListener,
                            @NonNull final ErrorCallback callback) {
        super();
        this.locationListener = locationListener;
        this.callback = callback;
        locationManager = (LocationManager)context.getSystemService( Context.LOCATION_SERVICE );

        if (this.locationManager != null) {
            gpsProviderEnabled = this.locationManager.isProviderEnabled( LocationManager.GPS_PROVIDER );
            networkProviderEnabled = this.locationManager.isProviderEnabled( LocationManager.NETWORK_PROVIDER );
        }
    }

    public void onPause() {
        if (this.locationManager != null && (this.gpsProviderEnabled || this.networkProviderEnabled)) {
            this.locationManager.removeUpdates( this.locationListener );
        }
    }

    @SuppressLint("MissingPermission")
    public void onResume() {
        if (this.locationManager != null) {
            this.gpsProviderEnabled = this.locationManager.isProviderEnabled( LocationManager.GPS_PROVIDER );
            this.networkProviderEnabled = this.locationManager.isProviderEnabled( LocationManager.NETWORK_PROVIDER );

            if ( this.gpsProviderEnabled ) {
                final Location lastKnownGPSLocation = this.locationManager.getLastKnownLocation( LocationManager.GPS_PROVIDER );
                if ( lastKnownGPSLocation != null && lastKnownGPSLocation.getTime() > System.currentTimeMillis() - LOCATION_OUTDATED_WHEN_OLDER_MS ) {
                    locationListener.onLocationChanged( lastKnownGPSLocation );
                }
                if (locationManager.getProvider(LocationManager.GPS_PROVIDER)!=null) {
                    this.locationManager.requestLocationUpdates( LocationManager.GPS_PROVIDER, LOCATION_UPDATE_MIN_TIME_GPS, LOCATION_UPDATE_DISTANCE_GPS, this.locationListener );
                }
            }

            if ( this.networkProviderEnabled ) {
                final Location lastKnownNWLocation = this.locationManager.getLastKnownLocation( LocationManager.NETWORK_PROVIDER );
                if ( lastKnownNWLocation != null && lastKnownNWLocation.getTime() > System.currentTimeMillis() - LOCATION_OUTDATED_WHEN_OLDER_MS ) {
                    locationListener.onLocationChanged( lastKnownNWLocation );
                }
                if (locationManager.getProvider(LocationManager.NETWORK_PROVIDER)!=null) {
                    this.locationManager.requestLocationUpdates( LocationManager.NETWORK_PROVIDER, LOCATION_UPDATE_MIN_TIME_NW, LOCATION_UPDATE_DISTANCE_NW, this.locationListener );
                }
            }

            if ( !this.gpsProviderEnabled && !this.networkProviderEnabled ) {
                callback.noProvidersEnabled();
            }
        }
    }

    public interface ErrorCallback {
        void noProvidersEnabled();
    }
}

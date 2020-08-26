package com.faiz.arta_java;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

import com.wikitude.architect.ArchitectStartupConfiguration;
import com.wikitude.architect.ArchitectView;

import java.io.IOException;

public class ImageRecognition extends AppCompatActivity {

    public static final String EXTRAS_KEY_POI_ID = "id";

    private ArchitectView architectView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_image_recognition);

        WebView.setWebContentsDebuggingEnabled(true);

        this.architectView = this.findViewById(R.id.architectViewImage);
        final ArchitectStartupConfiguration config = new ArchitectStartupConfiguration();
        config.setLicenseKey("IeQVz8D2u9RW8vt1yCQHzT+2ekMTnSrkpXtkOl0Eqgg1IfZAPSdtmSKY57YE1+i7qId/b2KuriaBhBbAUwZhBSx8xZkE9E5EzlGr9WJrDV28fjrhpWKkCe4TfQN6dlgZKRFc9IIZmSOHYv7zzQSH0tlA8wDa5l7wLKDQbdEPFHRTYWx0ZWRfX9E4gmog7c+1qQU+yYI9ckaCA/OMxkvT9++FlBlkKbFT2IxL8rR5eRBVLra501Im1JsyfIaCsLUCJ3xzt4kjY/VDFo5NNYG+SradPdBFohmmYs8coAcZb2uJpOBpiy3tlJJHjfMGEOokiJzhdKd0zfXogoPAMOyDiKNr11J6px5uRckCrsHym/tC8QE2uRwfyVHwG39zrVM6x0Pn3rGplbqYIVG4dMmQ7E2B2Xdfu0OnGPRlldjY2UfD8J8e0qFPAsrjR48JjeH+SNB6/VoC41ndGzY5paWKNh9KRNVMeyvvs6Lp7pFNBPRjhLB8U8bl6opB7iVeGlYj2oRCggwPTjC9RjJusOHdN+Va57JSNgOMDnbJ5KFWdu8Lpc97jSIexb38CU0QZsIEe3D+8QQ50s8b6psz4PhcmeKbrxsWD+dymuH2bbWeRWiS4bwaZLQrf9CuxrFOV81UhmJUpS/r8peTWakN62iF5YLPg+DCNpNTJbe1FICJTJbRKPFlIfIa2zCFh57VddC1HyrfajWKa3PUcTSX7wcqzziIOhytoRS+yIaKuZ4NYsUVUSgajSXJZxA+O8seXEohMbaY6/oCXMTGTBwVdqoPSZFxSOqMlX3Sv0v2ffKmPf4=");
        this.architectView.onCreate(config);


    }

    @Override
    protected void onPostCreate(@Nullable Bundle savedInstanceState) {
        super.onPostCreate(savedInstanceState);

        architectView.onPostCreate();
        try {
            architectView.load("file:///android_asset/IMG1/index.html");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        architectView.onResume();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        architectView.clearCache();
        architectView.onDestroy();
    }

    @Override
    protected void onPause() {
        super.onPause();
        architectView.onPause();
    }


}
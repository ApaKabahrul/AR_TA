package com.faiz.arta_java

import android.os.Bundle
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity
import com.wikitude.architect.ArchitectStartupConfiguration
import com.wikitude.architect.ArchitectView
import java.io.IOException

class ImageRecognition : AppCompatActivity() {
    private var architectView: ArchitectView? = null
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_image_recognition)
        //WebView.setWebContentsDebuggingEnabled(true)

        val wiki_key: String = getString(R.string.wiki_key)

        architectView = findViewById(R.id.architectViewImage)
        val config = ArchitectStartupConfiguration()
        config.licenseKey = wiki_key
        architectView!!.onCreate(config)
    }

    override fun onPostCreate(savedInstanceState: Bundle?) {
        super.onPostCreate(savedInstanceState)
        architectView!!.onPostCreate()
        try {
            architectView!!.load("file:///android_asset/IMG1/index.html")
        } catch (e: IOException) {
            e.printStackTrace()
        }
    }

    override fun onResume() {
        super.onResume()
        architectView!!.onResume()
    }

    override fun onDestroy() {
        super.onDestroy()
        architectView!!.clearCache()
        architectView!!.onDestroy()
    }

    override fun onPause() {
        super.onPause()
        architectView!!.onPause()
    }
}
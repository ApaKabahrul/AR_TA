package com.faiz.arta.retrieve_data;

class Data_Item {
    private int mId;
    private double mLongitude;
    private double mLatitude;
    private String mDescription;
    private String mName;

    public Data_Item(int id, double longitude, double latitude, String description, String name){
        mId = id;
        mLongitude = longitude;
        mLatitude = latitude;
        mDescription = description;
        mName = name;
    }

    public int getId(){
        return mId;
    }

    public double getLongitude(){
        return mLongitude;
    }

    public double getLatitude(){
        return mLatitude;
    }

    public String getDescription(){
        return mDescription;
    }

    public String getName(){
        return mName;
    }

}

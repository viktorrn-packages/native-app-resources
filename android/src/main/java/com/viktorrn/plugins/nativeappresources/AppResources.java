package com.viktorrn.plugins.nativeappresources;

import android.content.Context;

/* Utility function written by @viktorrn 24-8-13 */
public class AppResources {
    private Context context; // Context to be used throughout the class

    // Constructor to initialize the AppResources class with a Context
    public String getStringByKey(String key) throws Exception {
        int resId = context.getResources().getIdentifier(key, "string", context.getPackageName());
        // Check if the resource exists
        if (resId != 0) {
            // If the resource ID is valid, return the corresponding string
            return context.getString(resId);
        } else {
            // Handle the case where the key is not found (e.g., return a default value or error message)
            throw new Exception("Key not found");
        }
    }
}

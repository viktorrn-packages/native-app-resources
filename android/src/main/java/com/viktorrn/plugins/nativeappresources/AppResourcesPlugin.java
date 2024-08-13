package com.viktorrn.plugins.nativeappresources;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/* Utility function written by @viktorrn 24-8-13 */

@CapacitorPlugin(name = "AppResources")
public class AppResourcesPlugin extends Plugin {

    private final AppResources implementation = new AppResources();

    @PluginMethod
    public void getStringByKey(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        try {
            String internalValue = implementation.getStringByKey(value);
            ret.put("value", internalValue);
            call.resolve(ret);
        } catch (Exception e) {
            call.reject("Error occurred: " + e.getMessage());
        }
    }
}

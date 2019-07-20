package com.rxmarket;

import android.graphics.Color;
import android.view.View;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void addDefaultSplashLayout() {
        View view = new View(this);
        view.setBackgroundColor(Color.parseColor("#151A30"));
        setContentView(view);
    }
}

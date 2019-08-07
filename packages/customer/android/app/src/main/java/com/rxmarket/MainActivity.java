package com.rxmarket;

import android.graphics.Color;
import android.graphics.Typeface;
import android.os.Build;
import android.view.Gravity;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    protected void addDefaultSplashLayout() {
        LinearLayout linearLayout = new LinearLayout(this);
        linearLayout.setBackgroundColor(Color.parseColor("#151A30"));
        linearLayout.setGravity(Gravity.CENTER);

        TextView text = new TextView(this);
        text.setText(R.string.app_name);
        text.setGravity(Gravity.CENTER);
        text.setTextColor(Color.parseColor("#F7F9FC"));
        text.setTextSize(50);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            text.setFontFeatureSettings("sans-serif-medium");
        }
        text.setTypeface(null, Typeface.BOLD);
        linearLayout.addView(text);

        setContentView(linearLayout);
    }
}

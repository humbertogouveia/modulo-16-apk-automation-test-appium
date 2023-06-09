const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        platformName: "Android",
        platformVersion: "9",
        browser: "Chrome",
        deviceName: "ebac9",
        automationName: "UiAutomator2",
        app: join(process.cwd(),'app/Android-NativeDemoApp-0.4.0.apk'),
        appPackpage: "com.wdiodemoapp",
        appWaitActivity: "com.wdiodemoapp.MainActivity"

    }]
}
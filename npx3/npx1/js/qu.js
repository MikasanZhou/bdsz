"auto";
threads.start(function () {
    while (true) {
        if (currentActivity() == "com.jifen.qukan.content.view.activity.VideoNewsDetailActivity") {
            sleep(31 * 1000);
            back();
        }
    }
});
threads.start(function () {
    while (true) {
        if (currentActivity() == "com.jifen.qukan.content.view.activity.NewsDetailActivity") {
            sleep(35 * 1000);
            back();
        }
    }
});
threads.start(function () {
    while (true) {
        if (currentActivity() == "com.jifen.qukan.QuKanActivity") {
            sleep(1000);
            back();
        }
    }
});
threads.start(function () {
    while (true) {
        if (currentActivity() == "com.jifen.qukan.content.view.activity.NewsDetailActivity") {
            sleep(1000);
            swipe(1060, 1000, 1060, 960, 39);
        }
    }
});
while (true) {
    if (currentActivity() == "com.jifen.qkbase.view.activity.MainActivity") {
        sleep(1000);
        id("ik").findOne().click();
        sleep(1500);
        row("1").findOne().click();
    }
}
while (true) {
    if (text("领取").findOne()) {
        id("sj").findOne().click()
    }
}

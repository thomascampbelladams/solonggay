var loadingIndicator = (function () {
    var loadingIcons = [
        "🕐",
        "🕑",
        "🕒",
        "🕓",
        "🕔",
        "🕔",
        "🕕",
        "🕖",
        "🕗",
        "🕘",
        "🕙",
        "🕚",
        "🕛"
    ];
    var i = 0;
    var loadingIconsLength = loadingIcons.length;
    var intervalHandle = 0;

    return {
        start: function (loadingClassName, intervalLength) {
            intervalHandle = setInterval(function () {
                if (i >= loadingIconsLength-1) {
                    i = 0;
                } else {
                    i++;
                }

                document.querySelector("." + loadingClassName).innerHTML = loadingIcons[i];
            }, intervalLength);
        },
        stop: function () {
            clearInterval(intervalHandle);
        }
    }
})();

if (document.readyState === "complete" || document.readyState === "interactive") {
    loadingIndicator.start("loading-indicator", 1000);
} else {
    document.addEventListener("DOMContentLoaded", function () {
        loadingIndicator.start("loading-indicator", 1000);
    }, false);
}
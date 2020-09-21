var TouchScreenDetect = (function () {
    return {
        Detect: function () {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;

            return /windows phone/i.test(userAgent) || /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
        }
    }
})();
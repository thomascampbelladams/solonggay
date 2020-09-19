var PreloadAssets = (function () {
    var midiPlayLength = 0;

    function preloadSound(src) {
        var sound = (src.indexOf(".mid") > -1) ? document.createElement("embed") : document.createElement("audio");

        if ("src" in sound) {
            sound.autoPlay = false;
        }
        else {
            sound = document.createElement("bgsound");
            sound.volume = -10000;
        }
        sound.src = src;
        document.body.appendChild(sound);
        return sound;
    }

    function preLoadMidi(midiAddress) {
        return new Promise((resolve, reject) => {
            MIDIjs.get_duration(midiAddress, function (seconds) {
                midiPlayLength = seconds * 1000;
                resolve();
            });
        });
    }

    return {
        init: function (mp3Background, midiBackground) {
            return new Promise((resolve, reject) => {
                try {
                    preloadSound(mp3Background).addEventListener("canplaythrough", function () {
                        preLoadMidi(midiBackground).then(function () {
                            MIDIjs.play(midiUrl);
                            MIDIjs.stop();
                            resolve();
                        });
                    });
                } catch {
                    reject();
                }
            });
        },
        getMidiLength: function () {
            return midiPlayLength;
        }
    }
})();
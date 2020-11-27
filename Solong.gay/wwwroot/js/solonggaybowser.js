var midiUrl = "assets/overworld.mid";
var filesToLoad = [
	"assets/overworld.mid",
	"assets/sm64_mario_so_long_bowser_LjCg641.mp3",
	"js/pat/arachno-120.pat",
	"js/pat/arachno-127.pat",
	"js/pat/arachno-95.pat",
	"js/pat/MT32Drums/mt32drum-1.pat",
	"js/pat/MT32Drums/mt32drum-11.pat",
	"js/pat/MT32Drums/mt32drum-16.pat",
	"js/pat/MT32Drums/mt32drum-19.pat",
	"js/pat/MT32Drums/mt32drum-2.pat",
	"js/pat/MT32Drums/mt32drum-22.pat",
	"js/pat/MT32Drums/mt32drum-3.pat",
	"js/pat/MT32Drums/mt32drum-41.pat",
	"js/pat/MT32Drums/mt32drum-7.pat"
];

function playMusicLoop(midiLength) {
	var sound = new Audio();

	sound.src = "assets/sm64_mario_so_long_bowser_LjCg641.mp3";
	sound.play();
	sound.onended = function () {
		setTimeout(playMusicLoop, midiLength);
		MIDIjs.play(midiUrl);
	};
}

function start() {
	document.querySelector(".loading").classList.add("hidden");
	document.querySelector(".content").classList.remove("hidden");

	playMusicLoop(midiPlayLength);
}

var queue = new createjs.LoadQueue(false);
var playButton = document.querySelector(".play-button");
var userEvent = (TouchScreenDetect.Detect()) ? "touchstart" : "click";
var midiPlayLength = 0;

queue.on("complete", function () {
	loadingIndicator.stop();

	document.querySelector(".loading-indicator").classList.add("hidden");
	playButton.classList.remove("hidden");
});

MIDIjs.get_duration(midiUrl, function (seconds) {
	midiPlayLength = seconds * 1000;

	queue.loadManifest(filesToLoad);
});
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	
	// vid.load();
	
	// vid.play();

	

});


let vid = document.getElementById("player1");

// vid.addEventListener("load", function() {
vid.autoplay = false;
vid.loop = false;
// });

// let playB = document.getElementById("play");
// let currVolume = document.getElementById("slider").value;

// playB.addEventListener("click", function () {
// 	vid.play();
// 	vid.volume = currVolume / 200;
	
// });

let pauseB = document.getElementById("pause");

pauseB.addEventListener("click", function () {
	vid.pause();
});

let speedUp = document.getElementById("faster");

speedUp.addEventListener("click", function () {
	vid.playbackRate += 0.1; 
	console.log("Playback rate is", vid.playbackRate)
});

let speedDown = document.getElementById("slower");

speedDown.addEventListener("click", function () {
	vid.playbackRate -= 0.1; 
	console.log("Playback rate is", vid.playbackRate)
});

let vol = document.getElementById("slider")



// vol.getEventListener("click", function () {
// 	currVolume = vol.value;
// });
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

let shutUp = document.getElementById("mute")

shutUp.addEventListener("click", function(){
    if (vid.muted == true){
        vid.muted = false
        shutUp.innerHTML = "Mute"
        shutUp.innerText = "Mute"

    }
    else if (vid.muted == false){
        vid.muted = true
        shutUp.innerHTML = "Unmute"
        shutUp.innerText = "Unmute"

    }
    // vid.muted = true

})

let theZoomies = document.getElementById("skip")

theZoomies.addEventListener("click", function(){
	if (vid.currentTime < 57.453968){
		vid.currentTime = vid.currentTime + 10
	}
	else {vid.currentTime = 0.00}
	console.log("Current location is", vid.currentTime)
})

let boomer = document.getElementById("vintage")

boomer.addEventListener("click", function(){
    cssPath ="css/video.css"
    vid.setAttribute("class", "oldSchool");
})

let doomer = document.getElementById("orig")

doomer.addEventListener("click", function(){
    cssPath ="css/video.css"

    vid.setAttribute("class", "video");

})




// This code is from W3Schools //
var slider = document.getElementById("slider");
var output = document.getElementById("volume");
output.innerHTML = slider.value + "%";

slider.oninput = function() {
//   output.innerHTML = this.value + "%";
} 
// End code from W3Schools //


let playB = document.getElementById("play");
// let currVolume = document.getElementById("slider").value;

playB.addEventListener("click", function () {
    vid.play();
    vid.volume = slider.value / 100;
	output.innerHTML = slider.value + "%";

});

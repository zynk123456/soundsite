let audio = new Audio("scaresound.mp3");

function playSound() {
    // Try to play the audio
    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => console.log("Autoplay blocked, user interaction needed."));
    }
}

// Add event listener for manual clicks
document.body.addEventListener("click", playSound);

// Simulate a click after 1 second
window.addEventListener("load", function() {
    setTimeout(function() {
        document.body.click(); // Trigger the click event programmatically
    }, 1000);
});

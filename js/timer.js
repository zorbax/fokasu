var secondsRemaining;
var intervalHandle;

function tick() {
    var timeDisplay = document.getElementById('time');

    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    if (sec < 10) {
        sec = '0' + sec;
    }
    var message = min.toString() + ':' + sec;
    timeDisplay.innerHTML = message;

    if (secondsRemaining === 0) {

        setTimeout(popup, 200);
        audioPlay();
        clearInterval(intervalHandle);
    }
    secondsRemaining--;
    clearInterval(tick2);
}

function startCountdown() {
    // minutes for timer №1
    var minutes = 52;
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }
    secondsRemaining = minutes * 60;
    intervalHandle = setInterval(tick, 1000);


}
function tick2() {

    var timeDisplay2 = document.getElementById('time2');

    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    if (sec < 10) {
        sec = '0' + sec;
    }

    var message = min.toString() + ':' + sec;

    timeDisplay2.innerHTML = message;

    if (secondsRemaining === 0) {

        setTimeout(popup2, 200);
        audioPlay2();
        clearInterval(intervalHandle);
    }
    secondsRemaining--;
    clearInterval(tick);
}
function startCountdown2() {
    // minutes for timer №2
    var minutes = 17;
    if (isNaN(minutes)) {
        alert("Please enter a number!");
        return;
    }

    secondsRemaining = minutes * 60;
    intervalHandle = setInterval(tick2, 1000);
    $("#time").fadeOut(10);
    $("#time2").fadeIn(300);
    $(".page-wrapper").fadeOut(300);
    audio.pause();
    audio2.load();
    audio2.volume = 1.0;

}
$('.button-circle').on('click', function(){
    startCountdown();
    $(this).fadeOut(1500);
    audio.load();
    audio2.load();
});

$('.ok').on('click', function(){
    startCountdown2();

});
$('.ok2').on('click', function(){
    $(".page-wrapper2").fadeOut(200);
    $("#time2").fadeOut(200);
    $("#time").fadeIn(300);

    startCountdown();
    audio2.pause();
});
function popup() {
    $(".page-wrapper").fadeIn(300);
}
function popup2() {
    $(".page-wrapper2").fadeIn(400);
}

var audio = $('#clickSound')[0];
function audioPlay() {
    audio.play();
}
var audio2 = $("#clickSound2")[0];
function audioPlay2() {
    audio2.play();
    audio2.volume = 1.0;

};

var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var userpattern = [];
var level=0;
$(document).keypress(function () {
    if (level === 0) {
        nextSequence();
    }
})
function nextSequence() {
    userpattern = [];
    level++;
    $("#level-title").text("Level" + " " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChooseColor = buttonColor[randomNumber];
    var audio = new Audio("sounds/" + randomChooseColor + ".mp3");
    audio.play();
    $("#"+randomChooseColor).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(randomChooseColor);
}
$(".btn").click(function(){
    var color=$(this).attr("id");
    userpattern.push(color);
    var audio = new Audio("sounds/"+color+".mp3");
    audio.play();
    animateButton(color);
    checkAnswer(userpattern.length-1);
})
function animateButton(colorGo){
$("#"+colorGo).addClass("pressed");
setTimeout(function(){
    $("#"+colorGo).removeClass("pressed");
},100);
}
function checkAnswer(checkAns){
    if(userpattern[checkAns]===gamePattern[checkAns]){
        if(gamePattern.length===userpattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        var audio=new Audio("./sounds/wrong.mp3")
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("GAme over press any key to start");
        startOver();
    }
}
function startOver(){
    level=0;
    gamePattern=[];
}
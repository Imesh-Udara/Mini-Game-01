var girl = document.getElementById("girl");
idleImageNumber = 0;
idleAnim = 0;
runImageNumber = 0;
runAnim = 0;


function idleAnimation(){
    idleImageNumber = idleImageNumber + 1;

    if(idleImageNumber == 10){
        idleImageNumber = 0;
    }

    girl.src = "images/character/Idle__00"+idleImageNumber+".png";

}

function idleAnimationsStarts(){
    idleAnim = setInterval(idleAnimation, 150);
}

function runAnimation(){

    runImageNumber = runImageNumber + 1;
    girl.src = "images/character/Run__00"+runImageNumber+".png ";
    if(runImageNumber == 9){
        runImageNumber = 0;
    }
}

function runAnimationStarts(){
    runAnim = setInterval(runAnimation,100);
    clearInterval(idleAnim);
}

moveBackgroundAnimationId = 0;

function keyCheck(event){
    // alert(event.which);
    // enter = 13

    var keyCode = event.which;

    if(keyCode == 13){
        if(runAnim == 0){
            runAnimationStarts();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
    }

    
}

var backgroundPositionX = 0;

function moveBackground(){

    backgroundPositionX = backgroundPositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";
}
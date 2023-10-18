var girl = document.getElementById("girl");
idleImageNumber = 0;
idleAnim = 0;
runImageNumber = 0;
runAnim = 0;

//Sounds

function playMusic(){
    var myBackgroundMusic = new Audio('background.mp3');
myBackgroundMusic.play();
}



//idleAnimation

function idleAnimation(){
    idleImageNumber = idleImageNumber + 1;

    if(idleImageNumber == 10){
        idleImageNumber = 0;
    }

    girl.src = "images/character/Idle__00"+idleImageNumber+".png";
    // myBackgroundMusic.play();

}

function idleAnimationsStarts(){
    idleAnim = setInterval(idleAnimation, 150);
}

//run animation

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

//jumpAnimation
jumpImageNumber = 0;
jumpAnimationNumber = 0;
girlMarginTop = 647;

function jumpAnimation(){
    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 5){
        girlMarginTop = girlMarginTop - 35;
        girl.style.marginTop  = girlMarginTop + "px";
    }

    if (jumpImageNumber >= 6){
        girlMarginTop = girlMarginTop + 35;
        girl.style.marginTop  = girlMarginTop + "px";
    }


    if(jumpImageNumber == 10){
        jumpImageNumber = 0;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStarts();
    }
    girl.src = "images/character/Jump__00"+jumpImageNumber+".png ";
}

function jumpAnimationStarts(){

    clearInterval(idleAnim);
    runImageNumber = 0;
    clearInterval(runAnim);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}


//key check code

moveBackgroundAnimationId = 0;

function keyCheck(event){
    // alert(event.which);
    // enter = 13
    // space = 32

    var keyCode = event.which;

    if(keyCode == 13){
        if(runAnim == 0){
            runAnimationStarts();
        }
        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }

        if(boxAnimationId == 0){
            boxAnimationId = setInterval(boxAnimation,100);
        }
        /////////////////////////////////////////////////
        if(box02AnimationId == 0){
            box02AnimationId = setInterval(box02Animation,100);
        }
    }

    if(keyCode == 32){
        if(jumpAnimationNumber == 0){
            jumpAnimationStarts();
        }

        if(moveBackgroundAnimationId == 0){
            moveBackgroundAnimationId = setInterval(moveBackground,100);
        }
        if(boxAnimationId == 0){
            boxAnimationId = setInterval(boxAnimation,100);
        }
        //////////////////////////////////////////////////
        if(box02AnimationId == 0){
            box02AnimationId = setInterval(box02Animation,100);
        }
    }

    
}

var backgroundPositionX = 0;
var score = 0;

function moveBackground(){

    backgroundPositionX = backgroundPositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px";
    score = score + 1;
    document.getElementById("score").innerHTML = score;
}

boxMarginLeft = 1540;

function createBoxes(){

    for(var i=0;i<= 10; i++){

    var box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxMarginLeft + "px";
    box.id = "box" + i ;

    // boxMarginLeft = boxMarginLeft + 800;

    if(i<5){
        boxMarginLeft = boxMarginLeft + 2000;
    }

    if(i>=5){
        boxMarginLeft = boxMarginLeft + 1000;
    }

    }

    
}

var boxAnimationId = 0;
function boxAnimation(){
    for(var i=0; i<10; i++){
        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100){
            if(girlMarginTop > 600){
                clearInterval(boxAnimationId);
        
                clearInterval(runAnim);
                runAnim = -1;
        
                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;
        
                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(girlDeadAnimation,100);
        
            }
        }
    }
}

//////////////////////////////////////////////////////////////////
box02MarginLeft = 940;
function createBoxes02(){

    for(var i=0;i<= 10; i++){

    var box02 = document.createElement("div");
    box02.className = "box02";
    document.getElementById("background").appendChild(box02);
    box02.style.marginLeft = box02MarginLeft + "px";
    box02.id = "box02" + i ;

    // boxMarginLeft = boxMarginLeft + 800;

    if(i<5){
        box02MarginLeft = box02MarginLeft + 1000;
    }

    if(i>=5){
        box02MarginLeft = box02MarginLeft + 500;
    }

    }

    
}

////////////////////////////////////////////////////////
var box02AnimationId = 0;
function box02Animation(){
    for(var i=0; i<10; i++){
        var box02 = document.getElementById("box02"+i);
        var currentMarginLeft = getComputedStyle(box02).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 35;
        box02.style.marginLeft = newMarginLeft + "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100){
            if(girlMarginTop > 600){
                clearInterval(box02AnimationId);
        
                clearInterval(runAnim);
                runAnim = -1;
        
                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;
        
                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                deadAnimationNumber = setInterval(girlDeadAnimation,100);
        
            }
        }
    }
}
//////////////////////////////////////////////////////////////////////

deadImageNumber = 0;
deadAnimationNumber = 0;
function girlDeadAnimation(){
    deadImageNumber = deadImageNumber +1;

    if(deadImageNumber == 10){
        deadImageNumber = 9;

        document.getElementById("end").style.visibility = "visible";
        document.getElementById("end-score").innerHTML = score;

    }
    girl.src = "images/character/Dead__00"+deadImageNumber+".png ";
}

function reload(){
    location.reload();
}


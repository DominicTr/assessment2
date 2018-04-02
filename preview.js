/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
var hairImg = 1,
    eyeImg = 1,
    noseImg = 1,
    mouthImg = 1;
document.getElementById("inputColor").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = this.value;
});
document.getElementById("hairSize").addEventListener("change", function(){
   document.getElementById("hair").style.width = this.value + '%';
});
document.getElementById("eyeSize").addEventListener("change", function(){
   document.getElementById("eyes").style.width = this.value + '%';
});
document.getElementById("noseSize").addEventListener("change", function(){
   document.getElementById("nose").style.width = this.value + '%';
});
document.getElementById("mouthSize").addEventListener("change", function(){
   document.getElementById("mouth").style.width = this.value + '%';
});
hair.addEventListener("click",function(){
    hairImg += 1;
    if(hairImg > 3){
        hairImg = 1;
    }
    hair.src = "img/hair" + hairImg + ".png";
});
eyes.addEventListener("click",function(){
    eyeImg += 1;
    if(eyeImg > 3){
        eyeImg = 1;
    }
    eyes.src = "img/eyes" + eyeImg + ".png";
});
nose.addEventListener("click",function(){
    noseImg += 1;
    if(noseImg > 3){
        noseImg = 1;
    }
    nose.src = "img/nose" + noseImg + ".png";
});
mouth.addEventListener("click",function(){
    mouthImg += 1;
    if(mouthImg > 3){
        mouthImg = 1;
    }
    mouth.src = "img/mouth" + mouthImg + ".png";
});

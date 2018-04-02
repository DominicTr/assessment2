var Rhair = 1,
    Reyes = 1,
    Rnose = 1,
    Rmouth = 1,
    hRange = 0,
    eRange = 0,
    nRange = 0,
    mRange = 0,
	mtimer = null;
function changeType(cType){
	if(cType == "numbers"){
		document.getElementById("hairSize").type = "number";
		document.getElementById("eyeSize").type = "number";
		document.getElementById("noseSize").type = "number";
		document.getElementById("mouthSize").type = "number";
	};
	if(cType == "ranges"){
		document.getElementById("hairSize").type = "range";
		document.getElementById("eyeSize").type = "range";
		document.getElementById("noseSize").type = "range";
		document.getElementById("mouthSize").type = "range";
	};
};
document.getElementById("numbers").addEventListener("click", function(){
    changeType("numbers");
});
document.getElementById("ranges").addEventListener("click", function(){
    changeType("ranges");
});

function randomFace(){
    var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");
                                                    
    Rhair = Math.floor((Math.random() * 3) + 1);
    Reyes = Math.floor((Math.random() * 3) + 1);
    Rnose = Math.floor((Math.random() * 3) + 1);
    Rmouth = Math.floor((Math.random() * 3) + 1);
    
    hRange = Math.floor((Math.random() * 70) + 1);
    eRange = Math.floor((Math.random() * 40) + 1);
    nRange = Math.floor((Math.random() * 30) + 1);
    mRange = Math.floor((Math.random() * 35) + 1);
    
    hair.src = "img/hair" + Rhair + ".png";
    eyes.src = "img/eyes" + Reyes + ".png";
    nose.src = "img/nose" + Rnose + ".png";
    mouth.src = "img/mouth" + Rmouth + ".png";
    
    hair.style.width = hRange + '%';
    eyes.style.width = eRange + '%';
    nose.style.width = nRange + '%';
    mouth.style.width = mRange + '%';
    
    document.getElementById("hairSize").value = hRange;
    document.getElementById("eyeSize").value = eRange;
    document.getElementById("noseSize").value = nRange;
    document.getElementById("mouthSize").value = mRange;
    /* I found this random color on https://stackoverflow.com/questions/1484506/random-color-generator 
    I don't know if I can use it
        "#"+((1<<24)*Math.random()|0).toString(16)
    */
     /*my code with the code that I found online looks like the two lines of code below  */
    document.getElementById("preview").style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
    document.getElementById("inputColor").value = document.getElementById("preview").style.backgroundColor;
}
document.getElementById("randoms").addEventListener("click", function(){
    randomFace()
});
function createFace(){
	var npreview = document.createElement("div"),
        nhair = document.createElement("img"),
        neyes = document.createElement("img"),
        nnose = document.createElement("img"),
        nmouth = document.createElement("img");
    npreview.appendChild(nhair);
    npreview.appendChild(neyes);
    npreview.appendChild(nnose);
    npreview.appendChild(nmouth);
    nhair.className = "items";
    neyes.className = "items";
    nmouth.className = "items";
    nnose.className = "items";
    nhair.id = "hair";
    neyes.id = "eyes";
    nmouth.id = "mouth";
    nnose.id = "nose";
    npreview.id = "preview";
	npreview.className = "col-xl-1 col-lg-1.5 col-md-2 col-sm-3"
    document.getElementById("display").appendChild(npreview);
    
    npreview.style.width = "100px";
    npreview.style.height = "100px";
    npreview.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    nhair.style.width = hairSize.value + '%';
    nhair.style.top ="0%";
    neyes.style.width = eyeSize.value +'%';
    neyes.style.top = "40%";
    nnose.style.width = noseSize.value + '%';
    nnose.style.top = "55%";
    nmouth.style.width = mouthSize.value + '%';
    nmouth.style.top = "75%";
    nhair.src = hair.src;
    neyes.src = eyes.src;
    nnose.src = nose.src;
    nmouth.src = mouth.src;
};
document.getElementById("createImage").addEventListener("click", function(){
    createFace();
    
});
document.getElementById("autoRandom").addEventListener("click", function(){
	mtimer = setInterval(function(){
		randomFace();
		createFace();
	},500);
});
document.getElementById("stopAutoRandom").addEventListener("click", function(){
	clearInterval(mtimer);
})
SpeechRecognition = window.webkitSpeechRecognition;

recognition = new SpeechRecognition();

function Start(){

    document.getElementById("textbox").innerHTML = " ";
    recognition.start();


}

recognition.onresult = function(event){

    console.log(event);
    speech = event.results[0][0].transcript;
    console.log(speech);
    document.getElementById("textbox").innerHTML = speech;

    if(speech=="take my selfie"){

        speak()


    }
}
function takesnapshot(){

    Webcam.snap(function(imagesnap){

        document.getElementById(result).innerHTML = "<img id='selfie' src= '" + imagesnap + "'>";

    });

}
function save(){

    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click(); 
}

function speak(){

    var synth = window.speechSynthesis;

 //   speak_data = document.getElementById("textbox").value;

    speak_data = "taking your selfie in 5 seconds"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        takesnapshot();
        save();
    }, 5000);

    


}

Webcam.set({

width:360,
height:250,
image_format : 'png',
png_quality:90

});
camera = document.getElementById("camera");


let textid = document.getElementById('text');
let conid = document.getElementById('confidence');
let infoid = document.getElementById('info');

function convert() {

    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    // This runs when the speech recognition service starts i.e recognition.start() method runs
    recognition.onstart = function() {
        infoid.innerHTML = "We are listening. Try speaking into the microphone.";
        infoid.classList.remove('red');
        infoid.classList.add('green');
    };

    recognition.onspeechend = function() {
        // when user is done speaking
        recognition.stop();
        infoid.innerHTML = "speech recognition ended,click start button to retry";
        infoid.classList.remove('green');
        infoid.classList.add('red');
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;

        textid.innerHTML = `${transcript}`;
        conid.innerHTML = `${confidence*100}%`;

    };

    // start recognition
    recognition.start();

}
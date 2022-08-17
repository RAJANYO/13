
function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/x_fuQRBvw/model.json", modelReady);
}
function modelReady() { classifier.classify(gotResults); }
function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        randomG = Math.floor(Math.random() * 255) + 1;
        randomB = Math.floor(Math.random() * 255) + 1;
        randomR = Math.floor(Math.random() * 255) + 1;

        document.getElementById('label').innerHTML = 'I Can Hear- ' + result[0].label;
        document.getElementById('label').style.color = "rgb(" + randomR + "," + randomG + "." + randomB + ")";
        document.getElementById('accuracy').innerHTML = "accuracy- " + (result[0].confidence * 100).toFixed(2) + " %";

        document.getElementById('accuracy').style.color = "rgb(" + randomR + "," + randomG + "." + randomB + ")";

        img = document.getElementById('img1')

        if (result[0].label == "boar") {
            img.src = 'Wild_Boar_29.webp';

        }
        else if (result[0].label == "mantis") {
            img.src = 'mantis.webp';

        }
        else if (result[0].label == "godzilla") {
            img.src = 'burning godzilla.jpg';

        }

    }
}


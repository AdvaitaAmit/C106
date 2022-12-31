function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IAl4htKH9/model.json', modelReady);

}

function modelReady() {
    classifier.classify( gotResults );
}

function gotResults (error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');
imggif=document.getElementById('aliens-01.gif');
imggif2=document.getElementById('aliens-02.gif');
imggif3=document.getElementById('aliens-03.gif');
imggif4=document.getElementById('aliens-04.gif');
        if (results[0].label == "Clap") {
            img.src = imggif;
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (results[0].label == "Bell") {
            img.src = 'aliens-01.png';
            img1.src = imggif2;
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (results[0].label == "Snapping") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = imggif3;
            img3.src = 'aliens-04.png';
        } else if (results[0].label == "Background Noise") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = imggif4;
        }
    }
}
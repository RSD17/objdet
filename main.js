function moveI() {

    window.location = "index.html";

}

img = "";
status = "";
objects = [];

function preload() {

    img = loadImage('dog_cat.jpg');

}

function setup() {

    canvas = createCanvas(520, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";

}

function modelLoaded() {

    console.log('Model Loaded!');
    status = true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results) {

    if (error) {

        console.error(error);

    }

    console.log(results);
    objects = results;

}

function draw() {

    image(img, 0, 0, 520, 420);

    if (status != "") {

        for (i = 0; i < objects.length; i++) {

            document.getElementById("status").innerHTML = "Status: Dectected objects";

            fill("rgb(0, 0, 0)");

            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);

            noFill();
            stroke("rgb(0, 0, 0)");
            
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }

    }
    
}
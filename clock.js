var img = "";
var cocossdStatus = "";
var resultarr = [];

function preload() {
    img = loadImage('clock.jpg');
}
function modelLoaded() {
    console.log("Model Loaded!");
    cocossdStatus = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    resultarr = results;
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
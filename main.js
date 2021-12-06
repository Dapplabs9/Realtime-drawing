noseX = 0;
noseY =  0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){
}
function setup(){
    canvas = createCanvas(550, 510);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 550);
    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on('pose', gotPoses)
}
function model_loaded(){
    console.log("model loaded");
    console.log(poseNet)
}
function draw(){
    background("white");
    text("Dhruv", 50, 400);
    textSize(difference);
    document.getElementById("square_size").innerHTML = "Width And Height of a Square will be - " + difference + "pixels"
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        console.log("noseX = " + noseX + ", noseY = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX);
    }
}
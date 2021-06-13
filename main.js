noseX = 0;
noseY = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseX = results[0].pose.nose.y;
    console.log("nose x = " + noseX);
    console.log("nose  y = " + noseY);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function draw(){
    image(video,0,0,300,300);
}
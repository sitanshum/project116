noseX=0;
noseY=0;

function preload(){
    glasses=loadImage("https://i.postimg.cc/Yq6D6tnH/glasses.png");
    mustache=loadImage("https://i.postimg.cc/V6hpV4nP/mustache.png");
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(glasses,noseX-198,noseY-81,60,40)
    image(mustache,noseX-198,noseY-55,60,30)
}

function modelLoaded(){
    console.log("model has loaded");
}

function gotPoses(results){
    if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
    }
}

function take_snapshot(){
    save("myfilterimage.png");
}
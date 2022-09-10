peter_pan_song = "";
harry_potter_theme_song="";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
    image(video, 0, 0 , 600, 530);
}
function preload(){
    peter_pan_song=loadSound("music2.mp3");
    harry_potter_theme_song=loadSound("music.mp3")
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);

        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("left Wrist X = "+leftWristx+"Left Wrist Y = "+leftWristy);

        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("Right Wrist X = "+rightWristx+"Right Wrist Y = "+rightWristy);
    }
}
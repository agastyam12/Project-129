song1 = "";
song2 = "";
songCheck = "";
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
scoreLeftWrist = 0;
function preload(){
  song1 = loadSound("music.mp3");
  song2 = loadSound("music2.mp3");
}
function setup(){
    poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}
    function modelLoaded(){
        console.log('PoseNet is Initialized');
    }

 function draw() {
     image(video , 0 , 0 , 600 , 500);
     fill("#FF0000");
     stroke("#FF0000");
     if(scoreLeftWrist > 0.2)
     {
       if(songCheck = "1playing"){
         song1.stop(song1)
         songCheck = "";
       }
     circle(leftWristX , leftWristY , 20);
     document.getElementById("song_name").innerHTML = "Song Name is DJ Harry Potter Theme Song ";
     song.play(song2);
     songCheck = "2playing";
     }
 }
function gotPoses(results){
  if(results.length > 0){
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      scoreLeftWrist = results[0].pose.keypoints[9].score;
      console.log("leftWristX = "+leftWristX + "leftWristY = "+leftWristY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = "+rightWristX + "rightWristY = "+rightWristY);
  }
}

song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
  song = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized');
}

 function draw() {
     image(video , 0 , 0 , 600 , 500);
     
 }

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX + "leftWristY = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX + "rightWristY = "+rightWristY);
        
    }
}
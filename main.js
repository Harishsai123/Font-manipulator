
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
  video = createCapture(VIDEO);
  video.size(550,500);   
  canvas = createCanvas(550,550);
  canvas.position(560,150);
  PoseNet = ml5.poseNet(video,Modelloaded);
  PoseNet.on("pose",gotposes);
}
function draw(){
    background("#808080sss");
    fill("#3BFCD9");
   textSize(difference);
   text("Harish",50,400);
    document.getElementById("font_size").innerHTML = "Size of the font is = "+difference+"px";
}

function Modelloaded(){
    console.log("Model is loaded boom!");
    
}
function gotposes(result){
  if(result.length > 0){
    console.log(result);
    noseX = result[0].pose.nose.x;
    noseY = result[0].pose.nose.y;
    console.log(" noseX = "+noseX+" noseY = "+noseY);
    leftWristX = result[0].pose.leftWrist.x;
    rightWristX = result[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log(" rightWristX = "+result[0].pose.rightWrist.x+" leftWristY = "+result[0].pose.rightWrist.y);
    console.log(" leftWristX = "+result[0].pose.leftWrist.x+" rightWristY = "+result[0].pose.leftWrist.y);  
  }
}

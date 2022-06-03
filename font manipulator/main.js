noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload() {

}
function draw() {
    document.getElementById("square_sides").innerHTML = "font size= " + difference + "px"
    background("#a9a9a9");
    fill("#F90093");
    stroke("#F90093");
    textSize(difference)
    text("isabella",noseX,noseY)
}
function setup() {
    canvas = createCanvas(550, 550)
    canvas.position(560, 150)
    video = createCapture(VIDEO)
    video.size(550, 500)
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}
function modelloaded() {
    console.log("posenet is initiallized")
}
function gotposes(results) {
    console.log("isabella")
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console / log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

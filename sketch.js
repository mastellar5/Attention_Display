// ml5 Face Detection Model
let faceapi;
let detections = [];
let isFace = false;

// Video
let video;

//Video1 and Video2
let video1 = document.getElementById("video1");
let video2 = document.getElementById("video2");

function setup() {
  
  createCanvas(360, 270);

  // Create the video and start face tracking
  video = createCapture(VIDEO);
  video.size(width, height);
  // Only need landmarks for this example
  const faceOptions = { withLandmarks: true, withExpressions: false, withDescriptors: false };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

// Start detecting faces
function faceReady() {
  faceapi.detect(gotFaces);
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result;
  
  if (detections.length > 0) {
    isFace = true
  }else{
    isFace = false;
  }

  faceapi.detect(gotFaces);
  console.log(result);
}


// Draw everything
function draw() {

  if( isFace ){
    background(178, 50, 1);
    // video1.style.opacity = "1";
    // or
    // video1.classList.toggle("visible");
  }else{
    background(0);
    // video1.style.opacity = "0";
    // or
    // video1.classList.toggle("visible");
  }

  // Just look at the first face and draw all the points
  if (detections.length > 0) {
    let points = detections[0].landmarks.positions;
    
    for (let i = 0; i < points.length; i++) {
      stroke(161, 95, 251);
      strokeWeight(4);
      point(points[i]._x, points[i]._y);
    }

  }

}
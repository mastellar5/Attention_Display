// ml5 Face Detection Model
let faceapi;
let detections = [];
let isFace = false;

// Video
let video;

function setup() {
  createCanvas(360, 270);

  // Creat the video and start face tracking
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
    background(178);
  }else{
    background(0);
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
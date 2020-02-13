// https://github.com/mtschirs/js-objectdetect/tree/master

// https://github.com/stc/face-tracking-p5js

// https://editor.p5js.org/kylemcdonald/sketches/HySO1v5hm

// https://editor.p5js.org/enauman/sketches/SkzdxAM5W

//https://editor.p5js.org/themis/sketches/WZKEAEWy5

////make sure HTTPS is checked
// var ctracker;
// var videoInput;
// function setup() {

//   // setup camera capture
//   videoInput = createCapture(VIDEO);
//   videoInput.size(600, 340);
//   videoInput.position(0, 0);
  
//   //hide video feed if you want
//   videoInput.hide();
  
//   // setup canvas
//   var cnv = createCanvas(600, 340);
//   cnv.position(0, 0);

//   // setup tracker
//   ctracker = new clm.tracker();
//   ctracker.init(pModel);
//   ctracker.start(videoInput.elt);

//   noStroke();
// }

// function draw() {
//   // background(255);
//   translate(videoInput.width, 0);
//   scale(-1,1);
//   image(videoInput,0,0,width,height)
//   // get array of face marker positions [x, y] format
//   var positions = ctracker.getCurrentPosition();
  
//   for (var i=0; i<positions.length; i++) {
//     // set the color of the ellipse based on position on screen
//     fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
//     // draw ellipse at each position point
//     ellipse(positions[i][0], positions[i][1], 5, 5);
//     //add lines to connect points
//     /*
//     strokeWeight(3);
//     stroke(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
//     if(i<positions.length-1){
//       line(positions[i][0], positions[i][1],positions[i+1][0], positions[i+1][1]);
//       } else {
//       line(positions[i][0], positions[i][1],positions[0][0], positions[0][1]);
//       }
//       */
//     }
    
  //comment loop above and uncomment below to 
  // follow the nose
  /*
  fill(255,0,0);
  
  //make sure that the array is there
  if(positions.length > 0)
  {
  var noseX = positions[37][0]; 
var noseY = positions[37][1];
  ellipse(noseX, noseY, 100, 100);
  }
  */
//}

//FACIAL DETECTION AND EXPRESSION IN JAVASCRIPT FOR MOODY BUDDHA
//https://www.youtube.com/watch?v=CVClHLwv-4I
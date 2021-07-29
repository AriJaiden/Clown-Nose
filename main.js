function preload(){
nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup() {
    Canvas=createCanvas(400, 400);
    Canvas.center();
    video=createCapture(VIDEO);
    video.position(400, 400);
    video.size(400, 400);
    video.hide();
    PoseNet=ml5.poseNet(video, modelLoaded);
    function modelLoaded(){
        console.log("PoseNet is working");
    }
  }

  
  function draw() {
      image(video, 0, 0, 400, 400);
  }

  function TakeImg(){
      save("clown_image.png");
  }

  function Activate(){
      PoseNet.on('pose',gotPoses);
      function gotPoses(results){
          if(results.length>0){
              console.log(results);
              console.log(results[0].pose.nose.x);
              console.log(results[0].pose.nose.y);
          }   
      }
  }
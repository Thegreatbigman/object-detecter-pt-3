function preload(){
    img = loadImage('bed room.jpg');
  }

  function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

 function draw()
 {
  if(status !="")
  {
    fetch(object = percent);
    Text(objects[i].label + "There are 6 big objects in the image from which cocossd model has detected 2 objects.");
    rect(objects[i].label, objects[i].y, objects[i].width, objects[i].x, objects[i].y);
  }
 }
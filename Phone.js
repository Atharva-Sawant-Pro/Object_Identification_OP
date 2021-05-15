imag="";
status="";
objects=[];
function preload(){
    imag=loadImage("Phone_img_project_WHJ-1.jpg");
}
function back(){
    window.location="index.html";
}
function setup(){
    canvas=createCanvas(550,420);
    canvas.center();
    o_d=ml5.objectDetector("cocossd",modelLoded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modelLoded(){
    console.log("Moodaal Loodaad");
    status=true;
    o_d.detect(imag,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(imag,0,0,550,420);
    if(status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status: Detected Object";
            fill("red");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("red");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        }
    }

}
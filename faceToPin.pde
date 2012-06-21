int sW = 640;
int sH = 480;
int fps = 24;
int sizeNum = 10;

int numMarkers;
Marker[] marker;

void setup(){
  size(sW,sH);
  frameRate(fps);
  oscSetup();
  numMarkers  = 7; //oscNames.length-2;
  marker = new Marker[numMarkers];
  for (int i=0;i<numMarkers;i++){
  marker[i] = new Marker(sW/2,sH/2,sizeNum,sizeNum);
  }
}

void draw(){
  oscUse();
  if(found){
    background(25);
  }else{
    background(0);
  }
    for (int i=0;i<numMarkers;i++){
      marker[i].run();
    }
}

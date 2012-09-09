//this sketch
int sW = 640;
int sH = 360;

//destination After Effects comp
int dW = 1920;
int dH = 1080;

int fps = 24;

boolean movingFace = false;

//float durationFrames = 30 * fps;
boolean motionBlur = true;
boolean applyEffects = false;
boolean applySmoothing = true;
int smoothNum = 6;
float weight = 18;
float scaleNum  = 1.0 / (weight + 2);
String scriptsFilePath = "scripts";

Data dataAE;
int counter=0;
boolean record = false;
boolean firstRun = true;

Particle[] particle;
PImage[] img;
String[] imgNames = {"dot","eyeR","eyeL","browR","browL","jaw","nose","mouth"};
boolean writeAE = true;
boolean writeMaya = false;

int startTime;

void writeAllKeys(){
    if(writeAE) AEkeysMain();  // After Effects, JavaScript
    if(writeMaya) mayaKeysMain();  // Maya, Python
}

void initSettings(){
  Settings settings = new Settings("settings.txt");
}

void setup(){
  initSettings();
  size(sW,sH);
  frameRate(fps);
  oscSetup();
  particle = new Particle[imgNames.length];
  img = new PImage[imgNames.length];
  for (int i=0;i<imgNames.length;i++){
  img[i] = loadImage(imgNames[i] + ".png");
  particle[i] = new Particle(sW/2,sH/2,img[i].width,img[i].height,img[i]);
  }
  startTime=millis();
}

void draw(){
  oscUse();
  if(record){
    background(50,0,0);
  }else{
    background(0);
  }
    for (int i=0;i<imgNames.length;i++){
      if(i==0){
      if(found){
      particle[0].run();
      }
      }else{
      particle[i].run();
      }
    }
    
  if (record) {
    counter++;
  }else if(!record && !firstRun){
    try{
      writeAllKeys();
    }catch (Exception e) {
    println("No recorded keys to write.");
    }
    exit();
  }
  if(millis()<startTime+5000){
    PFont font=createFont("Arial",24);
    textFont(font);
    textAlign(CENTER);
    fill(255,200);
    text("Press SPACE to start recording.",sW/2,sH/2,24);
  }
  
}

void keyPressed(){
if(key==' '){
record = !record;
firstRun = false;
}
}

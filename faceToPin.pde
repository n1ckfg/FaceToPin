//this sketch
int sW = 640;
int sH = 360;

//destination After Effects comp
int dW = 1920;
int dH = 1080;

int fps = 24;
float durationFrames = 10 * fps;
boolean motionBlur = true;
boolean applyEffects = false;
boolean applySmoothing = true;
int smoothNum = 6;
float weight = 18;
float scaleNum  = 1.0 / (weight + 2);
String scriptsFilePath = "scripts";

Data dataAE;
int counter=0;
int counterMax = int(durationFrames);

int sizeNum = 10;
int numParticles;
Particle[] particle;

void writeAllKeys(){
    AEkeysMain();  // After Effects, JavaScript
    //mayaKeysMain();  // Maya, Python
}

void setup(){
  size(sW,sH);
  frameRate(fps);
  oscSetup();
  numParticles  = 7; //oscNames.length-2;
  particle = new Particle[numParticles];
  for (int i=0;i<numParticles;i++){
  particle[i] = new Particle(sW/2,sH/2,sizeNum,sizeNum);
  }
}

void draw(){
  oscUse();
  if(found){
    background(25);
  }else{
    background(0);
  }
    for (int i=0;i<numParticles;i++){
      particle[i].run();
    }
    
      if (counter<counterMax) {
    counter++;
    println(counter + " / " + counterMax);
  } 
  else {
    writeAllKeys();
    exit();
  }
}

//based on oscP5parsing by andreas schlegel

import oscP5.*;
import netP5.*;

String ipNumber = "127.0.0.1";
int receivePort = 8338;
OscP5 oscP5;
NetAddress myRemoteLocation;
//---

String[] oscNames = { 
  "/found", "/gesture/eye/left", "/gesture/eye/right", "/gesture/eyebrow/left", "/gesture/eyebrow/right", "gesture/jaw", "gesture/mouth/height", "gesture/mouth/width", "gesture/nostrils", "/pose/orientation", "/pose/position", "/pose/scale"
};
boolean found;
float blinkL, blinkR, browL, browR, jaw, nose; 
PVector mouthShape = new PVector(0, 0);
PVector position = new PVector(0, 0, 0);
PVector orientation = new PVector(0, 0, 0);

float oscScaleNum = 5;

void oscSetup() {
  oscP5 = new OscP5(this, receivePort);  // start osc
  myRemoteLocation = new NetAddress(ipNumber, receivePort);
}

void oscEvent(OscMessage theOscMessage) {
  if (theOscMessage.checkAddrPattern("/found")) {
    if (theOscMessage.checkTypetag("i")) {  // types are i = int, f = float, s = String, ifs = all
      if (theOscMessage.get(0).intValue()==1) {  // commands are intValue, floatValue, stringValue
        found=true;
      }
      else if (theOscMessage.get(0).intValue()==0) {
        found=false;
      }
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/eye/left")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      blinkL = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/eye/right")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      blinkR = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/eyebrow/left")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      browL = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/eyebrow/right")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      browR = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/jaw")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      jaw = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/mouth/height")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      mouthShape.y = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/mouth/width")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      mouthShape.x = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/gesture/nostrils")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      nose = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/pose/orientation")) {
    if (theOscMessage.checkTypetag("fff")) {  // types are i = int, f = float, s = String, ifs = all
      orientation.x = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
      orientation.y = theOscMessage.get(1).floatValue();  // commands are intValue, floatValue, stringValue
      orientation.z = theOscMessage.get(2).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/pose/position")) {
    if (theOscMessage.checkTypetag("ff")) {  // types are i = int, f = float, s = String, ifs = all
      position.x = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
      position.y = theOscMessage.get(1).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  //~~~~~~~~~~
  if (theOscMessage.checkAddrPattern("/pose/scale")) {
    if (theOscMessage.checkTypetag("f")) {  // types are i = int, f = float, s = String, ifs = all
      position.z = theOscMessage.get(0).floatValue();  // commands are intValue, floatValue, stringValue
    }
  }
  oscConsole();
}

void oscConsole() {
  println("found: " + found);
  println("blink L: " + blinkL + " R: " + blinkR + "   brow L: " + browL + " R: " + browR + "   jaw: " +  jaw + "   nose: " + nose); 
  println("mouth W: " + mouthShape.x + " H: " + mouthShape.y + "   position: " + position + "   orientation: " + orientation);
}

void oscUse() {
  if (movingFace) {
    particle[0].p.x = abs(sW-position.x);  
    particle[0].p.y = position.y;
  }
  else {
    particle[0].p.x = sW/2;  
    particle[0].p.y = (sH/2)+15;
  }
  //
  particle[1].p.x = particle[0].p.x - 80; 
  particle[1].p.y = particle[0].p.y - 40 - (blinkR * 5 * oscScaleNum); 
  //~~~
  particle[2].p.x = particle[0].p.x + 80; 
  particle[2].p.y = particle[0].p.y - 40 - (blinkL * 5 * oscScaleNum); 
  //~~~
  particle[3].p.x = particle[1].p.x; 
  particle[3].p.y = particle[1].p.y-(browR * oscScaleNum); 
  //~~~
  particle[4].p.x = particle[2].p.x;
  particle[4].p.y = particle[2].p.y-(browL * oscScaleNum); 
  //~~~
  particle[5].p.x = particle[0].p.x;
  particle[5].p.y = particle[0].p.y - 20 + (jaw * oscScaleNum); 
  //~~~
  particle[6].p.x = particle[0].p.x; 
  particle[6].p.y = particle[0].p.y - 80 + (nose * oscScaleNum); 
  //~~~
  particle[7].p.x = particle[0].p.x;
  particle[7].p.y = particle[0].p.y + 50;
  particle[7].s.x = mouthShape.x * oscScaleNum + 50;
  particle[7].s.y = mouthShape.y * 2 * oscScaleNum + 10;
}










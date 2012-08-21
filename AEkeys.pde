String aeFileName = "AEscript";
String aeFilePath = scriptsFilePath;
String aeFileType = "jsx";

void AEkeysMain() {
  AEkeysBegin();
      dataAE.add("\t" + "var facecap = myComp.layers.addSolid([0, 0, 0], \"facecap\", 640, 480, 1);" + "\r");
      dataAE.add("\t" + "facecap.guideLayer = true;" + "\r");
      dataAE.add("\t" + "facecap.locked = true;" + "\r");
      dataAE.add("\t" + "facecap.property(\"position\").setValue([320,240]);" + "\r");
      dataAE.add("\t" + "facecap.property(\"opacity\").setValue(0);" + "\r");
      for (int j=0;j<imgNames.length;j++) {
        dataAE.add("\r");
        dataAE.add("\t" + "var myEffect = facecap.property(\"Effects\").addProperty(\"Point Control\");" + "\r");
        dataAE.add("\t" + "myEffect.name = \"" + imgNames[j] + "\";" + "\r");

        dataAE.add("\t" + "var p = facecap.property(\"Effects\")(\"" + imgNames[j] + "\")(\"Point\");" + "\r");
        dataAE.add("p.expression = \"\"\"smooth(.2,5)\"\"\";");
        //dataAE.add("\t" + "var r = solid.property(\"rotation\");" + "\r");
        //dataAE.add("\r");
        for (int i=0;i<counter;i++) { 
        AEkeyPos(j,i);
        }

        dataAE.add("\t" + "var solid = myComp.layers.addSolid([1.0, 0, 0], \"" + imgNames[j] + "\", 50, 50, 1);" + "\r");
        dataAE.add("\t" + "solid.guideLayer = true;" + "\r");
        dataAE.add("\t" + "solid.property(\"opacity\").setValue(33);" + "\r");
        dataAE.add("\t" + "var p = solid.property(\"position\");" + "\r");
        dataAE.add("\t" + "var expression = " + "\r");
        dataAE.add("\t" + "//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~" + "\r");
        dataAE.add("\t\t" + "\"" + "var sW = 640;" + "\"" + " +" + "\r");
        dataAE.add("\t\t" + "\"" + "var sH = 480;" + "\"" + " +" + "\r");
        dataAE.add("\t\t" + "\"" + "var dW = thisComp.width;" + "\"" + " +" + "\r");
        dataAE.add("\t\t" + "\"" + "var dH = thisComp.height;" + "\"" + " +" + "\r");
        dataAE.add("\t\t" + "\"" + "var x = fromComp(thisComp.layer(" + "\\" + "\"facecap" + "\\" + "\").effect(" + "\\" + "\"" + imgNames[j] + "\\" + "\")(" + "\\" + "\"Point" + "\\" + "\"))[0];" + "\"" + " +" + "\r");
        dataAE.add("\t\t" + "\"" + "var y = fromComp(thisComp.layer(" + "\\" + "\"facecap" + "\\" + "\").effect(" + "\\" + "\"" + imgNames[j] + "\\" + "\")(" + "\\" + "\"Point" + "\\" + "\"))[1];" + "\"" + " +" + "\r");
        dataAE.add("\t\t" + "\"" + "[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];" + "\"" + ";" + "\r");
        dataAE.add("\t" + "//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" + "\r");
        dataAE.add("\t" + "p.expression = expression;");

      }
    AEkeysEnd();   
}

float AEkeyTime(int frameNum){
  return (float(frameNum)/float(counter)) * (float(counter)/float(fps));
}

void AEkeyPos(int spriteNum, int frameNum){
  
     // smoothing algorithm by Golan Levin

   PVector lower, upper, centerNum;
     
     centerNum = (PVector) particle[spriteNum].AEpath.get(frameNum);

     if(applySmoothing && frameNum>smoothNum && frameNum<counter-smoothNum){
       lower = (PVector) particle[spriteNum].AEpath.get(frameNum-smoothNum);
       upper = (PVector) particle[spriteNum].AEpath.get(frameNum+smoothNum);
       centerNum.x = (lower.x + weight*centerNum.x + upper.x)*scaleNum;
       centerNum.y = (lower.y + weight*centerNum.y + upper.y)*scaleNum;
     }
     
     if(frameNum%smoothNum==0||frameNum==0||frameNum==counter-1){
       dataAE.add("\t\t" + "p.setValueAtTime(" + AEkeyTime(frameNum) + ", [ " + centerNum.x + ", " + centerNum.y + "]);" + "\r");
     }
}

void AEkeyScale(int spriteNum, int frameNum){
  
     // smoothing algorithm by Golan Levin

   PVector lower, upper, centerNum;
     
     centerNum = (PVector) particle[spriteNum].AEscale.get(frameNum);

     if(applySmoothing && frameNum>smoothNum && frameNum<counter-smoothNum){
       lower = (PVector) particle[spriteNum].AEscale.get(frameNum-smoothNum);
       upper = (PVector) particle[spriteNum].AEscale.get(frameNum+smoothNum);
       centerNum.x = (lower.x + weight*centerNum.x + upper.x)*scaleNum;
       centerNum.y = (lower.y + weight*centerNum.y + upper.y)*scaleNum;
     }
     
     if(frameNum%smoothNum==0||frameNum==0||frameNum==counter-1){
       dataAE.add("\t" + "facecap.property(\"scale\").setValueAtTime(" + AEkeyTime(frameNum) + ", [ " + centerNum.x + ", " + centerNum.y + "]);" + "\r");
     }
}

void AEkeyRot(int spriteNum, int frameNum){

   /*
   float lower, upper, centerNum;

     centerNum = particle[spriteNum].AErot[frameNum];

     if(applySmoothing && frameNum>smoothNum && frameNum<counter-smoothNum){
       lower = particle[spriteNum].AErot[frameNum-smoothNum];
       upper = particle[spriteNum].AErot[frameNum+smoothNum];
       centerNum = (lower + weight*centerNum + upper)*scaleNum;
     }
     
     if(frameNum%smoothNum==0||frameNum==0||frameNum==counter-1){
      dataAE.add("\t\t" + "r.setValueAtTime(" + AEkeyTime(frameNum) + ", " + centerNum +");" + "\r");
     }
     */
}

void AEeffects(){
     dataAE.add("\t" + "var myEffect = solid.property(\"Effects\").addProperty(\"Fast Blur\")(\"Blurriness\").setValue(61);");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

void AEkeysBegin() {
  dataAE = new Data();
  dataAE.beginSave();
  dataAE.add("{  //start script" + "\r");
  dataAE.add("\t" + "app.beginUndoGroup(\"foo\");" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "// create project if necessary" + "\r");
  dataAE.add("\t" + "var proj = app.project;" + "\r");
  dataAE.add("\t" + "if(!proj) proj = app.newProject();" + "\r");
  dataAE.add("\r");
  dataAE.add("\t" + "// create new comp named 'my comp'" + "\r");
  dataAE.add("\t" + "var compW = " + dW + "; // comp width" + "\r");
  dataAE.add("\t" + "var compH = " + dH + "; // comp height" + "\r");
  dataAE.add("\t" + "var compL = " + (counter/fps) + ";  // comp length (seconds)" + "\r");
  dataAE.add("\t" + "var compRate = " + fps + "; // comp frame rate" + "\r");
  dataAE.add("\t" + "var compBG = [0/255,0/255,0/255] // comp background color" + "\r");
  dataAE.add("\t" + "var myItemCollection = app.project.items;" + "\r");
  dataAE.add("\t" + "var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);" + "\r");
  dataAE.add("\t" + "myComp.bgColor = compBG;" + "\r");
  dataAE.add("\r");  
}

void AEkeysEnd() {
  dataAE.add("\r");
  dataAE.add("\t" + "app.endUndoGroup();" + "\r");
  dataAE.add("}  //end script" + "\r");
  dataAE.endSave(aeFilePath + "/" + aeFileName + "." + aeFileType);
}



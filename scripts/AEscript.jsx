{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 4;  // comp length (seconds)
	var compRate = 24; // comp frame rate
	var compBG = [0/255,0/255,0/255] // comp background color
	var myItemCollection = app.project.items;
	var myComp = myItemCollection.addComp('my comp',compW,compH,1,compL,compRate);
	myComp.bgColor = compBG;

	var facecap = myComp.layers.addSolid([0, 0, 0], "facecap", 640, 480, 1);
	facecap.guideLayer = true;
	facecap.locked = true;
	facecap.property("position").setValue([320,240]);
	facecap.property("opacity").setValue(0);

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "dot";
	var p = facecap.property("Effects")("dot")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 960.0, 585.0]);
		p.setValueAtTime(0.25, [ 960.0, 585.0]);
		p.setValueAtTime(0.5, [ 960.0, 585.0]);
		p.setValueAtTime(0.74999994, [ 960.0, 585.0]);
		p.setValueAtTime(1.0, [ 960.0, 585.0]);
		p.setValueAtTime(1.2499999, [ 960.0, 585.0]);
		p.setValueAtTime(1.4999999, [ 960.0, 585.0]);
		p.setValueAtTime(1.75, [ 960.0, 585.0]);
		p.setValueAtTime(2.0, [ 960.0, 585.0]);
		p.setValueAtTime(2.25, [ 960.0, 585.0]);
		p.setValueAtTime(2.4999998, [ 960.0, 585.0]);
		p.setValueAtTime(2.75, [ 960.0, 585.0]);
		p.setValueAtTime(2.9999998, [ 960.0, 585.0]);
		p.setValueAtTime(3.25, [ 960.0, 585.0]);
		p.setValueAtTime(3.5, [ 960.0, 585.0]);
		p.setValueAtTime(3.7499998, [ 960.0, 585.0]);
		p.setValueAtTime(4.0, [ 960.0, 585.0]);
		p.setValueAtTime(4.25, [ 960.0, 585.0]);
		p.setValueAtTime(4.5, [ 960.0, 585.0]);
		p.setValueAtTime(4.6249995, [ 960.0, 585.0]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "dot", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"dot\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"dot\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "eyeR";
	var p = facecap.property("Effects")("eyeR")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 720.0, 282.7808]);
		p.setValueAtTime(0.25, [ 720.0, 292.58453]);
		p.setValueAtTime(0.5, [ 720.0, 293.07407]);
		p.setValueAtTime(0.74999994, [ 720.0, 283.75644]);
		p.setValueAtTime(1.0, [ 720.0, 273.55103]);
		p.setValueAtTime(1.2499999, [ 720.0, 277.51428]);
		p.setValueAtTime(1.4999999, [ 720.0, 297.67026]);
		p.setValueAtTime(1.75, [ 720.0, 306.72537]);
		p.setValueAtTime(2.0, [ 720.0, 283.19907]);
		p.setValueAtTime(2.25, [ 720.0, 257.1997]);
		p.setValueAtTime(2.4999998, [ 720.0, 263.97775]);
		p.setValueAtTime(2.75, [ 720.0, 272.09454]);
		p.setValueAtTime(2.9999998, [ 720.0, 264.08292]);
		p.setValueAtTime(3.25, [ 720.0, 263.68964]);
		p.setValueAtTime(3.5, [ 720.0, 296.0247]);
		p.setValueAtTime(3.7499998, [ 720.0, 303.81268]);
		p.setValueAtTime(4.0, [ 720.0, 287.61667]);
		p.setValueAtTime(4.25, [ 720.0, 284.90536]);
		p.setValueAtTime(4.5, [ 720.0, 263.19675]);
		p.setValueAtTime(4.6249995, [ 720.0, 264.59662]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "eyeR", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"eyeR\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"eyeR\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "eyeL";
	var p = facecap.property("Effects")("eyeL")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 1200.0, 271.29645]);
		p.setValueAtTime(0.25, [ 1200.0, 292.05426]);
		p.setValueAtTime(0.5, [ 1200.0, 296.95078]);
		p.setValueAtTime(0.74999994, [ 1200.0, 287.02185]);
		p.setValueAtTime(1.0, [ 1200.0, 272.73056]);
		p.setValueAtTime(1.2499999, [ 1200.0, 277.04843]);
		p.setValueAtTime(1.4999999, [ 1200.0, 302.51947]);
		p.setValueAtTime(1.75, [ 1200.0, 311.78]);
		p.setValueAtTime(2.0, [ 1200.0, 287.36606]);
		p.setValueAtTime(2.25, [ 1200.0, 257.52545]);
		p.setValueAtTime(2.4999998, [ 1200.0, 262.11487]);
		p.setValueAtTime(2.75, [ 1200.0, 268.0076]);
		p.setValueAtTime(2.9999998, [ 1200.0, 256.8246]);
		p.setValueAtTime(3.25, [ 1200.0, 256.1126]);
		p.setValueAtTime(3.5, [ 1200.0, 295.40317]);
		p.setValueAtTime(3.7499998, [ 1200.0, 304.68942]);
		p.setValueAtTime(4.0, [ 1200.0, 286.98526]);
		p.setValueAtTime(4.25, [ 1200.0, 278.4762]);
		p.setValueAtTime(4.5, [ 1200.0, 257.2662]);
		p.setValueAtTime(4.6249995, [ 1200.0, 258.40128]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "eyeL", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"eyeL\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"eyeL\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "browR";
	var p = facecap.property("Effects")("browR")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 720.0, 178.54225]);
		p.setValueAtTime(0.25, [ 720.0, 186.77257]);
		p.setValueAtTime(0.5, [ 720.0, 178.85579]);
		p.setValueAtTime(0.74999994, [ 720.0, 169.96413]);
		p.setValueAtTime(1.0, [ 720.0, 169.30579]);
		p.setValueAtTime(1.2499999, [ 720.0, 171.78477]);
		p.setValueAtTime(1.4999999, [ 720.0, 167.61603]);
		p.setValueAtTime(1.75, [ 720.0, 172.81789]);
		p.setValueAtTime(2.0, [ 720.0, 176.5143]);
		p.setValueAtTime(2.25, [ 720.0, 152.59262]);
		p.setValueAtTime(2.4999998, [ 720.0, 157.74828]);
		p.setValueAtTime(2.75, [ 720.0, 165.76776]);
		p.setValueAtTime(2.9999998, [ 720.0, 158.36902]);
		p.setValueAtTime(3.25, [ 720.0, 155.61786]);
		p.setValueAtTime(3.5, [ 720.0, 176.5123]);
		p.setValueAtTime(3.7499998, [ 720.0, 177.20122]);
		p.setValueAtTime(4.0, [ 720.0, 166.92558]);
		p.setValueAtTime(4.25, [ 720.0, 175.78383]);
		p.setValueAtTime(4.5, [ 720.0, 158.40521]);
		p.setValueAtTime(4.6249995, [ 720.0, 159.88231]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "browR", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"browR\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"browR\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "browL";
	var p = facecap.property("Effects")("browL")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 1200.0, 166.5923]);
		p.setValueAtTime(0.25, [ 1200.0, 186.33301]);
		p.setValueAtTime(0.5, [ 1200.0, 182.55475]);
		p.setValueAtTime(0.74999994, [ 1200.0, 173.01909]);
		p.setValueAtTime(1.0, [ 1200.0, 168.14836]);
		p.setValueAtTime(1.2499999, [ 1200.0, 171.59338]);
		p.setValueAtTime(1.4999999, [ 1200.0, 172.76787]);
		p.setValueAtTime(1.75, [ 1200.0, 177.8296]);
		p.setValueAtTime(2.0, [ 1200.0, 180.62389]);
		p.setValueAtTime(2.25, [ 1200.0, 152.77582]);
		p.setValueAtTime(2.4999998, [ 1200.0, 155.52782]);
		p.setValueAtTime(2.75, [ 1200.0, 161.1827]);
		p.setValueAtTime(2.9999998, [ 1200.0, 150.53323]);
		p.setValueAtTime(3.25, [ 1200.0, 147.97318]);
		p.setValueAtTime(3.5, [ 1200.0, 176.14233]);
		p.setValueAtTime(3.7499998, [ 1200.0, 178.12263]);
		p.setValueAtTime(4.0, [ 1200.0, 166.0814]);
		p.setValueAtTime(4.25, [ 1200.0, 168.73537]);
		p.setValueAtTime(4.5, [ 1200.0, 151.78032]);
		p.setValueAtTime(4.6249995, [ 1200.0, 153.10306]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "browL", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"browL\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"browL\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "jaw";
	var p = facecap.property("Effects")("jaw")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 960.0, 891.2366]);
		p.setValueAtTime(0.25, [ 960.0, 951.1531]);
		p.setValueAtTime(0.5, [ 960.0, 954.22284]);
		p.setValueAtTime(0.74999994, [ 960.0, 931.36945]);
		p.setValueAtTime(1.0, [ 960.0, 884.263]);
		p.setValueAtTime(1.2499999, [ 960.0, 895.13635]);
		p.setValueAtTime(1.4999999, [ 960.0, 964.6745]);
		p.setValueAtTime(1.75, [ 960.0, 968.76337]);
		p.setValueAtTime(2.0, [ 960.0, 948.29065]);
		p.setValueAtTime(2.25, [ 960.0, 883.53656]);
		p.setValueAtTime(2.4999998, [ 960.0, 875.3906]);
		p.setValueAtTime(2.75, [ 960.0, 871.90985]);
		p.setValueAtTime(2.9999998, [ 960.0, 868.81915]);
		p.setValueAtTime(3.25, [ 960.0, 903.43243]);
		p.setValueAtTime(3.5, [ 960.0, 943.0872]);
		p.setValueAtTime(3.7499998, [ 960.0, 959.3126]);
		p.setValueAtTime(4.0, [ 960.0, 951.1515]);
		p.setValueAtTime(4.25, [ 960.0, 878.0591]);
		p.setValueAtTime(4.5, [ 960.0, 865.9565]);
		p.setValueAtTime(4.6249995, [ 960.0, 867.6728]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "jaw", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"jaw\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"jaw\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "nose";
	var p = facecap.property("Effects")("nose")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 960.0, 441.6006]);
		p.setValueAtTime(0.25, [ 960.0, 430.34546]);
		p.setValueAtTime(0.5, [ 960.0, 426.76364]);
		p.setValueAtTime(0.74999994, [ 960.0, 433.2525]);
		p.setValueAtTime(1.0, [ 960.0, 437.17862]);
		p.setValueAtTime(1.2499999, [ 960.0, 429.27963]);
		p.setValueAtTime(1.4999999, [ 960.0, 426.8352]);
		p.setValueAtTime(1.75, [ 960.0, 425.9443]);
		p.setValueAtTime(2.0, [ 960.0, 437.11017]);
		p.setValueAtTime(2.25, [ 960.0, 434.32858]);
		p.setValueAtTime(2.4999998, [ 960.0, 434.76047]);
		p.setValueAtTime(2.75, [ 960.0, 436.33365]);
		p.setValueAtTime(2.9999998, [ 960.0, 438.2093]);
		p.setValueAtTime(3.25, [ 960.0, 425.87573]);
		p.setValueAtTime(3.5, [ 960.0, 425.04538]);
		p.setValueAtTime(3.7499998, [ 960.0, 429.60693]);
		p.setValueAtTime(4.0, [ 960.0, 429.82272]);
		p.setValueAtTime(4.25, [ 960.0, 441.11328]);
		p.setValueAtTime(4.5, [ 960.0, 443.63333]);
		p.setValueAtTime(4.6249995, [ 960.0, 442.3237]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "nose", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"nose\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"nose\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	var myEffect = facecap.property("Effects").addProperty("Point Control");
	myEffect.name = "mouth";
	var p = facecap.property("Effects")("mouth")("Point");
p.expression = """smooth(.2,5)""";
		p.setValueAtTime(0.0, [ 960.0, 735.0]);
		p.setValueAtTime(0.25, [ 960.0, 735.0]);
		p.setValueAtTime(0.5, [ 960.0, 735.0]);
		p.setValueAtTime(0.74999994, [ 960.0, 735.0]);
		p.setValueAtTime(1.0, [ 960.0, 735.0]);
		p.setValueAtTime(1.2499999, [ 960.0, 735.0]);
		p.setValueAtTime(1.4999999, [ 960.0, 735.0]);
		p.setValueAtTime(1.75, [ 960.0, 735.0]);
		p.setValueAtTime(2.0, [ 960.0, 735.0]);
		p.setValueAtTime(2.25, [ 960.0, 735.0]);
		p.setValueAtTime(2.4999998, [ 960.0, 735.0]);
		p.setValueAtTime(2.75, [ 960.0, 735.0]);
		p.setValueAtTime(2.9999998, [ 960.0, 735.0]);
		p.setValueAtTime(3.25, [ 960.0, 735.0]);
		p.setValueAtTime(3.5, [ 960.0, 735.0]);
		p.setValueAtTime(3.7499998, [ 960.0, 735.0]);
		p.setValueAtTime(4.0, [ 960.0, 735.0]);
		p.setValueAtTime(4.25, [ 960.0, 735.0]);
		p.setValueAtTime(4.5, [ 960.0, 735.0]);
		p.setValueAtTime(4.6249995, [ 960.0, 735.0]);
	var solid = myComp.layers.addSolid([1.0, 0, 0], "mouth", 50, 50, 1);
	solid.guideLayer = true;
	solid.property("opacity").setValue(33);
	var p = solid.property("position");
	var expression = 
	//~~~~~~~~~~~~~expression here~~~~~~~~~~~~~~~
		"var sW = 640;" +
		"var sH = 480;" +
		"var dW = thisComp.width;" +
		"var dH = thisComp.height;" +
		"var x = fromComp(thisComp.layer(\"facecap\").effect(\"mouth\")(\"Point\"))[0];" +
		"var y = fromComp(thisComp.layer(\"facecap\").effect(\"mouth\")(\"Point\"))[1];" +
		"[(1.5 * dW) + (x*(dW/sW)),dH + (y*(dH/sH))];";
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	p.expression = expression;

	app.endUndoGroup();
}  //end script

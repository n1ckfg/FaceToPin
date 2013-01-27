{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 1;  // comp length (seconds)
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
		p.setValueAtTime(0.0, [ 684.29626, 460.0688]);
		p.setValueAtTime(0.041666668, [ 684.29626, 460.0688]);
		p.setValueAtTime(0.083333336, [ 687.98, 463.6235]);
		p.setValueAtTime(0.125, [ 688.3101, 463.83212]);
		p.setValueAtTime(0.16666667, [ 690.9537, 464.39893]);
		p.setValueAtTime(0.20833334, [ 691.1625, 464.41998]);
		p.setValueAtTime(0.25, [ 692.5517, 464.28897]);
		p.setValueAtTime(0.2916667, [ 692.7797, 464.37384]);
		p.setValueAtTime(0.33333334, [ 695.64435, 466.0235]);
		p.setValueAtTime(0.375, [ 695.90234, 466.14746]);
		p.setValueAtTime(0.4166667, [ 697.9805, 466.9008]);
		p.setValueAtTime(0.4583333, [ 698.33997, 467.04117]);
		p.setValueAtTime(0.5, [ 702.9571, 468.8972]);
		p.setValueAtTime(0.5416666, [ 703.4993, 469.08258]);
		p.setValueAtTime(0.5833334, [ 709.13165, 470.75812]);
		p.setValueAtTime(0.625, [ 709.9282, 471.0023]);
		p.setValueAtTime(0.6666667, [ 719.237, 473.90314]);
		p.setValueAtTime(0.7083333, [ 720.29846, 474.271]);
		p.setValueAtTime(0.75, [ 731.0785, 478.30002]);
		p.setValueAtTime(0.7916667, [ 732.3824, 478.72964]);
		p.setValueAtTime(0.8333334, [ 746.21625, 482.85922]);
		p.setValueAtTime(0.875, [ 747.96185, 483.31064]);
		p.setValueAtTime(0.9166666, [ 767.021, 487.74112]);
		p.setValueAtTime(0.9583334, [ 769.15295, 488.22037]);
		p.setValueAtTime(1.0, [ 790.48083, 492.8832]);
		p.setValueAtTime(1.0416666, [ 792.7229, 493.3535]);
		p.setValueAtTime(1.0833333, [ 813.99805, 497.64645]);
		p.setValueAtTime(1.125, [ 815.8295, 498.06793]);
		p.setValueAtTime(1.1666667, [ 829.7397, 501.81152]);
		p.setValueAtTime(1.2083334, [ 831.0133, 502.09464]);
		p.setValueAtTime(1.25, [ 841.4836, 503.83624]);
		p.setValueAtTime(1.2916666, [ 842.32513, 503.95248]);
		p.setValueAtTime(1.3333334, [ 848.0918, 504.4835]);
		p.setValueAtTime(1.375, [ 848.5705, 504.5313]);
		p.setValueAtTime(1.4166666, [ 852.0214, 504.916]);
		p.setValueAtTime(1.4583333, [ 852.20306, 504.9362]);
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
		p.setValueAtTime(0.0, [ 444.29626, 216.82588]);
		p.setValueAtTime(0.041666668, [ 444.29626, 216.82588]);
		p.setValueAtTime(0.083333336, [ 447.97998, 232.99754]);
		p.setValueAtTime(0.125, [ 448.31012, 233.83704]);
		p.setValueAtTime(0.16666667, [ 450.95367, 234.14026]);
		p.setValueAtTime(0.20833334, [ 451.16245, 229.05318]);
		p.setValueAtTime(0.25, [ 452.55173, 232.58128]);
		p.setValueAtTime(0.2916667, [ 452.77963, 232.50415]);
		p.setValueAtTime(0.33333334, [ 455.64438, 227.93724]);
		p.setValueAtTime(0.375, [ 455.9024, 227.97974]);
		p.setValueAtTime(0.4166667, [ 457.98053, 232.85701]);
		p.setValueAtTime(0.4583333, [ 458.33994, 232.95879]);
		p.setValueAtTime(0.5, [ 462.9571, 230.40662]);
		p.setValueAtTime(0.5416666, [ 463.49933, 230.6646]);
		p.setValueAtTime(0.5833334, [ 469.13165, 237.61821]);
		p.setValueAtTime(0.625, [ 469.92822, 237.95825]);
		p.setValueAtTime(0.6666667, [ 479.23703, 237.83768]);
		p.setValueAtTime(0.7083333, [ 480.29843, 238.48161]);
		p.setValueAtTime(0.75, [ 491.07843, 250.21321]);
		p.setValueAtTime(0.7916667, [ 492.38232, 250.83711]);
		p.setValueAtTime(0.8333334, [ 506.21616, 251.53984]);
		p.setValueAtTime(0.875, [ 507.96182, 251.66504]);
		p.setValueAtTime(0.9166666, [ 527.021, 253.29195]);
		p.setValueAtTime(0.9583334, [ 529.15295, 253.72168]);
		p.setValueAtTime(1.0, [ 550.48083, 260.014]);
		p.setValueAtTime(1.0416666, [ 552.7229, 260.27603]);
		p.setValueAtTime(1.0833333, [ 573.99805, 259.3425]);
		p.setValueAtTime(1.125, [ 575.8295, 259.6012]);
		p.setValueAtTime(1.1666667, [ 589.7397, 265.11105]);
		p.setValueAtTime(1.2083334, [ 591.0133, 265.4194]);
		p.setValueAtTime(1.25, [ 601.4836, 266.02637]);
		p.setValueAtTime(1.2916666, [ 602.32513, 266.36362]);
		p.setValueAtTime(1.3333334, [ 608.0918, 271.9044]);
		p.setValueAtTime(1.375, [ 608.5705, 272.07922]);
		p.setValueAtTime(1.4166666, [ 612.0214, 270.24805]);
		p.setValueAtTime(1.4583333, [ 612.20306, 270.15167]);
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
		p.setValueAtTime(0.0, [ 924.29626, 211.4148]);
		p.setValueAtTime(0.041666668, [ 924.29626, 211.4148]);
		p.setValueAtTime(0.083333336, [ 927.9801, 227.34785]);
		p.setValueAtTime(0.125, [ 928.3102, 228.17542]);
		p.setValueAtTime(0.16666667, [ 930.95374, 228.45523]);
		p.setValueAtTime(0.20833334, [ 931.1624, 222.9879]);
		p.setValueAtTime(0.25, [ 932.5517, 227.05823]);
		p.setValueAtTime(0.2916667, [ 932.7796, 226.96626]);
		p.setValueAtTime(0.33333334, [ 935.64435, 221.64305]);
		p.setValueAtTime(0.375, [ 935.90234, 221.66849]);
		p.setValueAtTime(0.4166667, [ 937.9806, 226.91846]);
		p.setValueAtTime(0.4583333, [ 938.33997, 227.04588]);
		p.setValueAtTime(0.5, [ 942.95703, 224.62064]);
		p.setValueAtTime(0.5416666, [ 943.4993, 224.89037]);
		p.setValueAtTime(0.5833334, [ 949.13165, 231.94182]);
		p.setValueAtTime(0.625, [ 949.92816, 232.27054]);
		p.setValueAtTime(0.6666667, [ 959.237, 231.85735]);
		p.setValueAtTime(0.7083333, [ 960.29846, 232.48802]);
		p.setValueAtTime(0.75, [ 971.0784, 244.24292]);
		p.setValueAtTime(0.7916667, [ 972.38226, 244.87883]);
		p.setValueAtTime(0.8333334, [ 986.2161, 245.77762]);
		p.setValueAtTime(0.875, [ 987.96185, 245.97717]);
		p.setValueAtTime(0.9166666, [ 1007.02094, 248.77013]);
		p.setValueAtTime(0.9583334, [ 1009.15295, 249.47717]);
		p.setValueAtTime(1.0, [ 1030.4808, 259.7258]);
		p.setValueAtTime(1.0416666, [ 1032.7229, 260.37326]);
		p.setValueAtTime(1.0833333, [ 1053.998, 262.83664]);
		p.setValueAtTime(1.125, [ 1055.8296, 263.30826]);
		p.setValueAtTime(1.1666667, [ 1069.7399, 269.60376]);
		p.setValueAtTime(1.2083334, [ 1071.0135, 269.98642]);
		p.setValueAtTime(1.25, [ 1081.4835, 271.22763]);
		p.setValueAtTime(1.2916666, [ 1082.3251, 271.65506]);
		p.setValueAtTime(1.3333334, [ 1088.0917, 278.25348]);
		p.setValueAtTime(1.375, [ 1088.5706, 278.487]);
		p.setValueAtTime(1.4166666, [ 1092.0215, 276.76337]);
		p.setValueAtTime(1.4583333, [ 1092.2031, 276.67264]);
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
		p.setValueAtTime(0.0, [ 444.29626, 115.49556]);
		p.setValueAtTime(0.041666668, [ 444.29626, 115.49556]);
		p.setValueAtTime(0.083333336, [ 447.97998, 127.837845]);
		p.setValueAtTime(0.125, [ 448.31012, 128.48587]);
		p.setValueAtTime(0.16666667, [ 450.95367, 128.86192]);
		p.setValueAtTime(0.20833334, [ 451.16245, 125.29388]);
		p.setValueAtTime(0.25, [ 452.55173, 129.46205]);
		p.setValueAtTime(0.2916667, [ 452.77963, 129.4032]);
		p.setValueAtTime(0.33333334, [ 455.64438, 124.589615]);
		p.setValueAtTime(0.375, [ 455.9024, 124.6418]);
		p.setValueAtTime(0.4166667, [ 457.98053, 129.91574]);
		p.setValueAtTime(0.4583333, [ 458.33994, 130.01884]);
		p.setValueAtTime(0.5, [ 462.9571, 127.13354]);
		p.setValueAtTime(0.5416666, [ 463.49933, 127.33789]);
		p.setValueAtTime(0.5833334, [ 469.13165, 133.62341]);
		p.setValueAtTime(0.625, [ 469.92822, 133.90085]);
		p.setValueAtTime(0.6666667, [ 479.23703, 133.25179]);
		p.setValueAtTime(0.7083333, [ 480.29843, 133.85974]);
		p.setValueAtTime(0.75, [ 491.07843, 145.41768]);
		p.setValueAtTime(0.7916667, [ 492.38232, 146.06786]);
		p.setValueAtTime(0.8333334, [ 506.21616, 147.40154]);
		p.setValueAtTime(0.875, [ 507.96182, 147.5543]);
		p.setValueAtTime(0.9166666, [ 527.021, 149.11107]);
		p.setValueAtTime(0.9583334, [ 529.15295, 149.49335]);
		p.setValueAtTime(1.0, [ 550.48083, 154.99257]);
		p.setValueAtTime(1.0416666, [ 552.7229, 155.2641]);
		p.setValueAtTime(1.0833333, [ 573.99805, 155.21582]);
		p.setValueAtTime(1.125, [ 575.8295, 155.4446]);
		p.setValueAtTime(1.1666667, [ 589.7397, 159.61754]);
		p.setValueAtTime(1.2083334, [ 591.0133, 159.91856]);
		p.setValueAtTime(1.25, [ 601.4836, 161.59634]);
		p.setValueAtTime(1.2916666, [ 602.32513, 161.98216]);
		p.setValueAtTime(1.3333334, [ 608.0918, 167.43605]);
		p.setValueAtTime(1.375, [ 608.5705, 167.64731]);
		p.setValueAtTime(1.4166666, [ 612.0214, 166.55206]);
		p.setValueAtTime(1.4583333, [ 612.20306, 166.49443]);
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
		p.setValueAtTime(0.0, [ 924.29626, 108.66413]);
		p.setValueAtTime(0.041666668, [ 924.29626, 108.66413]);
		p.setValueAtTime(0.083333336, [ 927.9801, 120.817406]);
		p.setValueAtTime(0.125, [ 928.3102, 121.455986]);
		p.setValueAtTime(0.16666667, [ 930.95374, 121.80448]);
		p.setValueAtTime(0.20833334, [ 931.1624, 117.77455]);
		p.setValueAtTime(0.25, [ 932.5517, 122.413185]);
		p.setValueAtTime(0.2916667, [ 932.7796, 122.339005]);
		p.setValueAtTime(0.33333334, [ 935.64435, 116.825455]);
		p.setValueAtTime(0.375, [ 935.90234, 116.85319]);
		p.setValueAtTime(0.4166667, [ 937.9806, 122.3161]);
		p.setValueAtTime(0.4583333, [ 938.33997, 122.44385]);
		p.setValueAtTime(0.5, [ 942.95703, 119.833084]);
		p.setValueAtTime(0.5416666, [ 943.4993, 120.04856]);
		p.setValueAtTime(0.5833334, [ 949.13165, 126.287674]);
		p.setValueAtTime(0.625, [ 949.92816, 126.54923]);
		p.setValueAtTime(0.6666667, [ 959.237, 125.65525]);
		p.setValueAtTime(0.7083333, [ 960.29846, 126.26112]);
		p.setValueAtTime(0.75, [ 971.0784, 138.0017]);
		p.setValueAtTime(0.7916667, [ 972.38226, 138.673]);
		p.setValueAtTime(0.8333334, [ 986.2161, 140.22383]);
		p.setValueAtTime(0.875, [ 987.96185, 140.45691]);
		p.setValueAtTime(0.9166666, [ 1007.02094, 143.26817]);
		p.setValueAtTime(0.9583334, [ 1009.15295, 143.94429]);
		p.setValueAtTime(1.0, [ 1030.4808, 153.61813]);
		p.setValueAtTime(1.0416666, [ 1032.7229, 154.28743]);
		p.setValueAtTime(1.0833333, [ 1053.998, 157.66177]);
		p.setValueAtTime(1.125, [ 1055.8296, 158.10005]);
		p.setValueAtTime(1.1666667, [ 1069.7399, 162.97404]);
		p.setValueAtTime(1.2083334, [ 1071.0135, 163.34009]);
		p.setValueAtTime(1.25, [ 1081.4835, 165.5605]);
		p.setValueAtTime(1.2916666, [ 1082.3251, 166.03256]);
		p.setValueAtTime(1.3333334, [ 1088.0917, 172.55464]);
		p.setValueAtTime(1.375, [ 1088.5706, 172.83904]);
		p.setValueAtTime(1.4166666, [ 1092.0215, 172.10225]);
		p.setValueAtTime(1.4583333, [ 1092.2031, 172.06346]);
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
		p.setValueAtTime(0.0, [ 684.29626, 638.211]);
		p.setValueAtTime(0.041666668, [ 684.29626, 638.211]);
		p.setValueAtTime(0.083333336, [ 687.98, 641.97284]);
		p.setValueAtTime(0.125, [ 688.3101, 642.19183]);
		p.setValueAtTime(0.16666667, [ 690.9537, 642.7713]);
		p.setValueAtTime(0.20833334, [ 691.1625, 643.0493]);
		p.setValueAtTime(0.25, [ 692.5517, 643.5903]);
		p.setValueAtTime(0.2916667, [ 692.7797, 643.6996]);
		p.setValueAtTime(0.33333334, [ 695.64435, 645.1872]);
		p.setValueAtTime(0.375, [ 695.90234, 645.26953]);
		p.setValueAtTime(0.4166667, [ 697.9805, 645.416]);
		p.setValueAtTime(0.4583333, [ 698.33997, 645.51654]);
		p.setValueAtTime(0.5, [ 702.9571, 647.19946]);
		p.setValueAtTime(0.5416666, [ 703.4993, 647.327]);
		p.setValueAtTime(0.5833334, [ 709.13165, 648.1151]);
		p.setValueAtTime(0.625, [ 709.9282, 648.3029]);
		p.setValueAtTime(0.6666667, [ 719.237, 650.98303]);
		p.setValueAtTime(0.7083333, [ 720.29846, 651.3527]);
		p.setValueAtTime(0.75, [ 731.0785, 655.6128]);
		p.setValueAtTime(0.7916667, [ 732.3824, 655.96936]);
		p.setValueAtTime(0.8333334, [ 746.21625, 658.5699]);
		p.setValueAtTime(0.875, [ 747.96185, 658.97314]);
		p.setValueAtTime(0.9166666, [ 767.021, 663.91174]);
		p.setValueAtTime(0.9583334, [ 769.15295, 664.6693]);
		p.setValueAtTime(1.0, [ 790.48083, 673.89777]);
		p.setValueAtTime(1.0416666, [ 792.7229, 674.5531]);
		p.setValueAtTime(1.0833333, [ 813.99805, 678.07635]);
		p.setValueAtTime(1.125, [ 815.8295, 678.41534]);
		p.setValueAtTime(1.1666667, [ 829.7397, 681.36304]);
		p.setValueAtTime(1.2083334, [ 831.0133, 681.6546]);
		p.setValueAtTime(1.25, [ 841.4836, 684.26404]);
		p.setValueAtTime(1.2916666, [ 842.32513, 684.5586]);
		p.setValueAtTime(1.3333334, [ 848.0918, 687.5274]);
		p.setValueAtTime(1.375, [ 848.5705, 687.7407]);
		p.setValueAtTime(1.4166666, [ 852.0214, 688.9194]);
		p.setValueAtTime(1.4583333, [ 852.20306, 688.98145]);
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
		p.setValueAtTime(0.0, [ 684.29626, 352.85727]);
		p.setValueAtTime(0.041666668, [ 684.29626, 352.85727]);
		p.setValueAtTime(0.083333336, [ 687.98, 355.47076]);
		p.setValueAtTime(0.125, [ 688.3101, 355.63232]);
		p.setValueAtTime(0.16666667, [ 690.9537, 356.25177]);
		p.setValueAtTime(0.20833334, [ 691.1625, 357.27972]);
		p.setValueAtTime(0.25, [ 692.5517, 357.46515]);
		p.setValueAtTime(0.2916667, [ 692.7797, 357.54892]);
		p.setValueAtTime(0.33333334, [ 695.64435, 358.89423]);
		p.setValueAtTime(0.375, [ 695.90234, 359.08725]);
		p.setValueAtTime(0.4166667, [ 697.9805, 361.36072]);
		p.setValueAtTime(0.4583333, [ 698.33997, 361.5841]);
		p.setValueAtTime(0.5, [ 702.9571, 363.5702]);
		p.setValueAtTime(0.5416666, [ 703.4993, 363.7662]);
		p.setValueAtTime(0.5833334, [ 709.13165, 365.51614]);
		p.setValueAtTime(0.625, [ 709.9282, 365.68536]);
		p.setValueAtTime(0.6666667, [ 719.237, 367.16492]);
		p.setValueAtTime(0.7083333, [ 720.29846, 367.51605]);
		p.setValueAtTime(0.75, [ 731.0785, 372.52225]);
		p.setValueAtTime(0.7916667, [ 732.3824, 373.0632]);
		p.setValueAtTime(0.8333334, [ 746.21625, 378.32156]);
		p.setValueAtTime(0.875, [ 747.96185, 378.7968]);
		p.setValueAtTime(0.9166666, [ 767.021, 382.64194]);
		p.setValueAtTime(0.9583334, [ 769.15295, 383.01242]);
		p.setValueAtTime(1.0, [ 790.48083, 386.23904]);
		p.setValueAtTime(1.0416666, [ 792.7229, 386.67978]);
		p.setValueAtTime(1.0833333, [ 813.99805, 391.73032]);
		p.setValueAtTime(1.125, [ 815.8295, 392.1481]);
		p.setValueAtTime(1.1666667, [ 829.7397, 395.14355]);
		p.setValueAtTime(1.2083334, [ 831.0133, 395.4317]);
		p.setValueAtTime(1.25, [ 841.4836, 397.93668]);
		p.setValueAtTime(1.2916666, [ 842.32513, 398.10016]);
		p.setValueAtTime(1.3333334, [ 848.0918, 398.79636]);
		p.setValueAtTime(1.375, [ 848.5705, 398.84494]);
		p.setValueAtTime(1.4166666, [ 852.0214, 399.0956]);
		p.setValueAtTime(1.4583333, [ 852.20306, 399.1088]);
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
		p.setValueAtTime(0.0, [ 684.29626, 572.56885]);
		p.setValueAtTime(0.041666668, [ 684.29626, 572.56885]);
		p.setValueAtTime(0.083333336, [ 687.98, 576.1235]);
		p.setValueAtTime(0.125, [ 688.3101, 576.3321]);
		p.setValueAtTime(0.16666667, [ 690.9537, 576.89886]);
		p.setValueAtTime(0.20833334, [ 691.1625, 576.91986]);
		p.setValueAtTime(0.25, [ 692.5517, 576.789]);
		p.setValueAtTime(0.2916667, [ 692.7797, 576.8739]);
		p.setValueAtTime(0.33333334, [ 695.64435, 578.52356]);
		p.setValueAtTime(0.375, [ 695.90234, 578.6475]);
		p.setValueAtTime(0.4166667, [ 697.9805, 579.4008]);
		p.setValueAtTime(0.4583333, [ 698.33997, 579.5412]);
		p.setValueAtTime(0.5, [ 702.9571, 581.39716]);
		p.setValueAtTime(0.5416666, [ 703.4993, 581.5825]);
		p.setValueAtTime(0.5833334, [ 709.13165, 583.25806]);
		p.setValueAtTime(0.625, [ 709.9282, 583.5023]);
		p.setValueAtTime(0.6666667, [ 719.237, 586.4031]);
		p.setValueAtTime(0.7083333, [ 720.29846, 586.77094]);
		p.setValueAtTime(0.75, [ 731.0785, 590.8]);
		p.setValueAtTime(0.7916667, [ 732.3824, 591.2297]);
		p.setValueAtTime(0.8333334, [ 746.21625, 595.3593]);
		p.setValueAtTime(0.875, [ 747.96185, 595.8107]);
		p.setValueAtTime(0.9166666, [ 767.021, 600.2411]);
		p.setValueAtTime(0.9583334, [ 769.15295, 600.72034]);
		p.setValueAtTime(1.0, [ 790.48083, 605.38324]);
		p.setValueAtTime(1.0416666, [ 792.7229, 605.85345]);
		p.setValueAtTime(1.0833333, [ 813.99805, 610.1464]);
		p.setValueAtTime(1.125, [ 815.8295, 610.56793]);
		p.setValueAtTime(1.1666667, [ 829.7397, 614.3116]);
		p.setValueAtTime(1.2083334, [ 831.0133, 614.59467]);
		p.setValueAtTime(1.25, [ 841.4836, 616.33624]);
		p.setValueAtTime(1.2916666, [ 842.32513, 616.4525]);
		p.setValueAtTime(1.3333334, [ 848.0918, 616.98346]);
		p.setValueAtTime(1.375, [ 848.5705, 617.03125]);
		p.setValueAtTime(1.4166666, [ 852.0214, 617.41595]);
		p.setValueAtTime(1.4583333, [ 852.20306, 617.43616]);
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

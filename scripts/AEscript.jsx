{  //start script
	app.beginUndoGroup("foo");

	// create project if necessary
	var proj = app.project;
	if(!proj) proj = app.newProject();

	// create new comp named 'my comp'
	var compW = 1920; // comp width
	var compH = 1080; // comp height
	var compL = 3;  // comp length (seconds)
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
		p.setValueAtTime(0.0, [ 839.8504, 693.32385]);
		p.setValueAtTime(0.041666668, [ 839.8504, 693.32385]);
		p.setValueAtTime(0.083333336, [ 840.875, 692.8787]);
		p.setValueAtTime(0.125, [ 840.9253, 692.8238]);
		p.setValueAtTime(0.16666667, [ 840.9085, 692.2549]);
		p.setValueAtTime(0.20833333, [ 840.8515, 692.61395]);
		p.setValueAtTime(0.25, [ 840.84863, 692.63196]);
		p.setValueAtTime(0.2916667, [ 840.84375, 692.6309]);
		p.setValueAtTime(0.33333334, [ 840.7552, 692.6457]);
		p.setValueAtTime(0.375, [ 840.716, 693.5382]);
		p.setValueAtTime(0.41666666, [ 840.71405, 693.5828]);
		p.setValueAtTime(0.45833334, [ 840.7387, 693.6213]);
		p.setValueAtTime(0.5, [ 841.1849, 694.2741]);
		p.setValueAtTime(0.5416666, [ 841.196, 694.35864]);
		p.setValueAtTime(0.5833334, [ 840.99493, 695.2975]);
		p.setValueAtTime(0.625, [ 840.97284, 695.3601]);
		p.setValueAtTime(0.6666667, [ 840.755, 695.6451]);
		p.setValueAtTime(0.7083333, [ 840.72943, 695.6731]);
		p.setValueAtTime(0.75, [ 840.4625, 695.9224]);
		p.setValueAtTime(0.7916667, [ 840.4755, 695.96625]);
		p.setValueAtTime(0.8333333, [ 840.95013, 696.5327]);
		p.setValueAtTime(0.875, [ 840.9378, 696.56635]);
		p.setValueAtTime(0.9166667, [ 840.2885, 696.66425]);
		p.setValueAtTime(0.9583334, [ 840.2839, 696.71576]);
		p.setValueAtTime(1.0, [ 840.7856, 697.55725]);
		p.setValueAtTime(1.0416666, [ 840.7756, 697.60864]);
		p.setValueAtTime(1.0833333, [ 840.14514, 697.7793]);
		p.setValueAtTime(1.125, [ 840.13226, 697.81067]);
		p.setValueAtTime(1.1666667, [ 840.46674, 698.2226]);
		p.setValueAtTime(1.2083334, [ 840.50336, 698.2583]);
		p.setValueAtTime(1.25, [ 840.86224, 698.5319]);
		p.setValueAtTime(1.2916666, [ 840.87274, 698.5721]);
		p.setValueAtTime(1.3333334, [ 840.7412, 699.0505]);
		p.setValueAtTime(1.375, [ 840.7047, 699.08136]);
		p.setValueAtTime(1.4166666, [ 840.16516, 699.20703]);
		p.setValueAtTime(1.4583333, [ 840.17004, 699.26825]);
		p.setValueAtTime(1.5, [ 840.7446, 700.25934]);
		p.setValueAtTime(1.5416667, [ 840.74493, 700.3182]);
		p.setValueAtTime(1.5833334, [ 840.2348, 700.48846]);
		p.setValueAtTime(1.625, [ 840.23285, 700.51807]);
		p.setValueAtTime(1.6666666, [ 840.6569, 700.899]);
		p.setValueAtTime(1.7083333, [ 840.6849, 700.95184]);
		p.setValueAtTime(1.75, [ 840.80646, 701.5634]);
		p.setValueAtTime(1.7916666, [ 840.79266, 701.5942]);
		p.setValueAtTime(1.8333334, [ 840.434, 701.59955]);
		p.setValueAtTime(1.8749999, [ 840.44415, 701.6134]);
		p.setValueAtTime(1.9166667, [ 840.9526, 701.8586]);
		p.setValueAtTime(1.9583333, [ 840.9484, 701.8752]);
		p.setValueAtTime(2.0, [ 840.417, 701.9549]);
		p.setValueAtTime(2.0416667, [ 840.4305, 701.977]);
		p.setValueAtTime(2.0833333, [ 841.15283, 702.303]);
		p.setValueAtTime(2.125, [ 841.1735, 702.3398]);
		p.setValueAtTime(2.1666665, [ 840.89795, 702.7109]);
		p.setValueAtTime(2.2083333, [ 840.9269, 702.7583]);
		p.setValueAtTime(2.25, [ 841.6964, 703.2802]);
		p.setValueAtTime(2.2916667, [ 841.67737, 703.32477]);
		p.setValueAtTime(2.3333335, [ 840.6406, 703.6582]);
		p.setValueAtTime(2.375, [ 840.63116, 703.69]);
		p.setValueAtTime(2.4166667, [ 841.3935, 703.9638]);
		p.setValueAtTime(2.4583333, [ 841.42883, 704.00507]);
		p.setValueAtTime(2.5, [ 841.3813, 704.50415]);
		p.setValueAtTime(2.5416665, [ 841.374, 704.5478]);
		p.setValueAtTime(2.5833333, [ 841.28534, 704.8859]);
		p.setValueAtTime(2.625, [ 841.2674, 704.93286]);
		p.setValueAtTime(2.6666667, [ 841.02374, 705.4761]);
		p.setValueAtTime(2.7083335, [ 840.9967, 705.52594]);
		p.setValueAtTime(2.75, [ 840.72815, 705.93646]);
		p.setValueAtTime(2.7916667, [ 840.7208, 705.9723]);
		p.setValueAtTime(2.8333333, [ 840.83026, 706.2488]);
		p.setValueAtTime(2.875, [ 840.8301, 706.2935]);
		p.setValueAtTime(2.9166665, [ 840.72766, 706.85254]);
		p.setValueAtTime(2.9583333, [ 840.67804, 706.873]);
		p.setValueAtTime(3.0, [ 839.8751, 706.7395]);
		p.setValueAtTime(3.0416667, [ 839.861, 706.7497]);
		p.setValueAtTime(3.0833335, [ 840.32855, 707.0535]);
		p.setValueAtTime(3.125, [ 840.31506, 707.0871]);
		p.setValueAtTime(3.1666667, [ 839.6515, 707.41895]);
		p.setValueAtTime(3.2083333, [ 839.6284, 707.5164]);
		p.setValueAtTime(3.25, [ 839.81067, 708.97656]);
		p.setValueAtTime(3.2916665, [ 839.8161, 709.06213]);
		p.setValueAtTime(3.3333333, [ 839.75195, 709.2922]);
		p.setValueAtTime(3.375, [ 839.78436, 709.356]);
		p.setValueAtTime(3.4166665, [ 840.4284, 710.30194]);
		p.setValueAtTime(3.4583335, [ 840.4645, 710.3393]);
		p.setValueAtTime(3.5, [ 840.5338, 710.1638]);
		p.setValueAtTime(3.5416667, [ 840.56244, 710.2015]);
		p.setValueAtTime(3.5833333, [ 841.0402, 711.08185]);
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
		p.setValueAtTime(0.0, [ 599.8504, 453.66208]);
		p.setValueAtTime(0.041666668, [ 599.8504, 453.66208]);
		p.setValueAtTime(0.083333336, [ 600.875, 456.71338]);
		p.setValueAtTime(0.125, [ 600.92535, 457.01318]);
		p.setValueAtTime(0.16666667, [ 600.9086, 459.3373]);
		p.setValueAtTime(0.20833333, [ 600.8515, 453.32077]);
		p.setValueAtTime(0.25, [ 600.8487, 453.01993]);
		p.setValueAtTime(0.2916667, [ 600.84375, 453.38492]);
		p.setValueAtTime(0.33333334, [ 600.7552, 459.83813]);
		p.setValueAtTime(0.375, [ 600.716, 452.868]);
		p.setValueAtTime(0.41666666, [ 600.71405, 452.5195]);
		p.setValueAtTime(0.45833334, [ 600.7387, 453.09537]);
		p.setValueAtTime(0.5, [ 601.1849, 463.80328]);
		p.setValueAtTime(0.5416666, [ 601.196, 463.90488]);
		p.setValueAtTime(0.5833334, [ 600.99493, 456.10205]);
		p.setValueAtTime(0.625, [ 600.97284, 456.2754]);
		p.setValueAtTime(0.6666667, [ 600.755, 466.42667]);
		p.setValueAtTime(0.7083333, [ 600.7294, 466.546]);
		p.setValueAtTime(0.75, [ 600.46246, 459.56348]);
		p.setValueAtTime(0.7916667, [ 600.47546, 459.5257]);
		p.setValueAtTime(0.8333333, [ 600.9501, 465.1284]);
		p.setValueAtTime(0.875, [ 600.93774, 465.1692]);
		p.setValueAtTime(0.9166667, [ 600.2885, 460.86368]);
		p.setValueAtTime(0.9583334, [ 600.2839, 461.09863]);
		p.setValueAtTime(1.0, [ 600.7855, 469.21408]);
		p.setValueAtTime(1.0416666, [ 600.7756, 469.13892]);
		p.setValueAtTime(1.0833333, [ 600.1452, 460.47922]);
		p.setValueAtTime(1.125, [ 600.13226, 460.50656]);
		p.setValueAtTime(1.1666667, [ 600.46674, 468.7933]);
		p.setValueAtTime(1.2083334, [ 600.5033, 468.94186]);
		p.setValueAtTime(1.25, [ 600.8622, 464.1655]);
		p.setValueAtTime(1.2916666, [ 600.8728, 464.15875]);
		p.setValueAtTime(1.3333334, [ 600.7412, 468.33594]);
		p.setValueAtTime(1.375, [ 600.7048, 468.40558]);
		p.setValueAtTime(1.4166666, [ 600.16516, 465.9034]);
		p.setValueAtTime(1.4583333, [ 600.17004, 466.02597]);
		p.setValueAtTime(1.5, [ 600.74457, 470.48926]);
		p.setValueAtTime(1.5416667, [ 600.745, 470.58627]);
		p.setValueAtTime(1.5833334, [ 600.2348, 468.3215]);
		p.setValueAtTime(1.625, [ 600.23285, 468.2626]);
		p.setValueAtTime(1.6666666, [ 600.657, 469.23813]);
		p.setValueAtTime(1.7083333, [ 600.6849, 469.36856]);
		p.setValueAtTime(1.75, [ 600.80646, 470.8444]);
		p.setValueAtTime(1.7916666, [ 600.79266, 470.87476]);
		p.setValueAtTime(1.8333334, [ 600.43396, 470.0942]);
		p.setValueAtTime(1.8749999, [ 600.4442, 470.15952]);
		p.setValueAtTime(1.9166667, [ 600.9526, 472.04147]);
		p.setValueAtTime(1.9583333, [ 600.9484, 472.06607]);
		p.setValueAtTime(2.0, [ 600.41693, 470.81662]);
		p.setValueAtTime(2.0416667, [ 600.4305, 470.79858]);
		p.setValueAtTime(2.0833333, [ 601.1528, 471.59885]);
		p.setValueAtTime(2.125, [ 601.1735, 471.6377]);
		p.setValueAtTime(2.1666665, [ 600.898, 471.61865]);
		p.setValueAtTime(2.2083333, [ 600.92694, 471.7461]);
		p.setValueAtTime(2.25, [ 601.6964, 474.0633]);
		p.setValueAtTime(2.2916667, [ 601.6773, 473.77872]);
		p.setValueAtTime(2.3333335, [ 600.6406, 466.5572]);
		p.setValueAtTime(2.375, [ 600.63116, 466.7435]);
		p.setValueAtTime(2.4166667, [ 601.3935, 476.6053]);
		p.setValueAtTime(2.4583333, [ 601.4289, 476.5858]);
		p.setValueAtTime(2.5, [ 601.3813, 467.35776]);
		p.setValueAtTime(2.5416665, [ 601.37396, 467.10327]);
		p.setValueAtTime(2.5833333, [ 601.28534, 470.81503]);
		p.setValueAtTime(2.625, [ 601.2674, 470.9686]);
		p.setValueAtTime(2.6666667, [ 601.0237, 470.39987]);
		p.setValueAtTime(2.7083335, [ 600.99664, 470.46686]);
		p.setValueAtTime(2.75, [ 600.7281, 472.18863]);
		p.setValueAtTime(2.7916667, [ 600.72076, 472.1931]);
		p.setValueAtTime(2.8333333, [ 600.83026, 470.72437]);
		p.setValueAtTime(2.875, [ 600.8301, 470.7797]);
		p.setValueAtTime(2.9166665, [ 600.72766, 473.10043]);
		p.setValueAtTime(2.9583333, [ 600.67804, 472.8923]);
		p.setValueAtTime(3.0, [ 599.8752, 467.04565]);
		p.setValueAtTime(3.0416667, [ 599.861, 467.31943]);
		p.setValueAtTime(3.0833335, [ 600.32855, 477.5232]);
		p.setValueAtTime(3.125, [ 600.315, 477.69077]);
		p.setValueAtTime(3.1666667, [ 599.6515, 471.53244]);
		p.setValueAtTime(3.2083333, [ 599.6285, 471.73755]);
		p.setValueAtTime(3.25, [ 599.81067, 480.98215]);
		p.setValueAtTime(3.2916665, [ 599.8161, 481.53693]);
		p.setValueAtTime(3.3333333, [ 599.75195, 483.23056]);
		p.setValueAtTime(3.375, [ 599.78436, 483.17535]);
		p.setValueAtTime(3.4166665, [ 600.4284, 480.6546]);
		p.setValueAtTime(3.4583335, [ 600.4644, 480.46118]);
		p.setValueAtTime(3.5, [ 600.5338, 479.239]);
		p.setValueAtTime(3.5416667, [ 600.56244, 479.319]);
		p.setValueAtTime(3.5833333, [ 601.0402, 481.99564]);
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
		p.setValueAtTime(0.0, [ 1079.8505, 452.09894]);
		p.setValueAtTime(0.041666668, [ 1079.8505, 452.09894]);
		p.setValueAtTime(0.083333336, [ 1080.8751, 455.18552]);
		p.setValueAtTime(0.125, [ 1080.9254, 455.49512]);
		p.setValueAtTime(0.16666667, [ 1080.9086, 457.93692]);
		p.setValueAtTime(0.20833333, [ 1080.8514, 451.43414]);
		p.setValueAtTime(0.25, [ 1080.8486, 451.10904]);
		p.setValueAtTime(0.2916667, [ 1080.8436, 451.46213]);
		p.setValueAtTime(0.33333334, [ 1080.7552, 457.72897]);
		p.setValueAtTime(0.375, [ 1080.7162, 450.8723]);
		p.setValueAtTime(0.41666666, [ 1080.7142, 450.5295]);
		p.setValueAtTime(0.45833334, [ 1080.7388, 451.10107]);
		p.setValueAtTime(0.5, [ 1081.1849, 461.72662]);
		p.setValueAtTime(0.5416666, [ 1081.196, 461.83838]);
		p.setValueAtTime(0.5833334, [ 1080.9949, 454.29254]);
		p.setValueAtTime(0.625, [ 1080.9728, 454.49365]);
		p.setValueAtTime(0.6666667, [ 1080.755, 464.91476]);
		p.setValueAtTime(0.7083333, [ 1080.7294, 465.0276]);
		p.setValueAtTime(0.75, [ 1080.4624, 457.68506]);
		p.setValueAtTime(0.7916667, [ 1080.4755, 457.62427]);
		p.setValueAtTime(0.8333333, [ 1080.9501, 463.13498]);
		p.setValueAtTime(0.875, [ 1080.9377, 463.17584]);
		p.setValueAtTime(0.9166667, [ 1080.2885, 458.95386]);
		p.setValueAtTime(0.9583334, [ 1080.2839, 459.1941]);
		p.setValueAtTime(1.0, [ 1080.7855, 467.3299]);
		p.setValueAtTime(1.0416666, [ 1080.7755, 467.26074]);
		p.setValueAtTime(1.0833333, [ 1080.1451, 458.69034]);
		p.setValueAtTime(1.125, [ 1080.1322, 458.71997]);
		p.setValueAtTime(1.1666667, [ 1080.4668, 466.9685]);
		p.setValueAtTime(1.2083334, [ 1080.5033, 467.12424]);
		p.setValueAtTime(1.25, [ 1080.8622, 462.51035]);
		p.setValueAtTime(1.2916666, [ 1080.8728, 462.50488]);
		p.setValueAtTime(1.3333334, [ 1080.7412, 466.55807]);
		p.setValueAtTime(1.375, [ 1080.7047, 466.62228]);
		p.setValueAtTime(1.4166666, [ 1080.165, 464.13385]);
		p.setValueAtTime(1.4583333, [ 1080.17, 464.24884]);
		p.setValueAtTime(1.5, [ 1080.7445, 468.56406]);
		p.setValueAtTime(1.5416667, [ 1080.7449, 468.6547]);
		p.setValueAtTime(1.5833334, [ 1080.2347, 466.40656]);
		p.setValueAtTime(1.625, [ 1080.2328, 466.37668]);
		p.setValueAtTime(1.6666666, [ 1080.6571, 467.86026]);
		p.setValueAtTime(1.7083333, [ 1080.6849, 468.0128]);
		p.setValueAtTime(1.75, [ 1080.8065, 469.43115]);
		p.setValueAtTime(1.7916666, [ 1080.7926, 469.45703]);
		p.setValueAtTime(1.8333334, [ 1080.4338, 468.6477]);
		p.setValueAtTime(1.8749999, [ 1080.4441, 468.69846]);
		p.setValueAtTime(1.9166667, [ 1080.9525, 470.3431]);
		p.setValueAtTime(1.9583333, [ 1080.9486, 470.35474]);
		p.setValueAtTime(2.0, [ 1080.417, 469.0842]);
		p.setValueAtTime(2.0416667, [ 1080.4305, 469.07257]);
		p.setValueAtTime(2.0833333, [ 1081.153, 470.00644]);
		p.setValueAtTime(2.125, [ 1081.1737, 470.0717]);
		p.setValueAtTime(2.1666665, [ 1080.8981, 470.40787]);
		p.setValueAtTime(2.2083333, [ 1080.927, 470.54703]);
		p.setValueAtTime(2.25, [ 1081.6963, 472.75592]);
		p.setValueAtTime(2.2916667, [ 1081.6771, 472.48184]);
		p.setValueAtTime(2.3333335, [ 1080.6406, 465.54694]);
		p.setValueAtTime(2.375, [ 1080.6312, 465.7316]);
		p.setValueAtTime(2.4166667, [ 1081.3934, 475.30588]);
		p.setValueAtTime(2.4583333, [ 1081.4288, 475.26636]);
		p.setValueAtTime(2.5, [ 1081.3813, 465.93628]);
		p.setValueAtTime(2.5416665, [ 1081.374, 465.65802]);
		p.setValueAtTime(2.5833333, [ 1081.2854, 469.03223]);
		p.setValueAtTime(2.625, [ 1081.2675, 469.1804]);
		p.setValueAtTime(2.6666667, [ 1081.0238, 468.81778]);
		p.setValueAtTime(2.7083335, [ 1080.9967, 468.8807]);
		p.setValueAtTime(2.75, [ 1080.7279, 470.3442]);
		p.setValueAtTime(2.7916667, [ 1080.7207, 470.33853]);
		p.setValueAtTime(2.8333333, [ 1080.8303, 468.91977]);
		p.setValueAtTime(2.875, [ 1080.8301, 468.9671]);
		p.setValueAtTime(2.9166665, [ 1080.7278, 471.0975]);
		p.setValueAtTime(2.9583333, [ 1080.6781, 470.89755]);
		p.setValueAtTime(3.0, [ 1079.8751, 465.371]);
		p.setValueAtTime(3.0416667, [ 1079.8611, 465.6507]);
		p.setValueAtTime(3.0833335, [ 1080.3286, 475.67252]);
		p.setValueAtTime(3.125, [ 1080.3152, 475.82568]);
		p.setValueAtTime(3.1666667, [ 1079.6514, 469.57007]);
		p.setValueAtTime(3.2083333, [ 1079.6283, 469.77545]);
		p.setValueAtTime(3.25, [ 1079.8107, 479.1123]);
		p.setValueAtTime(3.2916665, [ 1079.8162, 479.65704]);
		p.setValueAtTime(3.3333333, [ 1079.7518, 481.0858]);
		p.setValueAtTime(3.375, [ 1079.7843, 481.02267]);
		p.setValueAtTime(3.4166665, [ 1080.4286, 478.59732]);
		p.setValueAtTime(3.4583335, [ 1080.4645, 478.3907]);
		p.setValueAtTime(3.5, [ 1080.5337, 476.84357]);
		p.setValueAtTime(3.5416667, [ 1080.5624, 476.9103]);
		p.setValueAtTime(3.5833333, [ 1081.0403, 479.64392]);
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
		p.setValueAtTime(0.0, [ 599.8504, 369.99182]);
		p.setValueAtTime(0.041666668, [ 599.8504, 369.99182]);
		p.setValueAtTime(0.083333336, [ 600.875, 372.88907]);
		p.setValueAtTime(0.125, [ 600.92535, 373.14468]);
		p.setValueAtTime(0.16666667, [ 600.9086, 374.8325]);
		p.setValueAtTime(0.20833333, [ 600.8515, 369.1902]);
		p.setValueAtTime(0.25, [ 600.8487, 368.90808]);
		p.setValueAtTime(0.2916667, [ 600.84375, 369.2305]);
		p.setValueAtTime(0.33333334, [ 600.7552, 374.91068]);
		p.setValueAtTime(0.375, [ 600.716, 368.11517]);
		p.setValueAtTime(0.41666666, [ 600.71405, 367.7754]);
		p.setValueAtTime(0.45833334, [ 600.7387, 368.31427]);
		p.setValueAtTime(0.5, [ 601.1849, 378.3467]);
		p.setValueAtTime(0.5416666, [ 601.196, 378.46002]);
		p.setValueAtTime(0.5833334, [ 600.99493, 371.4758]);
		p.setValueAtTime(0.625, [ 600.97284, 371.64502]);
		p.setValueAtTime(0.6666667, [ 600.755, 380.9857]);
		p.setValueAtTime(0.7083333, [ 600.7294, 381.12595]);
		p.setValueAtTime(0.75, [ 600.46246, 375.2513]);
		p.setValueAtTime(0.7916667, [ 600.47546, 375.23468]);
		p.setValueAtTime(0.8333333, [ 600.9501, 380.22144]);
		p.setValueAtTime(0.875, [ 600.93774, 380.25745]);
		p.setValueAtTime(0.9166667, [ 600.2885, 376.4191]);
		p.setValueAtTime(0.9583334, [ 600.2839, 376.6539]);
		p.setValueAtTime(1.0, [ 600.7855, 384.347]);
		p.setValueAtTime(1.0416666, [ 600.7756, 384.3032]);
		p.setValueAtTime(1.0833333, [ 600.1452, 376.58847]);
		p.setValueAtTime(1.125, [ 600.13226, 376.629]);
		p.setValueAtTime(1.1666667, [ 600.46674, 384.30405]);
		p.setValueAtTime(1.2083334, [ 600.5033, 384.46802]);
		p.setValueAtTime(1.25, [ 600.8622, 380.52]);
		p.setValueAtTime(1.2916666, [ 600.8728, 380.5129]);
		p.setValueAtTime(1.3333334, [ 600.7412, 383.93814]);
		p.setValueAtTime(1.375, [ 600.7048, 384.01144]);
		p.setValueAtTime(1.4166666, [ 600.16516, 382.2524]);
		p.setValueAtTime(1.4583333, [ 600.17004, 382.38654]);
		p.setValueAtTime(1.5, [ 600.74457, 386.38974]);
		p.setValueAtTime(1.5416667, [ 600.745, 386.48248]);
		p.setValueAtTime(1.5833334, [ 600.2348, 384.55386]);
		p.setValueAtTime(1.625, [ 600.23285, 384.51196]);
		p.setValueAtTime(1.6666666, [ 600.657, 385.49127]);
		p.setValueAtTime(1.7083333, [ 600.6849, 385.5975]);
		p.setValueAtTime(1.75, [ 600.80646, 386.63397]);
		p.setValueAtTime(1.7916666, [ 600.79266, 386.66278]);
		p.setValueAtTime(1.8333334, [ 600.43396, 386.25006]);
		p.setValueAtTime(1.8749999, [ 600.4442, 386.32394]);
		p.setValueAtTime(1.9166667, [ 600.9526, 388.02957]);
		p.setValueAtTime(1.9583333, [ 600.9484, 388.0582]);
		p.setValueAtTime(2.0, [ 600.41693, 387.03955]);
		p.setValueAtTime(2.0416667, [ 600.4305, 387.0071]);
		p.setValueAtTime(2.0833333, [ 601.1528, 387.33813]);
		p.setValueAtTime(2.125, [ 601.1735, 387.3607]);
		p.setValueAtTime(2.1666665, [ 600.898, 387.4692]);
		p.setValueAtTime(2.2083333, [ 600.92694, 387.6002]);
		p.setValueAtTime(2.25, [ 601.6964, 389.86697]);
		p.setValueAtTime(2.2916667, [ 601.6773, 389.6179]);
		p.setValueAtTime(2.3333335, [ 600.6406, 383.0815]);
		p.setValueAtTime(2.375, [ 600.63116, 383.28027]);
		p.setValueAtTime(2.4166667, [ 601.3935, 392.75015]);
		p.setValueAtTime(2.4583333, [ 601.4289, 392.74203]);
		p.setValueAtTime(2.5, [ 601.3813, 384.07278]);
		p.setValueAtTime(2.5416665, [ 601.37396, 383.83844]);
		p.setValueAtTime(2.5833333, [ 601.28534, 387.4111]);
		p.setValueAtTime(2.625, [ 601.2674, 387.55435]);
		p.setValueAtTime(2.6666667, [ 601.0237, 386.92447]);
		p.setValueAtTime(2.7083335, [ 600.99664, 387.00226]);
		p.setValueAtTime(2.75, [ 600.7281, 388.9728]);
		p.setValueAtTime(2.7916667, [ 600.72076, 388.99045]);
		p.setValueAtTime(2.8333333, [ 600.83026, 387.53592]);
		p.setValueAtTime(2.875, [ 600.8301, 387.59357]);
		p.setValueAtTime(2.9166665, [ 600.72766, 389.94278]);
		p.setValueAtTime(2.9583333, [ 600.67804, 389.81845]);
		p.setValueAtTime(3.0, [ 599.8752, 385.45984]);
		p.setValueAtTime(3.0416667, [ 599.861, 385.743]);
		p.setValueAtTime(3.0833335, [ 600.32855, 394.777]);
		p.setValueAtTime(3.125, [ 600.315, 394.95566]);
		p.setValueAtTime(3.1666667, [ 599.6515, 390.04956]);
		p.setValueAtTime(3.2083333, [ 599.6285, 390.15585]);
		p.setValueAtTime(3.25, [ 599.81067, 396.4897]);
		p.setValueAtTime(3.2916665, [ 599.8161, 396.88318]);
		p.setValueAtTime(3.3333333, [ 599.75195, 398.28543]);
		p.setValueAtTime(3.375, [ 599.78436, 398.26242]);
		p.setValueAtTime(3.4166665, [ 600.4284, 396.58524]);
		p.setValueAtTime(3.4583335, [ 600.4644, 396.48416]);
		p.setValueAtTime(3.5, [ 600.5338, 396.169]);
		p.setValueAtTime(3.5416667, [ 600.56244, 396.24692]);
		p.setValueAtTime(3.5833333, [ 601.0402, 398.02576]);
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
		p.setValueAtTime(0.0, [ 1079.8505, 368.5976]);
		p.setValueAtTime(0.041666668, [ 1079.8505, 368.5976]);
		p.setValueAtTime(0.083333336, [ 1080.8751, 371.49863]);
		p.setValueAtTime(0.125, [ 1080.9254, 371.76285]);
		p.setValueAtTime(0.16666667, [ 1080.9086, 373.57025]);
		p.setValueAtTime(0.20833333, [ 1080.8514, 367.3363]);
		p.setValueAtTime(0.25, [ 1080.8486, 367.02463]);
		p.setValueAtTime(0.2916667, [ 1080.8436, 367.33688]);
		p.setValueAtTime(0.33333334, [ 1080.7552, 372.8693]);
		p.setValueAtTime(0.375, [ 1080.7162, 366.22202]);
		p.setValueAtTime(0.41666666, [ 1080.7142, 365.88968]);
		p.setValueAtTime(0.45833334, [ 1080.7388, 366.4263]);
		p.setValueAtTime(0.5, [ 1081.1849, 376.41153]);
		p.setValueAtTime(0.5416666, [ 1081.196, 376.53397]);
		p.setValueAtTime(0.5833334, [ 1080.9949, 369.75702]);
		p.setValueAtTime(0.625, [ 1080.9728, 369.95654]);
		p.setValueAtTime(0.6666667, [ 1080.755, 379.65805]);
		p.setValueAtTime(0.7083333, [ 1080.7294, 379.7939]);
		p.setValueAtTime(0.75, [ 1080.4624, 373.51425]);
		p.setValueAtTime(0.7916667, [ 1080.4755, 373.4721]);
		p.setValueAtTime(0.8333333, [ 1080.9501, 378.36288]);
		p.setValueAtTime(0.875, [ 1080.9377, 378.39835]);
		p.setValueAtTime(0.9166667, [ 1080.2885, 374.6368]);
		p.setValueAtTime(0.9583334, [ 1080.2839, 374.8765]);
		p.setValueAtTime(1.0, [ 1080.7855, 382.58875]);
		p.setValueAtTime(1.0416666, [ 1080.7755, 382.54965]);
		p.setValueAtTime(1.0833333, [ 1080.1451, 374.90298]);
		p.setValueAtTime(1.125, [ 1080.1322, 374.9451]);
		p.setValueAtTime(1.1666667, [ 1080.4668, 382.5877]);
		p.setValueAtTime(1.2083334, [ 1080.5033, 382.7606]);
		p.setValueAtTime(1.25, [ 1080.8622, 379.00253]);
		p.setValueAtTime(1.2916666, [ 1080.8728, 378.9956]);
		p.setValueAtTime(1.3333334, [ 1080.7412, 382.253]);
		p.setValueAtTime(1.375, [ 1080.7047, 382.31866]);
		p.setValueAtTime(1.4166666, [ 1080.165, 380.5724]);
		p.setValueAtTime(1.4583333, [ 1080.17, 380.6988]);
		p.setValueAtTime(1.5, [ 1080.7445, 384.55225]);
		p.setValueAtTime(1.5416667, [ 1080.7449, 384.63974]);
		p.setValueAtTime(1.5833334, [ 1080.2347, 382.75043]);
		p.setValueAtTime(1.625, [ 1080.2328, 382.7398]);
		p.setValueAtTime(1.6666666, [ 1080.6571, 384.24817]);
		p.setValueAtTime(1.7083333, [ 1080.6849, 384.3762]);
		p.setValueAtTime(1.75, [ 1080.8065, 385.3293]);
		p.setValueAtTime(1.7916666, [ 1080.7926, 385.35352]);
		p.setValueAtTime(1.8333334, [ 1080.4338, 384.93216]);
		p.setValueAtTime(1.8749999, [ 1080.4441, 384.99103]);
		p.setValueAtTime(1.9166667, [ 1080.9525, 386.43277]);
		p.setValueAtTime(1.9583333, [ 1080.9486, 386.4449]);
		p.setValueAtTime(2.0, [ 1080.417, 385.36652]);
		p.setValueAtTime(2.0416667, [ 1080.4305, 385.3419]);
		p.setValueAtTime(2.0833333, [ 1081.153, 385.86734]);
		p.setValueAtTime(2.125, [ 1081.1737, 385.9238]);
		p.setValueAtTime(2.1666665, [ 1080.8981, 386.46967]);
		p.setValueAtTime(2.2083333, [ 1080.927, 386.61554]);
		p.setValueAtTime(2.25, [ 1081.6963, 388.75754]);
		p.setValueAtTime(2.2916667, [ 1081.6771, 388.51843]);
		p.setValueAtTime(2.3333335, [ 1080.6406, 382.27512]);
		p.setValueAtTime(2.375, [ 1080.6312, 382.46884]);
		p.setValueAtTime(2.4166667, [ 1081.3934, 391.58496]);
		p.setValueAtTime(2.4583333, [ 1081.4288, 391.55838]);
		p.setValueAtTime(2.5, [ 1081.3813, 382.87393]);
		p.setValueAtTime(2.5416665, [ 1081.374, 382.61618]);
		p.setValueAtTime(2.5833333, [ 1081.2854, 385.78015]);
		p.setValueAtTime(2.625, [ 1081.2675, 385.91403]);
		p.setValueAtTime(2.6666667, [ 1081.0238, 385.4833]);
		p.setValueAtTime(2.7083335, [ 1080.9967, 385.55524]);
		p.setValueAtTime(2.75, [ 1080.7279, 387.24106]);
		p.setValueAtTime(2.7916667, [ 1080.7207, 387.24817]);
		p.setValueAtTime(2.8333333, [ 1080.8303, 385.8592]);
		p.setValueAtTime(2.875, [ 1080.8301, 385.90707]);
		p.setValueAtTime(2.9166665, [ 1080.7278, 388.02112]);
		p.setValueAtTime(2.9583333, [ 1080.6781, 387.90665]);
		p.setValueAtTime(3.0, [ 1079.8751, 383.93784]);
		p.setValueAtTime(3.0416667, [ 1079.8611, 384.22937]);
		p.setValueAtTime(3.0833335, [ 1080.3286, 393.0638]);
		p.setValueAtTime(3.125, [ 1080.3152, 393.22806]);
		p.setValueAtTime(3.1666667, [ 1079.6514, 388.24155]);
		p.setValueAtTime(3.2083333, [ 1079.6283, 388.3477]);
		p.setValueAtTime(3.25, [ 1079.8107, 394.7512]);
		p.setValueAtTime(3.2916665, [ 1079.8162, 395.1232]);
		p.setValueAtTime(3.3333333, [ 1079.7518, 396.0754]);
		p.setValueAtTime(3.375, [ 1079.7843, 396.0401]);
		p.setValueAtTime(3.4166665, [ 1080.4286, 394.5459]);
		p.setValueAtTime(3.4583335, [ 1080.4645, 394.43713]);
		p.setValueAtTime(3.5, [ 1080.5337, 393.8188]);
		p.setValueAtTime(3.5416667, [ 1080.5624, 393.88498]);
		p.setValueAtTime(3.5833333, [ 1081.0403, 395.72867]);
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
		p.setValueAtTime(0.0, [ 839.8504, 917.94617]);
		p.setValueAtTime(0.041666668, [ 839.8504, 917.94617]);
		p.setValueAtTime(0.083333336, [ 840.875, 918.3379]);
		p.setValueAtTime(0.125, [ 840.9253, 918.31165]);
		p.setValueAtTime(0.16666667, [ 840.9085, 917.5366]);
		p.setValueAtTime(0.20833333, [ 840.8515, 918.4355]);
		p.setValueAtTime(0.25, [ 840.84863, 918.4804]);
		p.setValueAtTime(0.2916667, [ 840.84375, 918.4409]);
		p.setValueAtTime(0.33333334, [ 840.7552, 917.7311]);
		p.setValueAtTime(0.375, [ 840.716, 918.4632]);
		p.setValueAtTime(0.41666666, [ 840.71405, 918.4998]);
		p.setValueAtTime(0.45833334, [ 840.7387, 918.5454]);
		p.setValueAtTime(0.5, [ 841.1849, 919.3348]);
		p.setValueAtTime(0.5416666, [ 841.196, 919.4557]);
		p.setValueAtTime(0.5833334, [ 840.99493, 920.9285]);
		p.setValueAtTime(0.625, [ 840.97284, 921.00146]);
		p.setValueAtTime(0.6666667, [ 840.755, 920.9923]);
		p.setValueAtTime(0.7083333, [ 840.72943, 920.9997]);
		p.setValueAtTime(0.75, [ 840.4625, 921.1432]);
		p.setValueAtTime(0.7916667, [ 840.4755, 921.2039]);
		p.setValueAtTime(0.8333333, [ 840.95013, 922.17236]);
		p.setValueAtTime(0.875, [ 840.9378, 922.24774]);
		p.setValueAtTime(0.9166667, [ 840.2885, 922.73584]);
		p.setValueAtTime(0.9583334, [ 840.2839, 922.82684]);
		p.setValueAtTime(1.0, [ 840.7856, 924.02997]);
		p.setValueAtTime(1.0416666, [ 840.7756, 924.1118]);
		p.setValueAtTime(1.0833333, [ 840.14514, 924.50714]);
		p.setValueAtTime(1.125, [ 840.13226, 924.52374]);
		p.setValueAtTime(1.1666667, [ 840.46674, 924.46533]);
		p.setValueAtTime(1.2083334, [ 840.50336, 924.50726]);
		p.setValueAtTime(1.25, [ 840.86224, 925.3169]);
		p.setValueAtTime(1.2916666, [ 840.87274, 925.37805]);
		p.setValueAtTime(1.3333334, [ 840.7412, 925.7539]);
		p.setValueAtTime(1.375, [ 840.7047, 925.80585]);
		p.setValueAtTime(1.4166666, [ 840.16516, 926.40674]);
		p.setValueAtTime(1.4583333, [ 840.17004, 926.47943]);
		p.setValueAtTime(1.5, [ 840.7446, 927.2505]);
		p.setValueAtTime(1.5416667, [ 840.74493, 927.3361]);
		p.setValueAtTime(1.5833334, [ 840.2348, 928.1868]);
		p.setValueAtTime(1.625, [ 840.23285, 928.22626]);
		p.setValueAtTime(1.6666666, [ 840.6569, 928.172]);
		p.setValueAtTime(1.7083333, [ 840.6849, 928.21515]);
		p.setValueAtTime(1.75, [ 840.80646, 929.04486]);
		p.setValueAtTime(1.7916666, [ 840.79266, 929.0724]);
		p.setValueAtTime(1.8333334, [ 840.434, 928.82196]);
		p.setValueAtTime(1.8749999, [ 840.44415, 928.82245]);
		p.setValueAtTime(1.9166667, [ 840.9526, 929.05585]);
		p.setValueAtTime(1.9583333, [ 840.9484, 929.1201]);
		p.setValueAtTime(2.0, [ 840.417, 930.06903]);
		p.setValueAtTime(2.0416667, [ 840.4305, 930.06757]);
		p.setValueAtTime(2.0833333, [ 841.15283, 929.18634]);
		p.setValueAtTime(2.125, [ 841.1735, 929.1805]);
		p.setValueAtTime(2.1666665, [ 840.89795, 929.86945]);
		p.setValueAtTime(2.2083333, [ 840.9269, 929.9399]);
		p.setValueAtTime(2.25, [ 841.6964, 930.58997]);
		p.setValueAtTime(2.2916667, [ 841.67737, 930.67206]);
		p.setValueAtTime(2.3333335, [ 840.6406, 931.5695]);
		p.setValueAtTime(2.375, [ 840.63116, 931.6196]);
		p.setValueAtTime(2.4166667, [ 841.3935, 931.71515]);
		p.setValueAtTime(2.4583333, [ 841.42883, 931.7376]);
		p.setValueAtTime(2.5, [ 841.3813, 932.0573]);
		p.setValueAtTime(2.5416665, [ 841.374, 932.10986]);
		p.setValueAtTime(2.5833333, [ 841.28534, 932.771]);
		p.setValueAtTime(2.625, [ 841.2674, 932.8255]);
		p.setValueAtTime(2.6666667, [ 841.02374, 933.2134]);
		p.setValueAtTime(2.7083335, [ 840.9967, 933.22424]);
		p.setValueAtTime(2.75, [ 840.72815, 933.0726]);
		p.setValueAtTime(2.7916667, [ 840.7208, 933.0529]);
		p.setValueAtTime(2.8333333, [ 840.83026, 932.8351]);
		p.setValueAtTime(2.875, [ 840.8301, 932.882]);
		p.setValueAtTime(2.9166665, [ 840.72766, 933.92523]);
		p.setValueAtTime(2.9583333, [ 840.67804, 933.9808]);
		p.setValueAtTime(3.0, [ 839.8751, 934.04474]);
		p.setValueAtTime(3.0416667, [ 839.861, 934.00226]);
		p.setValueAtTime(3.0833335, [ 840.32855, 933.1774]);
		p.setValueAtTime(3.125, [ 840.31506, 933.24286]);
		p.setValueAtTime(3.1666667, [ 839.6515, 935.1662]);
		p.setValueAtTime(3.2083333, [ 839.6284, 935.3677]);
		p.setValueAtTime(3.25, [ 839.81067, 937.27277]);
		p.setValueAtTime(3.2916665, [ 839.8161, 937.39386]);
		p.setValueAtTime(3.3333333, [ 839.75195, 937.8636]);
		p.setValueAtTime(3.375, [ 839.78436, 937.9321]);
		p.setValueAtTime(3.4166665, [ 840.4284, 938.7487]);
		p.setValueAtTime(3.4583335, [ 840.4645, 938.7507]);
		p.setValueAtTime(3.5, [ 840.5338, 938.0509]);
		p.setValueAtTime(3.5416667, [ 840.56244, 938.069]);
		p.setValueAtTime(3.5833333, [ 841.0402, 939.0742]);
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
		p.setValueAtTime(0.0, [ 839.8504, 583.2733]);
		p.setValueAtTime(0.041666668, [ 839.8504, 583.2733]);
		p.setValueAtTime(0.083333336, [ 840.875, 582.2261]);
		p.setValueAtTime(0.125, [ 840.9253, 582.1455]);
		p.setValueAtTime(0.16666667, [ 840.9085, 581.6543]);
		p.setValueAtTime(0.20833333, [ 840.8515, 581.9908]);
		p.setValueAtTime(0.25, [ 840.84863, 582.0076]);
		p.setValueAtTime(0.2916667, [ 840.84375, 582.01434]);
		p.setValueAtTime(0.33333334, [ 840.7552, 582.17725]);
		p.setValueAtTime(0.375, [ 840.716, 583.2162]);
		p.setValueAtTime(0.41666666, [ 840.71405, 583.26807]);
		p.setValueAtTime(0.45833334, [ 840.7387, 583.3063]);
		p.setValueAtTime(0.5, [ 841.1849, 583.9482]);
		p.setValueAtTime(0.5416666, [ 841.196, 583.9911]);
		p.setValueAtTime(0.5833334, [ 840.99493, 584.1875]);
		p.setValueAtTime(0.625, [ 840.97284, 584.2111]);
		p.setValueAtTime(0.6666667, [ 840.755, 584.46063]);
		p.setValueAtTime(0.7083333, [ 840.72943, 584.49347]);
		p.setValueAtTime(0.75, [ 840.4625, 584.86053]);
		p.setValueAtTime(0.7916667, [ 840.4755, 584.9039]);
		p.setValueAtTime(0.8333333, [ 840.95013, 585.3555]);
		p.setValueAtTime(0.875, [ 840.9378, 585.3701]);
		p.setValueAtTime(0.9166667, [ 840.2885, 585.22754]);
		p.setValueAtTime(0.9583334, [ 840.2839, 585.3033]);
		p.setValueAtTime(1.0, [ 840.7856, 586.7985]);
		p.setValueAtTime(1.0416666, [ 840.7756, 586.87195]);
		p.setValueAtTime(1.0833333, [ 840.14514, 586.8516]);
		p.setValueAtTime(1.125, [ 840.13226, 586.88226]);
		p.setValueAtTime(1.1666667, [ 840.46674, 587.454]);
		p.setValueAtTime(1.2083334, [ 840.50336, 587.4875]);
		p.setValueAtTime(1.25, [ 840.86224, 587.57837]);
		p.setValueAtTime(1.2916666, [ 840.87274, 587.62463]);
		p.setValueAtTime(1.3333334, [ 840.7412, 588.3771]);
		p.setValueAtTime(1.375, [ 840.7047, 588.399]);
		p.setValueAtTime(1.4166666, [ 840.16516, 588.11865]);
		p.setValueAtTime(1.4583333, [ 840.17004, 588.174]);
		p.setValueAtTime(1.5, [ 840.7446, 589.425]);
		p.setValueAtTime(1.5416667, [ 840.74493, 589.4812]);
		p.setValueAtTime(1.5833334, [ 840.2348, 589.37146]);
		p.setValueAtTime(1.625, [ 840.23285, 589.40173]);
		p.setValueAtTime(1.6666666, [ 840.6569, 590.04706]);
		p.setValueAtTime(1.7083333, [ 840.6849, 590.0915]);
		p.setValueAtTime(1.75, [ 840.80646, 590.3117]);
		p.setValueAtTime(1.7916666, [ 840.79266, 590.32556]);
		p.setValueAtTime(1.8333334, [ 840.434, 590.37695]);
		p.setValueAtTime(1.8749999, [ 840.44415, 590.3888]);
		p.setValueAtTime(1.9166667, [ 840.9526, 590.55585]);
		p.setValueAtTime(1.9583333, [ 840.9484, 590.5595]);
		p.setValueAtTime(2.0, [ 840.417, 590.4748]);
		p.setValueAtTime(2.0416667, [ 840.4305, 590.5048]);
		p.setValueAtTime(2.0833333, [ 841.15283, 591.1232]);
		p.setValueAtTime(2.125, [ 841.1735, 591.17865]);
		p.setValueAtTime(2.1666665, [ 840.89795, 591.6232]);
		p.setValueAtTime(2.2083333, [ 840.9269, 591.6664]);
		p.setValueAtTime(2.25, [ 841.6964, 592.0447]);
		p.setValueAtTime(2.2916667, [ 841.67737, 592.0704]);
		p.setValueAtTime(2.3333335, [ 840.6406, 592.1924]);
		p.setValueAtTime(2.375, [ 840.63116, 592.2034]);
		p.setValueAtTime(2.4166667, [ 841.3935, 592.2933]);
		p.setValueAtTime(2.4583333, [ 841.42883, 592.3341]);
		p.setValueAtTime(2.5, [ 841.3813, 592.98987]);
		p.setValueAtTime(2.5416665, [ 841.374, 593.05756]);
		p.setValueAtTime(2.5833333, [ 841.28534, 593.68915]);
		p.setValueAtTime(2.625, [ 841.2674, 593.7445]);
		p.setValueAtTime(2.6666667, [ 841.02374, 594.1757]);
		p.setValueAtTime(2.7083335, [ 840.9967, 594.2348]);
		p.setValueAtTime(2.75, [ 840.72815, 594.91235]);
		p.setValueAtTime(2.7916667, [ 840.7208, 594.96234]);
		p.setValueAtTime(2.8333333, [ 840.83026, 595.25507]);
		p.setValueAtTime(2.875, [ 840.8301, 595.30695]);
		p.setValueAtTime(2.9166665, [ 840.72766, 595.97894]);
		p.setValueAtTime(2.9583333, [ 840.67804, 596.0131]);
		p.setValueAtTime(3.0, [ 839.8751, 596.0251]);
		p.setValueAtTime(3.0416667, [ 839.861, 596.0435]);
		p.setValueAtTime(3.0833335, [ 840.32855, 596.36536]);
		p.setValueAtTime(3.125, [ 840.31506, 596.382]);
		p.setValueAtTime(3.1666667, [ 839.6515, 596.3933]);
		p.setValueAtTime(3.2083333, [ 839.6284, 596.469]);
		p.setValueAtTime(3.25, [ 839.81067, 597.8239]);
		p.setValueAtTime(3.2916665, [ 839.8161, 597.8955]);
		p.setValueAtTime(3.3333333, [ 839.75195, 597.9689]);
		p.setValueAtTime(3.375, [ 839.78436, 598.0228]);
		p.setValueAtTime(3.4166665, [ 840.4284, 598.9304]);
		p.setValueAtTime(3.4583335, [ 840.4645, 598.9613]);
		p.setValueAtTime(3.5, [ 840.5338, 598.7016]);
		p.setValueAtTime(3.5416667, [ 840.56244, 598.7307]);
		p.setValueAtTime(3.5833333, [ 841.0402, 599.53015]);
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
		p.setValueAtTime(0.0, [ 839.8504, 805.8238]);
		p.setValueAtTime(0.041666668, [ 839.8504, 805.8238]);
		p.setValueAtTime(0.083333336, [ 840.875, 805.3786]);
		p.setValueAtTime(0.125, [ 840.9253, 805.32367]);
		p.setValueAtTime(0.16666667, [ 840.9085, 804.7548]);
		p.setValueAtTime(0.20833333, [ 840.8515, 805.11395]);
		p.setValueAtTime(0.25, [ 840.84863, 805.1319]);
		p.setValueAtTime(0.2916667, [ 840.84375, 805.13086]);
		p.setValueAtTime(0.33333334, [ 840.7552, 805.1457]);
		p.setValueAtTime(0.375, [ 840.716, 806.0382]);
		p.setValueAtTime(0.41666666, [ 840.71405, 806.0828]);
		p.setValueAtTime(0.45833334, [ 840.7387, 806.1213]);
		p.setValueAtTime(0.5, [ 841.1849, 806.7741]);
		p.setValueAtTime(0.5416666, [ 841.196, 806.85864]);
		p.setValueAtTime(0.5833334, [ 840.99493, 807.7975]);
		p.setValueAtTime(0.625, [ 840.97284, 807.8601]);
		p.setValueAtTime(0.6666667, [ 840.755, 808.1451]);
		p.setValueAtTime(0.7083333, [ 840.72943, 808.1731]);
		p.setValueAtTime(0.75, [ 840.4625, 808.4224]);
		p.setValueAtTime(0.7916667, [ 840.4755, 808.46625]);
		p.setValueAtTime(0.8333333, [ 840.95013, 809.0328]);
		p.setValueAtTime(0.875, [ 840.9378, 809.06647]);
		p.setValueAtTime(0.9166667, [ 840.2885, 809.16425]);
		p.setValueAtTime(0.9583334, [ 840.2839, 809.21576]);
		p.setValueAtTime(1.0, [ 840.7856, 810.05725]);
		p.setValueAtTime(1.0416666, [ 840.7756, 810.10864]);
		p.setValueAtTime(1.0833333, [ 840.14514, 810.2793]);
		p.setValueAtTime(1.125, [ 840.13226, 810.31067]);
		p.setValueAtTime(1.1666667, [ 840.46674, 810.7226]);
		p.setValueAtTime(1.2083334, [ 840.50336, 810.7583]);
		p.setValueAtTime(1.25, [ 840.86224, 811.0319]);
		p.setValueAtTime(1.2916666, [ 840.87274, 811.07214]);
		p.setValueAtTime(1.3333334, [ 840.7412, 811.5506]);
		p.setValueAtTime(1.375, [ 840.7047, 811.5814]);
		p.setValueAtTime(1.4166666, [ 840.16516, 811.7071]);
		p.setValueAtTime(1.4583333, [ 840.17004, 811.76825]);
		p.setValueAtTime(1.5, [ 840.7446, 812.75934]);
		p.setValueAtTime(1.5416667, [ 840.74493, 812.8182]);
		p.setValueAtTime(1.5833334, [ 840.2348, 812.98846]);
		p.setValueAtTime(1.625, [ 840.23285, 813.018]);
		p.setValueAtTime(1.6666666, [ 840.6569, 813.399]);
		p.setValueAtTime(1.7083333, [ 840.6849, 813.4519]);
		p.setValueAtTime(1.75, [ 840.80646, 814.06335]);
		p.setValueAtTime(1.7916666, [ 840.79266, 814.0941]);
		p.setValueAtTime(1.8333334, [ 840.434, 814.09955]);
		p.setValueAtTime(1.8749999, [ 840.44415, 814.1134]);
		p.setValueAtTime(1.9166667, [ 840.9526, 814.3586]);
		p.setValueAtTime(1.9583333, [ 840.9484, 814.3752]);
		p.setValueAtTime(2.0, [ 840.417, 814.45483]);
		p.setValueAtTime(2.0416667, [ 840.4305, 814.4769]);
		p.setValueAtTime(2.0833333, [ 841.15283, 814.803]);
		p.setValueAtTime(2.125, [ 841.1735, 814.8398]);
		p.setValueAtTime(2.1666665, [ 840.89795, 815.2109]);
		p.setValueAtTime(2.2083333, [ 840.9269, 815.25824]);
		p.setValueAtTime(2.25, [ 841.6964, 815.7802]);
		p.setValueAtTime(2.2916667, [ 841.67737, 815.82477]);
		p.setValueAtTime(2.3333335, [ 840.6406, 816.15826]);
		p.setValueAtTime(2.375, [ 840.63116, 816.19006]);
		p.setValueAtTime(2.4166667, [ 841.3935, 816.4639]);
		p.setValueAtTime(2.4583333, [ 841.42883, 816.5052]);
		p.setValueAtTime(2.5, [ 841.3813, 817.0042]);
		p.setValueAtTime(2.5416665, [ 841.374, 817.0478]);
		p.setValueAtTime(2.5833333, [ 841.28534, 817.3859]);
		p.setValueAtTime(2.625, [ 841.2674, 817.43286]);
		p.setValueAtTime(2.6666667, [ 841.02374, 817.9761]);
		p.setValueAtTime(2.7083335, [ 840.9967, 818.02594]);
		p.setValueAtTime(2.75, [ 840.72815, 818.4365]);
		p.setValueAtTime(2.7916667, [ 840.7208, 818.47235]);
		p.setValueAtTime(2.8333333, [ 840.83026, 818.7488]);
		p.setValueAtTime(2.875, [ 840.8301, 818.7935]);
		p.setValueAtTime(2.9166665, [ 840.72766, 819.35254]);
		p.setValueAtTime(2.9583333, [ 840.67804, 819.37305]);
		p.setValueAtTime(3.0, [ 839.8751, 819.23956]);
		p.setValueAtTime(3.0416667, [ 839.861, 819.2497]);
		p.setValueAtTime(3.0833335, [ 840.32855, 819.55365]);
		p.setValueAtTime(3.125, [ 840.31506, 819.5871]);
		p.setValueAtTime(3.1666667, [ 839.6515, 819.9189]);
		p.setValueAtTime(3.2083333, [ 839.6284, 820.0163]);
		p.setValueAtTime(3.25, [ 839.81067, 821.4765]);
		p.setValueAtTime(3.2916665, [ 839.8161, 821.562]);
		p.setValueAtTime(3.3333333, [ 839.75195, 821.7922]);
		p.setValueAtTime(3.375, [ 839.78436, 821.8561]);
		p.setValueAtTime(3.4166665, [ 840.4284, 822.80194]);
		p.setValueAtTime(3.4583335, [ 840.4645, 822.83936]);
		p.setValueAtTime(3.5, [ 840.5338, 822.6639]);
		p.setValueAtTime(3.5416667, [ 840.56244, 822.7015]);
		p.setValueAtTime(3.5833333, [ 841.0402, 823.58185]);
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

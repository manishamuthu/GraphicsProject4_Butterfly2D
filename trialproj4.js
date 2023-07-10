function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var slider1 = document.getElementById('slider1');
    slider1.value = -25;

    function draw() {
	canvas.width = canvas.width;
	// use the sliders to get the angles
	var tParam = slider1.value*0.01;
	
	function moveToTx(loc,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec2.create(); vec2.transformMat3(res,loc,Tx); context.lineTo(res[0],res[1]);}
	
	function drawObject(color,Tx) {
	    context.beginPath();
	    context.fillStyle = color;
// 	    moveToTx([-5,-5],Tx);
// 	    lineToTx([-5,5],Tx);
// 	    lineToTx([5,5],Tx);
// 	    lineToTx([5,-5],Tx);
//             moveToTx([0,0],Tx);
//       lineToTx([-10,-10],Tx);
//       lineToTx([-10,-40],Tx);
//       lineToTx([0,-0],Tx);
//       lineToTx([10,-40],Tx);
//       lineToTx([10,-10],Tx);
//       lineToTx([0,0],Tx);
	    context.closePath();
	    context.fill();
	}
      
    function drawButterfly(color,Tx) {
	    context.beginPath();
	    context.fillStyle = color;
      moveToTx([0,0],Tx);
      lineToTx([-.1,-.1],Tx);
      lineToTx([-.1,-.4],Tx);
      lineToTx([0,-.5],Tx);
      lineToTx([.1,-.4],Tx);
      lineToTx([.1,-.1],Tx);
      lineToTx([0,0],Tx);
	    context.closePath();
	    context.fill();
      
      context.beginPath();
	  context.strokeStyle = color;
      moveToTx([0,0],Tx);
      lineToTx([.1,.2],Tx);
      moveToTx([0,0],Tx);
      lineToTx([-.1,.2],Tx);
      context.stroke();
      
      drawRightWing("pink",Tx);
      drawLeftWing("pink",Tx)
      
	}
      function drawRightWing(color,Tx)
      {
        context.beginPath();
	    context.fillStyle = color;
        moveToTx([.1,-.1],Tx);
        lineToTx([.2,.1],Tx);
        lineToTx([.3,.2],Tx);
        lineToTx([.5,.2],Tx);
        lineToTx([.6,-.1],Tx);
        lineToTx([.4,-.3],Tx);
        lineToTx([.6,-.5],Tx);
        lineToTx([.4,-.8],Tx);
        lineToTx([.1,-.4],Tx);
        //lineToTx([],Tx);
        context.closePath();
	    context.fill();
        
      }
      function drawLeftWing(color,Tx)
      {
        context.beginPath();
	    context.fillStyle = color;
        moveToTx([-.1,-.1],Tx);
        lineToTx([-.2,.1],Tx);
        lineToTx([-.3,.2],Tx);
        lineToTx([-.5,.2],Tx);
        lineToTx([-.6,-.1],Tx);
        lineToTx([-.4,-.3],Tx);
        lineToTx([-.6,-.5],Tx);
        lineToTx([-.4,-.8],Tx);
        lineToTx([-.1,-.4],Tx);
        //lineToTx([],Tx);
        context.closePath();
	    context.fill();
        
      }
	
	
	
	function drawAxes(color,Tx) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([120,0],Tx);lineToTx([0,0],Tx);lineToTx([0,120],Tx);
	    // Arrowheads
	    moveToTx([110,5],Tx);lineToTx([120,0],Tx);lineToTx([110,-5],Tx);
	    moveToTx([5,110],Tx);lineToTx([0,120],Tx);lineToTx([-5,110],Tx);
	    // X-label
	    moveToTx([130,0],Tx);lineToTx([140,10],Tx);
	    moveToTx([130,10],Tx);lineToTx([140,0],Tx);
	    context.stroke();
	}

	var Rstart = 50.0;
	var Rslope = 25.0;
	var Cspiral = function(t) {
	    var R = Rslope * t + Rstart;
	    var x = R * Math.cos(2.0 * Math.PI * t);
	    var y = R * Math.sin(2.0 * Math.PI * t);
	    return [x,y];
	}
    
    ///*************************////////////////
    function drawAxes100unit(color,Tx) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([120,0],Tx);lineToTx([0,0],Tx);lineToTx([0,120],Tx);
	    // Arrowheads
	    moveToTx([110,5],Tx);lineToTx([120,0],Tx);lineToTx([110,-5],Tx);
	    moveToTx([5,110],Tx);lineToTx([0,120],Tx);lineToTx([-5,110],Tx);
	    // X-label
	    moveToTx([130,0],Tx);lineToTx([140,10],Tx);
	    moveToTx([130,10],Tx);lineToTx([140,0],Tx);
	    context.stroke();
	}

	function drawAxes1unit(color,Tx) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([1.20,0],Tx);lineToTx([0,0],Tx);lineToTx([0,1.20],Tx);
	    // Arrowheads
	    moveToTx([1.10,.05],Tx);lineToTx([1.20,0],Tx);lineToTx([1.10,-.05],Tx);
	    moveToTx([.05,1.10],Tx);lineToTx([0,1.20],Tx);lineToTx([-.05,1.10],Tx);
	    // X-label
	    moveToTx([1.30,0],Tx);lineToTx([1.40,.10],Tx);
	    moveToTx([1.30,.10],Tx);lineToTx([1.40,0],Tx);
	    context.stroke();
	}


	var Hermite = function(t) {
	    return [
		2*t*t*t-3*t*t+1,
		t*t*t-2*t*t+t,
		-2*t*t*t+3*t*t,
		t*t*t-t*t
	    ];
	}
    
   var HermiteDerivative = function(t) {
            return [
		6*t*t-6*t,
		3*t*t-4*t+1,
		-6*t*t+6*t,
		3*t*t-2*t
            ];
	}

	function Cubic(basis,P,t){
	    var b = basis(t);
	    var result=vec2.create();
	    vec2.scale(result,P[0],b[0]);
	    vec2.scaleAndAdd(result,result,P[1],b[1]);
	    vec2.scaleAndAdd(result,result,P[2],b[2]);
	    vec2.scaleAndAdd(result,result,P[3],b[3]);
	    return result;
	}
	
	var p0=[0,0];
	var d0=[1,3];
	var p1=[1,1];
	var d1=[-1,3];
	var p2=[2,2];
	var d2=[0,3];

	var P0 = [p0,d0,p1,d1]; // First two points and tangents
	var P1 = [p1,d1,p2,d2]; // Last two points and tangents

	var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
	var C1 = function(t_) {return Cubic(Hermite,P1,t_);};

    var C0prime = function(t_) {return Cubic(HermiteDerivative,P0,t_);};
	var C1prime = function(t_) {return Cubic(HermiteDerivative,P1,t_);};
	
    var Ccomp = function(t) {
        if (t<1){
            var u = t;
            return C0(u);
        } else {
            var u = t-1.0;
            return C1(u);
        }          
	}
    
    var Ccomp_tangent = function(t) {
            if (t<1){
		var u = t;
		return C0prime(u);
            } else {
		var u = t-1.0;
		return C1prime(u);
            }          
	}

    
    
    ////****************************////////////////
    
    ////BBBBBBBBBBBBBBBBB/////////
      function drawAxes3unit(color,Tx) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([1.20,0],Tx);lineToTx([0,0],Tx);lineToTx([0,1.20],Tx);
	    // Arrowheads
	    moveToTx([1.10,.05],Tx);lineToTx([1.20,0],Tx);lineToTx([1.10,-.05],Tx);
	    moveToTx([.05,1.10],Tx);lineToTx([0,1.20],Tx);lineToTx([-.05,1.10],Tx);
	    // X-label
	    moveToTx([1.30,0],Tx);lineToTx([1.40,.10],Tx);
	    moveToTx([1.30,.10],Tx);lineToTx([1.40,0],Tx);
	    context.stroke();
	}


	var Bspline = function(t) {
	    return [
		(1./6.)*(-t*t*t+3*t*t-3*t+1),
		(1./6.)*(3*t*t*t-6*t*t+4),
		(1./6.)*(-3*t*t*t+3*t*t+3*t+1),
		(1./6.)*t*t*t
	    ];
	}
    
    var BsplineDerivative = function(t) {
	    return [
		(1./6.)*(-3*t*t+6*t-3),
		(1./6.)*(9*t*t-12*t),
		(1./6.)*(-9*t*t+6*t+3),
		(1./6.)*(3*t*t)
	    ];
	}

	
	var b_p0=[1+Math.cos(5.*Math.PI/5.),Math.sin(5.*Math.PI/5.)];
	var b_p1=[1+Math.cos(4.*Math.PI/5.),Math.sin(4.*Math.PI/5.)];
	var b_p2=[1+Math.cos(3.*Math.PI/5.),Math.sin(3.*Math.PI/5.)];
	var b_p3=[1+Math.cos(2.*Math.PI/5.),Math.sin(2.*Math.PI/5.)];
	var b_p4=[1+Math.cos(1.*Math.PI/5.),Math.sin(1.*Math.PI/5.)];
	var b_p5=[1+Math.cos(0.*Math.PI/5.),Math.sin(0.*Math.PI/5.)];

	var b_P0 = [b_p0,b_p1,b_p2,b_p3];
	var b_P1 = [b_p1,b_p2,b_p3,b_p4];
	var b_P2 = [b_p2,b_p3,b_p4,b_p5];
      
	var b_C0 = function(t_) {return Cubic(Bspline,b_P0,t_);};
	var b_C1 = function(t_) {return Cubic(Bspline,b_P1,t_);};
	var b_C2 = function(t_) {return Cubic(Bspline,b_P2,t_);};

    var b_C0prime = function(t_) {return Cubic(BsplineDerivative,b_P0,t_);};
	var b_C1prime = function(t_) {return Cubic(BsplineDerivative,b_P1,t_);};
      
	var Ccomp2 = function(t) {
        if (t<1){
            var u = t;
            return b_C0(u);
        } else if (t<2){
            var u = t-1.0;
            return b_C1(u);
        } else {
            var u = t-2.0;
            return b_C2(u);
        }          
	}
    
         var Ccomp_tangent2 = function(t) {
            if (t<1){
		var u = t;
		return b_C0prime(u);
            } else {
		var u = t-1.0;
		return b_C1prime(u);
            }          
	}

	function drawTrajectory3(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    context.beginPath();
        moveToTx(C(t_begin),Tx);
        for(var i=1;i<=intervals;i++){
            var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
            lineToTx(C(t),Tx);
        }
        context.stroke();
	}
    
    ///BBBBBBBBBBBBBBBBBB//////

	function drawTrajectory(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    context.beginPath();
        moveToTx(C(t_begin),Tx);
        for(var i=1;i<=intervals;i++){
            var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
            lineToTx(C(t),Tx);
        }
        context.stroke();
	}
      
      function drawTrajectory2(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    context.beginPath();
        moveToTx(C(t_begin),Tx);
        for(var i=1;i<=intervals;i++){
            var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
            lineToTx(C(t),Tx);
        }
        context.stroke();
	}
      
      
      
      /////**********///////////
      drawAxes100unit("black", mat3.create());
	
	var T2blue_to_canvas = mat3.create();
	mat3.fromTranslation(T2blue_to_canvas,[350,350]);
	mat3.scale(T2blue_to_canvas,T2blue_to_canvas,[150,-150]); // Flip the Y-axis
	drawAxes1unit("grey",T2blue_to_canvas);

	drawTrajectory2(0.0,1.0,100,C0,T2blue_to_canvas,"red");
	drawTrajectory2(0.0,1.0,100,C1,T2blue_to_canvas,"blue");
	var T2green_to_blue = mat3.create();
	mat3.fromTranslation(T2green_to_blue,Ccomp(tParam));
	var T2green_to_canvas = mat3.create();
    //new stuff//
    var tangent = Ccomp_tangent(tParam);
	var angle = Math.atan2(tangent[1],tangent[0]);
    mat3.rotate(T2green_to_blue,T2green_to_blue,angle);
    mat3.multiply(T2green_to_canvas, T2blue_to_canvas, T2green_to_blue);
      //new stuff end
	//drawObject2("green",T2green_to_canvas);
      mat3.scale(T2green_to_canvas,T2green_to_canvas,[.3,.3]);
      drawButterfly("orange",T2green_to_canvas);
      /////**********///////////
      
      
      /////BBBBBBBBBB///////
      	var Tblue_to_canvas3 = mat3.create();
	mat3.fromTranslation(Tblue_to_canvas3,[50,450]);
	mat3.scale(Tblue_to_canvas3,Tblue_to_canvas3,[150,-150]); // Flip the Y-axis
	drawAxes3unit("grey",Tblue_to_canvas3);

    drawTrajectory3(0.0,1.0,100,b_C0,Tblue_to_canvas3,"red");
	drawTrajectory3(0.0,1.0,100,b_C1,Tblue_to_canvas3,"blue");
    drawTrajectory3(0.0,1.0,100,b_C2,Tblue_to_canvas3,"brown");  

    var Tgreen_to_blue3 = mat3.create();
	mat3.fromTranslation(Tgreen_to_blue3,Ccomp2(tParam));
	var Tgreen_to_canvas3 = mat3.create();
      
//           //new stuff//
    var tangent2 = Ccomp_tangent2(tParam);
	var angle2 = Math.atan2(tangent2[1],tangent2[0]);
    mat3.rotate(Tgreen_to_blue3,Tgreen_to_blue3,angle2);
    mat3.multiply(Tgreen_to_canvas3, Tblue_to_canvas3, Tgreen_to_blue3);
//       //new stuff end
      
	mat3.multiply(Tgreen_to_canvas3, Tblue_to_canvas3, Tgreen_to_blue3);
      mat3.scale(Tgreen_to_canvas3,Tgreen_to_canvas3,[.3,.3]);
      drawButterfly("blue",Tgreen_to_canvas3);
	//drawObject3("green",Tgreen_to_canvas3);
      ////BBBBBBBBBBBB//////////////

	// make sure you understand these    
      
	//drawAxes("black", mat3.create());
	
	var Tblue_to_canvas = mat3.create();
	mat3.fromTranslation(Tblue_to_canvas,[150,150]);
	mat3.scale(Tblue_to_canvas,Tblue_to_canvas,[1,-1]); // Flip the Y-axis
	//drawAxes("blue",Tblue_to_canvas);
	
	drawTrajectory(0.0,2.0,100,Cspiral,Tblue_to_canvas,"brown");

	var Tgreen_to_blue = mat3.create();
	mat3.fromTranslation(Tgreen_to_blue,Cspiral(tParam));
	var Tgreen_to_canvas = mat3.create();
      
                //new stuff//
     var tangent = Ccomp_tangent(tParam);
     var angle = Math.atan2(tangent[1],tangent[0]);
     mat3.rotate(Tgreen_to_blue,Tgreen_to_blue,angle);
//     mat3.multiply(Tgreen_to_canvas, T2blue_to_canvas, Tgreen_to_blue);
//       //new stuff end
      
	mat3.multiply(Tgreen_to_canvas, Tblue_to_canvas, Tgreen_to_blue);
    mat3.scale(Tgreen_to_canvas,Tgreen_to_canvas,[40,40]);
     drawButterfly("red",Tgreen_to_canvas);
	//drawObject("black",Tgreen_to_canvas);
    }

    slider1.addEventListener("input",draw);
    draw();
}
window.onload = setup;



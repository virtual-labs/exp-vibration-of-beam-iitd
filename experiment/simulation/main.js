function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2-6      

}



function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        

}



function navNext3()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";


}



function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";

}


function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";


        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6()

{

        document.getElementById("canvas6").style.visibility="hidden";

        document.getElementById("canvas7").style.visibility="visible";

        //document.getElementById("arrow4").style.visibility="visible";

        //document.getElementById("cubedatehidden").style.visibility="visible";
}

function navNext7()

{

        document.getElementById("canvas7").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";

}
function navNext8()
{

        document.getElementById("canvas8").style.visibility="hidden";

        document.getElementById("canvas9").style.visibility="visible";

}

function navNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

}


function ok1()
{

var eID = document.getElementById("x1");
var colorVal = eID.options[eID.selectedIndex].value;
//var colortxt = eID.options[eID.selectedIndex].text;
document.getElementById('img2').src=colorVal;
// document.getElementById('selectprocessor').style.visibility="hidden";
// document.getElementById('selectram').style.visibility="visible";
}

function ok2()
{

var eID = document.getElementById("mat1");
var colorVal = eID.options[eID.selectedIndex].value;
//var colortxt = eID.options[eID.selectedIndex].text;
document.getElementById('img4').src=colorVal;

// document.getElementById('selectprocessor').style.visibility="hidden";
// document.getElementById('selectram').style.visibility="visible";
}

var case1 = 0;
var case2 = 0;
var thick = 0;
var dia = 0;
var condition = 0;
var typemat = 0;
var E = 0;
var rho = 0;
var I = 0;
var A = 0;
var L = 0;



function showhammer()

{
	case1 = document.getElementById("x1").value;
if (case1 == "images/fix_fix.png") 
{
    case2 = "FF1";
}
if (case1 == "images/fix_free.png") 
{
    case2 = "FF2";
}
if (case1 == "images/fix_pin.png") 
{
    case2 = "FP3";
}    
if (case1 == "images/free_free.png") 
{
    case2 = "FF4";
}
if (case1 == "images/pin_pin.png") 
{
    case2 = "PP5";
}
     
    mode = document.getElementById("x2").value;
	length2 = document.getElementById("x3").value;
    width2 = document.getElementById("x4").value;
    hight2 = document.getElementById("x5").value;
    typemat = document.getElementById("mat1").value;
    // E = ;
    // rho =;

if (case2 !== "" && mode !== "" && length2 !== "" && width2 !== "" && hight2 !== "")
    {

    	if (case2 == "FF1")
    	{
    	document.getElementById("show1").style.visibility="hidden";	
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond1").style.visibility="visible";
        // document.getElementById("cond1").onclick="helo()";
    	}
        if (case2 == "FF2")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond1").style.visibility="visible";
        }
        if (case2 == "FP3")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond1").style.visibility="visible";
        }
        if (case2 == "FF4")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond1").style.visibility="visible";
        }
        if (case2 == "PP5")
        {
        document.getElementById("show1").style.visibility="hidden"; 
        document.getElementById("hammer1").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
        document.getElementById("s1a").style.visibility="hidden";
        document.getElementById("s1b").style.visibility="visible";
        document.getElementById("hammerarrow1").style.visibility="visible";
        document.getElementById("cond1").style.visibility="visible";
        }
     //    //document.getElementById("numoutnext").innerHTML = "Click Next";
     //    if (case2 == "FF2")
    	// {
     //    document.getElementById("show1").style.visibility="hidden";
     //    document.getElementById("plateshow1").style.visibility="visible";
     //    document.getElementById("hammer1").style.visibility="visible";
     //    document.getElementById("fillBox").innerHTML = "&nbsp;";
     //    document.getElementById("s1a").style.visibility="hidden";
     //    document.getElementById("s1b").style.visibility="visible";
     //    document.getElementById("hammerarrow1").style.visibility="visible";
     //    document.getElementById("cond2").style.visibility="visible";
    	// }
    }
    
    else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter all Values";
        // alert("Wrong");
        
    }

}

function reset()
{
    location.reload();
}

var intia = 0;
var areacal = 0;
var wcal = 0;



function showcalculation1()
{
    document.getElementById("cond1").style.visibility="hidden";
    document.getElementById("hammerarrow1").style.visibility="hidden";
    
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    setTimeout(function()
            {
                document.getElementById("vibhit1").style.visibility="visible";
                document.getElementById("vibhit2").style.visibility="visible";
            },200);
    document.getElementById("plateshow1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit2").style.animation="shake 0.5s infinite";
    setTimeout(function()
            {
                document.getElementById("canvas2").style.visibility="hidden";
                document.getElementById("canvas3a").style.visibility="visible";
            },1000);

if (case2 == "FF1")
{
   document.getElementById("frontimg").src="images/fix_fix.png";
   document.getElementById("bst2").innerHTML = "Fixed-Fixed";
}

if (case2 == "FF2")
{
    document.getElementById("frontimg").src="images/fix_free.png";
    document.getElementById("bst2").innerHTML = "Fixed-Free";
}

if (case2 == "FP3")
{
    document.getElementById("frontimg").src="images/fix_pin.png";
    document.getElementById("bst2").innerHTML = "Fixed-Pinned";
}

if (case2 == "FF4")
{
    document.getElementById("frontimg").src="images/free_free.png";
    document.getElementById("bst2").innerHTML = "Free-Free";
}

if (case2 == "PP5")
{
    document.getElementById("frontimg").src="images/pin_pin.png";
    document.getElementById("bst2").innerHTML = "Pinned-Pinned";
}

if (mode == "sn") {
    document.getElementById("bst3").innerHTML = "Mode 1";
}
if (mode == "dn") {
    document.getElementById("bst3").innerHTML = "Mode 2";
}


if (typemat == "images/alluminium.png")
{
                // intia = 1/12*(0.025*0.001^3);
                // I = intia;
                I = 2.5;
                document.getElementById("gt4").innerHTML = I;
                areacal = 3.02;
                A = areacal;
                document.getElementById("gt5").innerHTML = A;

                E = 10000000;
                rho = 2699;
                L = 0.3;
                document.getElementById("gt6").innerHTML = E + " psi";
                document.getElementById("gt7").innerHTML = rho;
                document.getElementById("bst1").innerHTML = "Alluminium";                
               document.getElementById("backimg").src="images/alluminium.png";
}
if (typemat == "images/steel.png")
{
                // intia = 1/12*(0.025*0.001^3);
                // I = intia;
                I = 2.5;
                document.getElementById("gt4").innerHTML = I;
                areacal = 3.02;
                A = areacal;
                document.getElementById("gt5").innerHTML = A;

                E = 30;
                rho = 8050;
                L = 0.3;
                document.getElementById("gt6").innerHTML = E + " N/m<sup>2</sup>";
                document.getElementById("gt7").innerHTML = rho;
                document.getElementById("bst1").innerHTML = "Steel";                
               document.getElementById("backimg").src="images/steel.png";
}


if (typemat == "images/pvc.png")
{
                // intia = 1/12*(0.025*0.001^3);
                // I = intia;
                I = 2.5;
                document.getElementById("gt4").innerHTML = I;
                areacal = 3.02;
                A = areacal;
                document.getElementById("gt5").innerHTML = A;

                E = 2.4;
                rho = 1.1;
                L = 0.3;
                document.getElementById("gt6").innerHTML = E + " N/m<sup>2</sup>";
                document.getElementById("gt7").innerHTML = rho;
                document.getElementById("bst1").innerHTML = "Plastic";                
               document.getElementById("backimg").src="images/pvc.png";
}
// {
//                 intia = 1/12*(0.025*0.001^3);
//                 document.getElementById("gt4").innerHTML = intia;
//                 areacal = 0.025*0.001;
//                 document.getElementById("gt5").innerHTML = areacal;
//                 document.getElementById("gt6").innerHTML = 1.5;
//                 document.getElementById("gt7").innerHTML = 0.0026;
//                 document.getElementById("backimg").src="images/pvc.png";
// }


if (typemat == "images/cfib.png")
{
                // intia = 1/12*(0.025*0.001^3);
                // I = intia;
                I = 2.5;
                document.getElementById("gt4").innerHTML = I;
                areacal = 3.02;
                A = areacal;
                document.getElementById("gt5").innerHTML = A;

                E = 15.5;
                rho = 2.45;
                L = 0.3;
                document.getElementById("gt6").innerHTML = E + " N/m<sup>2</sup>";
                document.getElementById("gt7").innerHTML = rho;
                document.getElementById("bst1").innerHTML = "Carbon Fiber";                
               document.getElementById("backimg").src="images/cfib.png";
}
// {
//                 intia = 1/12*(0.025*0.001^3);
//                 document.getElementById("gt4").innerHTML = intia;
//                 areacal = 0.025*0.001;
//                 document.getElementById("gt5").innerHTML = areacal;
//                 document.getElementById("gt6").innerHTML = 150;
//                 document.getElementById("gt7").innerHTML = 0.0026;
//                 document.getElementById("backimg").src="images/cfib.png";
// }
if (typemat == "images/concrete.png")
{
                // intia = 1/12*(0.025*0.001^3);
                // I = intia;
                I = 2.5;
                document.getElementById("gt4").innerHTML = I;
                areacal = 3.02;
                A = areacal;
                document.getElementById("gt5").innerHTML = A;

                E = 5000;
                rho = 2400;
                L = 0.3;
                document.getElementById("gt6").innerHTML = E + " N/m<sup>2</sup>";
                document.getElementById("gt7").innerHTML = rho;
                document.getElementById("bst1").innerHTML = "Concrete";                
               document.getElementById("backimg").src="images/concrete.png";
}
// {
//                 intia = 1/12*(0.025*0.001^3);
//                 document.getElementById("gt4").innerHTML = intia;
//                 areacal = 0.025*0.001;
//                 document.getElementById("gt5").innerHTML = areacal;
//                 document.getElementById("gt6").innerHTML = 17;
//                 document.getElementById("gt7").innerHTML = 2400000;
//                 document.getElementById("backimg").src="";
// }
              





            

}
function showcal()
{

nx1 =document.getElementById("form1").value;
nx2 =document.getElementById("form2").value;
nx3 =document.getElementById("form3").value;
nx4 =document.getElementById("form4").value;
nx5 =document.getElementById("form5").value;

// 70000000000
if (typemat == "images/alluminium.png")
{
    if (nx1 == "10000000" && nx2 == "2699" && nx3 == "2.5" && nx4 == "3.02" && nx5 == "3") 
    {
         
    // wcal=((4.73^2) * (Math.sqrt(E*I)/(rho*A*(L^4))))

     wcal = (((Math.sqrt(E*I)/(rho*A))/2*Math.PI)* (1.875/L)^2)

    document.getElementById("calres").innerHTML = wcal + " H<sub>z</sub>";
     
    document.getElementById("wimg").style.visibility="visible";

    document.getElementById("calout").innerHTML =  "&nbsp;";
    document.getElementById("showgrbtn").style.visibility="visible";
    document.getElementById("calbtn").style.visibility="hidden";

    } 
    else 
    {
        document.getElementById("calout").innerHTML =  "Please Enter Correct Values";
    } 
    
}


else if (typemat == "images/steel.png")
{
    if (nx1 == "30" && nx2 == "8050" && nx3 == "2.5" && nx4 == "3.02" && nx5 == "3") 
    {
         
    // wcal=((4.73^2) * (Math.sqrt(E*I)/(rho*A*(L^4))))
    wcal = (((Math.sqrt(E*I)/(rho*A))/2*Math.PI)* (1.875/L)^2) 
    document.getElementById("calres").innerHTML = wcal + " H<sub>z</sub>";
     
    document.getElementById("wimg").style.visibility="visible";

    document.getElementById("calout").innerHTML =  "&nbsp;";
    document.getElementById("showgrbtn").style.visibility="visible";
    document.getElementById("calbtn").style.visibility="hidden";        
    } 
    else
    {
        document.getElementById("calout").innerHTML =  "Please Enter Correct Values";
    }
}

else if (typemat == "images/pvc.png")
{
    if (nx1 == "2.4" && nx2 == "1.1" && nx3 == "2.5" && nx4 == "3.02" && nx5 == "3") 
    {
         
    // wcal=((4.73^2) * (Math.sqrt(E*I)/(rho*A*(L^4))))
    wcal = (((Math.sqrt(E*I)/(rho*A))/2*Math.PI)* (1.875/L)^2) 
    document.getElementById("calres").innerHTML = wcal + " H<sub>z</sub>";
     
    document.getElementById("wimg").style.visibility="visible";

    document.getElementById("calout").innerHTML =  "&nbsp;";
    document.getElementById("showgrbtn").style.visibility="visible";
    document.getElementById("calbtn").style.visibility="hidden";        
    } 
    else 
    {
        document.getElementById("calout").innerHTML =  "Please Enter Correct Values";
    }
}

else if (typemat == "images/cfib.png")
{
    if (nx1 == "15.5" && nx2 == "2.45" && nx3 == "2.5" && nx4 == "3.02" && nx5 == "3") 
    {
         
    // wcal=((4.73^2) * (Math.sqrt(E*I)/(rho*A*(L^4))))
    wcal = (((Math.sqrt(E*I)/(rho*A))/2*Math.PI)* (1.875/L)^2) 
    document.getElementById("calres").innerHTML = wcal + " H<sub>z</sub>";
     
    document.getElementById("wimg").style.visibility="visible";

    document.getElementById("calout").innerHTML =  "&nbsp;";
    document.getElementById("showgrbtn").style.visibility="visible";
    document.getElementById("calbtn").style.visibility="hidden";        
    } 
    else
    {
        document.getElementById("calout").innerHTML =  "Please Enter Correct Values";
    }
}

else if (typemat == "images/concrete.png")
{
    if (nx1 == "5000" && nx2 == "2400" && nx3 == "2.5" && nx4 == "3.02" && nx5 == "3") 
    {
         
    // wcal=((4.73^2) * (Math.sqrt(E*I)/(rho*A*(L^4))))
    wcal = (((Math.sqrt(E*I)/(rho*A))/2*Math.PI)* (1.875/L)^2) 
    document.getElementById("calres").innerHTML = wcal + " H<sub>z</sub>";
     
    document.getElementById("wimg").style.visibility="visible";

    document.getElementById("calout").innerHTML =  "&nbsp;";
    document.getElementById("showgrbtn").style.visibility="visible";
    document.getElementById("calbtn").style.visibility="hidden";        
    } 
    else
    {
        document.getElementById("calout").innerHTML =  "Please Enter Correct Values";
    }
}

else
{
    document.getElementById("calout").innerHTML =  "Please Enter All Values";// alert("Select Correct Values")
}

    // wcal=(4.73^2*sqrt((E*I)/(rho*A*L^4)))/(2*pi)

    // document.getElementById("calres").innerHTML = "output" + wcal;
}

function showgraph1()
{
/*	document.getElementById("cond1").style.visibility="hidden";
    document.getElementById("hammerarrow1").style.visibility="hidden";
    
    document.getElementById("hammer1").style.animation="fixhand1 2s forwards";
    setTimeout(function()
            {
                document.getElementById("vibhit1").style.visibility="visible";
                document.getElementById("vibhit2").style.visibility="visible";
            },200);
    document.getElementById("plateshow1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit2").style.animation="shake 0.5s infinite";
 setTimeout(function()*/
//             {
//     document.getElementById("vibhit1").style.visibility="hidden";
//     document.getElementById("vibhit2").style.visibility="hidden";
//             },600);
    if (mode == "sn")
    	{
    		setTimeout(function()
            {
                document.getElementById("canvas3a").style.visibility="hidden";
                document.getElementById("canvas3").style.visibility="visible";
                // document.getElementById("showbiggraph").style.visibility="visible";
                // document.getElementById("showbiggraph").src="images/FixedSupportmode1.gif";
                       
                        if (case2 == "FF1")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Fixed-Fixed";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/fix_fix_mode1.gif";                                        
                                    },1000); 
                            }
                        if (case2 == "FF2")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Fixed-Free";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/fix_free_mode1.gif";
                                    },1000);
                            }
                        if (case2 == "FP3")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Fixed-Pinned";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/fix_pin_mode1.gif";
                                    },1000); 
                            }
                        if (case2 == "FF4")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Free-Free";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/free_free_mode1.gif";
                                    },1000);
                            }
                        if (case2 == "PP5")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Pinned-Pinned";
                                        
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/pin_pin_mode1.gif";
                                    },1000); 
                            }




if (typemat == "images/alluminium.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Alluminium";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " psi";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>"; 
 
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);

}

if (typemat == "images/steel.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Steel";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);
}

if (typemat == "images/pvc.png")
{
    
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Plastic";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);
 
}
 
if (typemat == "images/cfib.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Carbon Fiber";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);

}

if (typemat == "images/concrete.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Concrete";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);

}

                   





                            setTimeout(function()
                                {
                                    document.getElementById("bgt2").innerHTML = "Mode 1";
                                },2000);

                            setTimeout(function()
                                {
                                    document.getElementById("bgt3").innerHTML = length2;
                                },3000);

                            setTimeout(function()
                                {
                                    document.getElementById("bgt4").innerHTML = width2;
                                },4000);

                            setTimeout(function()
                                {
                                    document.getElementById("bgt5").innerHTML = hight2;
                                },5000);
				// document.getElementById("graph1").style.visibility="visible";
			},1000);
		}
	else if (mode == "dn")
    	{
    		setTimeout(function()
            {
                document.getElementById("canvas3a").style.visibility="hidden";
                document.getElementById("canvas3").style.visibility="visible";
                
                     
                        if (case2 == "FF1")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Fixed-Fixed";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/fix_fix_mode2.gif";                                        
                                    },1000); 
                            }
                        if (case2 == "FF2")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Fixed-Free";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/fix_free_mode2.gif";
                                    },1000);
                            }
                        if (case2 == "FP3")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Fixed-Pinned";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/fix_pin_mode2.gif";
                                    },1000); 
                            }
                        if (case2 == "FF4")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Free-Free";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/free_free_mode2.gif";
                                    },1000);
                            }
                        if (case2 == "PP5")
                            {
                                setTimeout(function()
                                    {
                                        document.getElementById("bgt1").innerHTML = "Pinned-Pinned";
                                        document.getElementById("showbiggraph").style.visibility="visible";
                                        document.getElementById("showbiggraph").src="images/pin_pin_mode2.gif";
                                    },1000); 
                            }




if (typemat == "images/alluminium.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Alluminium";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);

}

if (typemat == "images/steel.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Steel";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);
}

if (typemat == "images/pvc.png")
{
    Steel
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Plastic";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);
 
}
 
if (typemat == "images/cfib.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Carbon Fiber";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);

}

if (typemat == "images/concrete.png")
{
    setTimeout(function()
    {
    document.getElementById("bgt11").innerHTML = "Concrete";
    },6000);

    setTimeout(function()
    {
    document.getElementById("bgt22").innerHTML = E +  " N/m<sup>2</sup>";
    },7000);

    setTimeout(function()
    {
    document.getElementById("bgt33").innerHTML = rho + " Kg/m<sup>3</sup>";
    },8000);

    setTimeout(function()
    {
    document.getElementById("bgt44").innerHTML = I + " kg.m<sup>2</sup>";
    },9000);

    setTimeout(function()
    {
    document.getElementById("bgt55").innerHTML = A + " cm<sup>2</sup>";
    },10000);

    setTimeout(function()
    {
    document.getElementById("calres2").innerHTML = wcal + " H<sub>z</sub>";     
    document.getElementById("wimg2").style.visibility="visible";
    },10000);

}

                   





                            setTimeout(function()
                                {
                                    document.getElementById("bgt2").innerHTML = "Mode 2";
                                },2000);

                            setTimeout(function()
                                {
                                    document.getElementById("bgt3").innerHTML = length2;
                                },3000);

                            setTimeout(function()
                                {
                                    document.getElementById("bgt4").innerHTML = width2;
                                },4000);

                            setTimeout(function()
                                {
                                    document.getElementById("bgt5").innerHTML = hight2;
                                },5000);
                // document.getElementById("graph1").style.visibility="visible";
            },1000);
		}
	else
    	{
        	alert("Wrong");     
    	}
     
}

function showgraph2()
{
	document.getElementById("cond2").style.visibility="hidden";
	document.getElementById("hammerarrow1").style.visibility="hidden";
    document.getElementById("hammer1").style.animation="freehand1 2s forwards";
	
    setTimeout(function()
            {
                document.getElementById("vibhit1").style.visibility="visible";
                document.getElementById("vibhit2").style.visibility="visible";
            },200);
    document.getElementById("plateshow1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit1").style.animation="shake 0.5s infinite";
    document.getElementById("vibhit2").style.animation="shake 0.5s infinite";
	if (mode == "sn")
    	{
    		setTimeout(function()
            {
				document.getElementById("canvas2").style.visibility="hidden";
                document.getElementById("canvas3").style.visibility="visible";
                document.getElementById("showbiggraph").style.visibility="visible";
                document.getElementById("showbiggraph").src="images/PinnedPinnedmode1.gif";

                        if (condition1 == "fxh")
                            {
                                setTimeout(function()
                                {
                            document.getElementById("bgt4").innerHTML = "Fixed End";
                                },8000);
                            }
                        if (condition1 == "frh")
                            {
                             setTimeout(function()
                                {
                            document.getElementById("bgt4").innerHTML = "Free End";
                                },8000); 
                            }
                            setTimeout(function()
                                {
                            document.getElementById("bgt3").innerHTML = dia;

                             },6000);
                            setTimeout(function()
                                {

                            document.getElementById("bgt2").innerHTML = thick;

                             },4000);
                            setTimeout(function()
                                {

                            document.getElementById("bgt1").innerHTML = "Single Node";
                             },2000);
                        // if (condition1 == "fxh")
                        //     {
                        //     document.getElementById("bgt4").innerHTML = "Fixed End";
                        //     }
                        // if (condition1 == "frh")
                        //     {
                        //     document.getElementById("bgt4").innerHTML = "Free End";
                        //     }
                        //     document.getElementById("bgt3").innerHTML = dia;                            
                        //     document.getElementById("bgt2").innerHTML = thick;
                        //     document.getElementById("bgt1").innerHTML = "Single Node";

                // document.getElementById("graph1").style.visibility="visible";
			},1000);
		}
	else if (mode == "dn")
    	{
    		setTimeout(function()
            {
				document.getElementById("canvas2").style.visibility="hidden";
                document.getElementById("canvas3").style.visibility="visible";
                document.getElementById("showbiggraph").style.visibility="visible";
                document.getElementById("showbiggraph").src="images/PinnedPinnedmode2.gif";

                    if (condition1 == "fxh")
                            {
                                setTimeout(function()
                                {
                            document.getElementById("bgt4").innerHTML = "Fixed End";
                                },8000);
                            }
                        if (condition1 == "frh")
                            {
                             setTimeout(function()
                                {
                            document.getElementById("bgt4").innerHTML = "Free End";
                                },8000); 
                            }
                            setTimeout(function()
                                {
                            document.getElementById("bgt3").innerHTML = dia;

                             },6000);
                            setTimeout(function()
                                {

                            document.getElementById("bgt2").innerHTML = thick;

                             },4000);
                            setTimeout(function()
                                {

                            document.getElementById("bgt1").innerHTML = "Double Node";
                             },2000);

                        // if (condition1 == "fxh")
                        //     {
                        //     document.getElementById("bgt4").innerHTML = "Fixed End";
                        //     }
                        // if (condition1 == "frh")
                        //     {
                        //     document.getElementById("bgt4").innerHTML = "Free End";
                        //     }
                        //     document.getElementById("bgt3").innerHTML = dia;                            
                        //     document.getElementById("bgt2").innerHTML = thick;
                        //     document.getElementById("bgt1").innerHTML = "Double Node";
                            
                // document.getElementById("graph2").style.visibility="visible";
			},1000);
		}
	else
    	{
        	alert("Wrong");     
    	}
}
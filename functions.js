var interval;
var number;
var counter = -1;
var arrayX = []; //välähtävät
var arrayY = []; //painetut
var record = 0;
var speed = 1000;

function resetColors(){
	document.getElementById('circle1').style.backgroundColor="rgba(255,0,0,0.3)";
	document.getElementById('circle2').style.backgroundColor="rgba(255,255,0,0.3)";
	document.getElementById('circle3').style.backgroundColor="rgba(0,0,255,0.3)";
	document.getElementById('circle4').style.backgroundColor="rgb(71,133,102)";
}

function start(){
	
	arrayX=[];
	arrayY=[];
	counter=-1;
	speed = 1000;
	resetColors();

	if (interval) return
	interval = setInterval(updates, speed)
	updates()
}

function updates() {
  
	number = randomNumber();
	arrayX.push(number);
	
	resetColors();
	
	if(number==1){
		document.getElementById('circle1').style.backgroundColor="red";
	}else if(number==2){
		document.getElementById('circle2').style.backgroundColor="yellow";
	}else if(number==3){
		document.getElementById('circle3').style.backgroundColor="blue";
	}else if(number==4){
		document.getElementById('circle4').style.backgroundColor="green";
	}
	
	if(speed>500){
		clearInterval(interval);
		speed = (speed - 20);
		interval = setInterval(updates, speed);
	}
	

}

function stop(){
	counter = (counter -1);
	clearInterval(interval)
	interval = null
	document.getElementById('points').innerHTML= "Points of your previous game: " + (counter+1);
	if(counter>record){
		record = counter;
		document.getElementById('record').innerHTML= "Your best record: " + (counter+1);
	}
}


function store1(){
	var y = document.getElementById("circle1").value;
	document.getElementById('circle1').style.backgroundColor="rgba(255,0,0,0.3)";
	arrayY.push(y);
	counter++;
	if(arrayX[counter] != arrayY[counter]){
		stop();
		
	}
	document.getElementById('counter').innerHTML= "Current score " +(counter+1);
}

function store2(){
	var y = document.getElementById("circle2").value;
	document.getElementById('circle2').style.backgroundColor="rgba(255,255,0,0.3)";
	arrayY.push(y);
	counter++;
	if(arrayX[counter] != arrayY[counter]){
		stop();
	}
	document.getElementById('counter').innerHTML="Current score " +(counter+1);
}

function store3(){
	var y = document.getElementById("circle3").value;
	document.getElementById('circle3').style.backgroundColor="rgba(0,0,255,0.3)";
	arrayY.push(y);
	counter++;
	if(arrayX[counter] != arrayY[counter]){
		stop();
	}
	document.getElementById('counter').innerHTML="Current score " +(counter+1);
}

function store4(){
	var y = document.getElementById("circle4").value;
	document.getElementById('circle4').style.backgroundColor="rgb(71,133,102)";
	arrayY.push(y);
	counter++;
	if(arrayX[counter] != arrayY[counter]){
		stop();
	}
	document.getElementById('counter').innerHTML="Current score " +(counter+1);
}

function randomNumber(){
    var min = 1;
    var max = 5;
    var x = Math.floor(Math.random() * (max - min)) + min;
	return x;
}


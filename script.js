// variables for buutons


const startStopBtn=document.querySelector('#startStopBtn');
const restBtn=document.querySelector('#restBtn');

// variables for time values     1st step
let seconds=0;
let minutes=0;
let hours=0;

// leading variable for zero   3rd step

let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;

// variables for setInterval and timerstatus
let timerInterval=null;
let timerStatus="stopped";

// stop watch      2cnd step

function stopWatch(){
	seconds++;
	if(seconds/60===1){
		seconds=0;
		minutes++;
		if(minutes / 60 === 1){
			minutes=0;
			hours++

		}
	}
	// 3rd step continuation  

	if(seconds<10){
		leadingSeconds="0"+seconds.toString();
	}else
	{
		leadingSeconds=seconds;
	}
	if(minutes<10){
		leadingMinutes="0"+minutes.toString();
	}else
	{
		leadingMinutes=minutes;
	}

if(hours<10){
		leadingHours="0"+hours.toString();
	}else
	{
		leadingHours=hours;
	}




	let displayTime=document.getElementById('timer').innerText=leadingHours +":" +leadingMinutes +":"+leadingSeconds;
}
// window.setInterval(stopWatch,1000);

// final step	


startStopBtn.addEventListener('click',function(){
	if(timerStatus === "stopped"){
		timerInterval=window.setInterval(stopWatch,1000);
		document.getElementById('startStopBtn').innerHTML=`<i class="bi bi-pause-fill" id="pause"></i>`;
		timerStatus="started";

	}else{
		window.clearInterval(timerInterval);
		document.getElementById('startStopBtn').innerHTML=`<i class="bi bi-play-fill" id="play"></i>`;
		timerStatus="stopped";
	}
})
restBtn.addEventListener('click',function(){
	window.clearInterval(timerInterval);
	seconds=0;
	minutes=0;
	hours=0;
	document.getElementById('timer').innerHTML="00:00:00";
})


const alarmsubmit=document.getElementById('alarmsubmit');
alarmsubmit.addEventListener('click',setalarm);

var audio = new Audio('play.mp3');

// function to play the alarm ring tone
function ringbell() {
    audio.play();
}



function setalarm(e){
    e.preventDefault();
    const alarm=document.getElementById('alarm');
    alarmdate=new Date(alarm.value);

    console.log(`time....${alarmdate}`);
    now=new Date();


    let timetoalarm=alarmdate-now;
    console.log(timetoalarm);
    if(timetoalarm>=0){
        setTimeout(()=>{
            ringbell();
        },timetoalarm);
    }
}
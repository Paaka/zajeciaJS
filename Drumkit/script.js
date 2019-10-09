const boomSound = document.querySelector('#boom');
const startRecordBtn = document.querySelector('#recordBtn');
const playBtn = document.querySelector('#playBtn');
const channel1 = [];

document.body.addEventListener('keypress',playaudio);
playBtn.addEventListener('click', playRecordedAudio)


startRecordBtn.addEventListener('click',startTime);

function playaudio(e){
    const keyPressed = detectKey(e);
    if(keyPressed === 'KeyA'){
        boomSound.currentTime = 0;
        boomSound.play();    
        const time = Date.now()
        channel1.push({
            code: e.code,
            time, // ==> jeśli klucz jest == zmiennej wystarczy podać sam klucz np. time 
        })
        console.log(channel1)
    }
}

function startTime(e){
    const timeZero = Date.now();
   
    return timeZero
}

function detectKey(e) {
    const keyPressed = e.code;
    return keyPressed;
}
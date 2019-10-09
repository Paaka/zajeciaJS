const boomSound = document.querySelector('#boom');
const allSounds = {
    KeyZ:{
        sound:document.querySelector('#boom'),
    },
    KeyX:{
        sound:document.querySelector('#clap')
    },
    KeyA:{
        sound:document.querySelector('#hihat')
    },
    KeyS :{
        sound:document.querySelector('#openhat')
    },
    KeyD :{
        sound:document.querySelector('#kick')
    },
    KeyC :{
        sound:document.querySelector('#ride')
    },
    KeyF :{
        sound:document.querySelector('#tink')
    },
    KeyV :{
        sound:document.querySelector('#snare')
    },
    KeyG :{
        sound:document.querySelector('#tom')
    },





}
const startRecordBtn = document.querySelector('#recordBtn');
const playBtn = document.querySelector('#playBtn');
const channel1 = [];

document.body.addEventListener('keypress',playaudio);
playBtn.addEventListener('click', playRecordedAudio)


startRecordBtn.addEventListener('click',startTime);

function playaudio(e){
    const keyPressed = detectKeyAndSound(e);
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

function detectKeyAndSound(e) {
    const keyPressed = e.code;
    switch(keyPressed){
        case "KeyZ":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyX":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyA":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyS":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyD":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyF":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyG":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyC":{
            playSound(keyPressed,allSounds);
            break;
        }
        case "KeyV":{
            playSound(keyPressed,allSounds);
            break;
        }

    }
}

function playSound(key,list){
    list[key].sound.currentTime=0;
    list[key].sound.play();

}
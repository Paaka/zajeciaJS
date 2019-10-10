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
const startingTime = [];

document.body.addEventListener('keypress',playaudio);

playBtn.addEventListener('click', playRecordedAudio)
startRecordBtn.addEventListener('click',startTime);

function playaudio(e){
    const startTime = Date.now();
    const keyPressed = e.code;
    console.log(startingTime[0])
    playSound(keyPressed,allSounds, startingTime[0]);
   
}

function startTime(e){
    const timeZero = Date.now();
    startingTime.push(timeZero);
}

// function detectKeyAndSound(e) {
//     const keyPressed = e.code;
//     switch(keyPressed){
//         case "KeyZ":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyX":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyA":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyS":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyD":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyF":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyG":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyC":{
//             playSound(keyPressed,allSounds);
//             break;
//         }
//         case "KeyV":{
//             playSound(keyPressed,allSounds);
//             break;
//         }

//     }
// }

function playSound(key,list,zeroTime){
    list[key].sound.currentTime=0;
    list[key].sound.play();
    let time = Date.now()
    console.log(time, zeroTime);
    const xd = time - zeroTime;
    channel1.push({
        code: key,
        time: xd, // ==> jeśli klucz jest == zmiennej wystarczy podać sam klucz np. time 
    })
    console.log(channel1);
}

function calculateTime(){
    channel1.map((val, i, arr) =>{
        console.log(val.time);
    })
}


function playRecordedAudio(){
    const xd = calculateTime();
    console.log(xd);
    channel1.forEach((value,i,arr)=>{
        setTimeout(()=>{
            const val = value.code
            allSounds[val].sound.currentTime = 0;
            allSounds[val].sound.play();
            
        },
        value.time)
    })
}
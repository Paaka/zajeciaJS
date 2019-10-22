const boomSound = document.querySelector('#boom');
const allSounds = {
    KeyZ:{
        sound:document.querySelector('#boom'),
        key:document.querySelector("#keyZ")
    },
    KeyX:{
        sound:document.querySelector('#clap'),
        key:document.querySelector("#keyX")
    },
    KeyA:{
        sound:document.querySelector('#hihat'),
        key:document.querySelector("#keyA")
    },
    KeyS :{
        sound:document.querySelector('#openhat'),
        key:document.querySelector("#keyS")
    },
    KeyD :{
        sound:document.querySelector('#kick'),
        key:document.querySelector("#keyD")
    },
    KeyC :{
        sound:document.querySelector('#ride'),
        key:document.querySelector("#keyC"),
    },
    KeyF :{
        sound:document.querySelector('#tink'),
        key:document.querySelector("#keyF")
    },
    KeyV :{
        sound:document.querySelector('#snare'),
        key:document.querySelector("#keyV"),
    },
    KeyG :{
        sound:document.querySelector('#tom'),
        key:document.querySelector("#keyG")
    },
    Backquote:{
        key:document.querySelector("#backquote")
    },
    Digit1:{
        key:document.querySelector("#digit1")
    },
    Digit2:{
        key:document.querySelector("#digit2")
    },
    Digit3:{
        key:document.querySelector("#digit3")
    },
    Digit4:{
        key:document.querySelector("#digit4")
    },
    Digit5:{
        key:document.querySelector("#digit5")
    },
    Digit6:{
        key:document.querySelector("#digit6")
    },
    Digit7:{
        key:document.querySelector("#digit7")
    },
    Digit8:{
        key:document.querySelector("#digit8")
    },
    Digit9:{
        key:document.querySelector("#digit9")
    },
    Digit0:{
        key:document.querySelector("#digit0")
    },
    Minus:{
        key:document.querySelector("#minus")
    },
    Equal:{
        key:document.querySelector("#equal")
    },
    Backspace:{
        key:document.querySelector("#backspace")
    },
    Tab:{
        key:document.querySelector("#tab")
    },
    KeyQ:{
        key:document.querySelector('#keyQ')
    },
    KeyW:{
        key:document.querySelector('#keyW')
    },
    KeyE:{
        key:document.querySelector('#keyE')
    },
    KeyR:{
        key:document.querySelector('#keyR')
    },
    KeyT:{
        key:document.querySelector('#keyT')
    },
    KeyY:{
        key:document.querySelector('#keyY')
    },
    KeyU:{
        key:document.querySelector('#keyU')
    },
    KeyI:{
        key:document.querySelector('#keyI')
    },
    KeyP:{
        key:document.querySelector('#keyP')
    },
    KeyO:{
        key:document.querySelector('#keyO')
    },
    KeyH:{
        key:document.querySelector('#keyH')
    },
    KeyJ:{
        key:document.querySelector('#keyJ')
    },
    KeyK:{
        key:document.querySelector('#keyK')
    },
    KeyL:{
        key:document.querySelector('#keyL')
    },
    KeyB:{
        key:document.querySelector('#keyB')
    },
    KeyN:{
        key:document.querySelector('#keyN')
    },
    KeyM:{
        key:document.querySelector('#keyM')
    },
    BracketLeft:{
        key:document.querySelector('#BracketLeft')
    },
    BracketRight:{
        key:document.querySelector('#BracketRight')
    },
    Backslash:{
        key:document.querySelector('#Backslash')
    },
    CapsLock:{
        key:document.querySelector('#CapsLock')
    },
    Semicolon:{
        key:document.querySelector('#Semicolon')
    },
    Quote:{
        key:document.querySelector('#Quote')
    },
    Enter:{
        key:document.querySelector('#Enter')
    },
    ShiftLeft:{
        key:document.querySelector('#ShiftLeft')
    },
    Comma:{
        key:document.querySelector('#Comma')
    },
    Period:{
        key:document.querySelector('#Period')
    },
    Slash:{
        key:document.querySelector('#Slash')
    },
    ShiftRight:{
        key:document.querySelector('#ShiftRight')
    },
    ControlLeft:{
        key:document.querySelector('#CtrlLeft')
    },
    ControlRight:{
        key:document.querySelector('#CtrlRight')
    },
    MetaLeft:{
        key:document.querySelector('#MetaLeft')
    },
    AltLeft:{
        key:document.querySelector('#AltLeft')
    },
    AltRight:{
        key:document.querySelector('#AltRight')
    },
    Space:{
        key:document.querySelector('#Space')
    },



}
const startRecordBtn = document.querySelector('#channel0');
const startRecordBtn2 = document.querySelector('#channel2');
const startRecordBtn3 = document.querySelector('#channel3');
const startRecordBtn4 = document.querySelector('#channel1');

const playBtn = document.querySelector('#playBtn');

const startingTime = [ {
    id:'channel0',
    time:null,
    active:false,
    numInArray:0,
    song:[]
},
{
    id:'channel1',
    time:null,
    active:false,
    numInArray:1,
    song:[]
},
{
    id:'channel2',
    time:null,
    active:false,
    numInArray:2,
    song:[]
},
{
    id:'channel3',
    time:null,
    active:false,
    numInArray:3,
    song:[]
},
];

document.body.addEventListener('keydown',playaudio);


playBtn.addEventListener('click', playRecordedAudio)
startRecordBtn.addEventListener('click',startTime);
startRecordBtn2.addEventListener('click',startTime);
startRecordBtn3.addEventListener('click',startTime);
startRecordBtn4.addEventListener('click',startTime);

function playaudio(e){
    const startTime = Date.now();
    const keyPressed = e.code;
    const currentChanel = showActiveChanel();
    playSound(keyPressed,allSounds, currentChanel);
   
}

function startTime(e){
    const currentChannel = e.target.id;
    const indexOfArr = parseInt(currentChannel.slice(7,8));
    const timeZero = Date.now();
    startingTime[indexOfArr].time = timeZero;
    startingTime.forEach((el,i,val) => {
        el.active = false;
    });
    startingTime[indexOfArr].active = !startingTime[indexOfArr].active;
 }

function playSound(key,list,currentChannal){
    if(list[key].sound){
        list[key].sound.currentTime=0;
        list[key].sound.play();
        let time = Date.now();
        const startTime = time - currentChannal[0].time;
        if(!isNaN(startTime)){
            startingTime[currentChannal[0].numInArray].song.push({
                code: key,
                time: startTime, // ==> jeśli klucz jest == zmiennej wystarczy podać sam klucz np. time 
            })
        }
    }else{
        console.log("nie ta liczba")
    }

    displayCurrentKey(key, allSounds);
}

function displayCurrentKey(key, list){
    list[key].key.classList.add('idk');
    setTimeout(()=>{
        list[key].key.classList.remove('idk');
    },100)
}

function playRecordedAudio(){
    const currentChanel = showActiveChanel();
    const index = currentChanel[0].numInArray;

    startingTime[index].song.forEach((value,i,arr)=>{
        setTimeout(()=>{
            const val = value.code
            allSounds[val].sound.currentTime = 0;
            allSounds[val].sound.play();
        },
        value.time)
    })
}


function showActiveChanel(){
    const resultOfFilter = startingTime.filter(el => el.active);
    const currentChannel = resultOfFilter[0].numInArray;
    return resultOfFilter;
}
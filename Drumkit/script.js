const boomSound = document.querySelector('#boom');

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
export const activateSearch = (event) =>{
    toggleDefaultInterface('none','grid');
    activeLocalListeners();
}

const toggleDefaultInterface = (state, searchDivState) =>{
    document.querySelector('#notes').style.display = state;
    document.querySelector('#notesPinned').style.display = state;
    document.querySelector('.main').style.display = state;
    document.querySelector('#defaultNav').style.display = state;
    document.querySelector('#searchDiv').style.display = searchDivState;
}

const activeLocalListeners = ()=>{
    document.querySelector('.searchX').addEventListener('click',()=>{
        toggleDefaultInterface('grid','none');
    })

    document.querySelector('#searchInput').addEventListener('change',(e)=>{
        console.log(e)
    })
}


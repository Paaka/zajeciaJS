export const updateValue = event => {
    if(event.path[0].id == "textArea"){
        const value = event.path[0].value;
        const keyOfCurrentItem = event.path[1].myKey;
        const getItem = JSON.parse(localStorage.getItem(keyOfCurrentItem));
        getItem.description = value;
        localStorage.setItem(keyOfCurrentItem,JSON.stringify(getItem));  
    }
}

export const deleteItem = event => {
    if(event.path[0].id == "Closure"){
        const keyOfCurrentItem = event.path[2].myKey;
        const isPinned = event.path[2].isPinned;
        localStorage.removeItem(keyOfCurrentItem);
        removeItemFromProperParent(isPinned);
    }
}

const removeItemFromProperParent = isPinned =>{
    if(isPinned){
        document.querySelector('#notesPinned').removeChild(event.path[2]);
    }else{
        document.querySelector('#notes').removeChild(event.path[2]);
    } 
}
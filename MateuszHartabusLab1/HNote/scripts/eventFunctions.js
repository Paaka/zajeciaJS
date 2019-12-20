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

export const handlePinChange = event => {
    if(event.path[0].id == "pinNote"){
        const note = event.path[2];
        const isPinnedOldValue = event.path[2].isPinned;
        const newIsPinnedValue = !isPinnedOldValue;
        event.path[2].isPinned = newIsPinnedValue;
        const keyOfCurrentItem = event.path[2].myKey;
        const getItem = JSON.parse(localStorage.getItem(keyOfCurrentItem));
        getItem.isPinned = newIsPinnedValue;
        localStorage.setItem(keyOfCurrentItem,JSON.stringify(getItem));  
        removeItemFromProperParent(isPinnedOldValue);
        addItemToProperParent(note, newIsPinnedValue);
    }
}

export const updateColorOfNote = event =>{
    if(event.path[1].id == "colorsParents"){
        const currentColor = setLocalStorageForColorAndReturnCurrentColor(event);
        updateDOMNoteBackgroundColor(event, currentColor)
    }
}

export const addTagToTheNote = event =>{
    if(event.path[0].id === 'tagIcon'){
        activateOrDisactivateTagModal(event);
    }
}

const addItemToProperParent = (note, isPinned) =>{
    if(isPinned){
        document.querySelector('#notesPinned').appendChild(note);
        note.querySelector('.pin2').src = "./resources/icons/pin-full.svg"
    }else{
        document.querySelector('#notes').appendChild(note);
        note.querySelector('.pin2').src = "./resources/icons/pin-empty.svg"
    } 
}

const removeItemFromProperParent = isPinned =>{
    if(isPinned){
        document.querySelector('#notesPinned').removeChild(event.path[2]);
    }else{
        document.querySelector('#notes').removeChild(event.path[2]);
    } 
}

const setLocalStorageForColorAndReturnCurrentColor = event =>{
    const value = event.path[0].id;
    const keyOfCurrentItem =event.path[4].myKey;
    const getItem = JSON.parse(localStorage.getItem(keyOfCurrentItem));
    getItem.style = value;
    localStorage.setItem(keyOfCurrentItem,JSON.stringify(getItem));
    return value;
}

const updateDOMNoteBackgroundColor = (event, color) =>{
    const noteIndexInPath = 4;
    const currentAditionalStyle = 1;
    const currentClass = event.path[noteIndexInPath].classList[currentAditionalStyle];
    event.path[noteIndexInPath].classList.remove(currentClass);
    event.path[noteIndexInPath].classList.add(color);
}

const activateOrDisactivateTagModal = (event) =>{
    const iconHtmlTag = event.path[0];
    let isTagModalOpen = iconHtmlTag.isTagInputOpen;
    iconHtmlTag.isTagInputOpen = !isTagModalOpen;
    isTagModalOpen = iconHtmlTag.isTagInputOpen;
    toggleStyleIsTagInputOpen(isTagModalOpen);

    
}

const toggleStyleIsTagInputOpen = (isOpen) =>{
    if(isOpen){
        document.querySelector('#tagModal').style.display = "block";
    }else{
        document.querySelector('#tagModal').style.display = "none";
    }
}

import Generator from './notes/generateItemsInNote.js';

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

export const addTag = event =>{
    event.preventDefault();
    const currentBtnClass = event.path[0].classList[0];
    const tagForm = event.path[1];
    if(currentBtnClass ==="tagFormBtn"){
        const inputValue = getValueFromInput(event);
        const indexOfNote = 5;
        const uniqueKey = event.path[indexOfNote].myKey;
        const getItem = addInputValueToTag(uniqueKey, inputValue);
        localStorage.setItem(uniqueKey,JSON.stringify(getItem));
        const tag = new Generator().createSingleTag(inputValue)
        event.path[5].querySelector(".notesTags").appendChild(tag);
    }
    tagForm.reset();
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


const getValueFromInput = event =>{
    const tagForm = event.path[1];
    const inputValue = tagForm.querySelector('.tagFormInput').value;
    return inputValue;
}

const addInputValueToTag = (uniqueKey, inputValue) =>{
    const getObj = JSON.parse(localStorage.getItem(uniqueKey));
        if(getObj.hasOwnProperty("tag")){
            getObj.tag += `${inputValue};`;
        }else{
            getObj.tag = `${inputValue};`;
        }
        console.log(getObj);
    return getObj;
}

export const deleteTag = event =>{
    if(event.path[0].className === "notesTagsX"){
        const currentKey = event.path[3].myKey;
        const tagValue = getTagTextValue(event);
        const localStorageObject = JSON.parse(localStorage.getItem(currentKey));
        const newValueOfTag = getUpdatedString(localStorageObject, tagValue);
        localStorageObject.tag = newValueOfTag;
        localStorage.setItem(currentKey, JSON.stringify(localStorageObject));
        event.path[2].removeChild(event.path[1]);
    }
}

const getTagTextValue= event =>{
    const tagValueWithX = event.path[1].innerText;
    const tagValue = tagValueWithX.slice(0,tagValueWithX.length -1);
    return tagValue;
}

const getUpdatedString = (localStorageObject, tagValue) =>{
    const arrayOfTags = getArrayOfTagsItems(localStorageObject);
    arrayOfTags.forEach((tag, i) =>{
        if(tag === tagValue){
            arrayOfTags.splice( arrayOfTags.indexOf(tagValue), 1);
        }
    })
    const allTagsJoined = arrayOfTags.join(";");
    return allTagsJoined;
}

const getArrayOfTagsItems = localStorageObject =>{
    const tagSting = localStorageObject.tag;
    const arrayOfTags = tagSting.split(';');
    return arrayOfTags;
}




class Search{
    constructor(){
        this.description = [],
        this.titles = [],
        this.tags = []
        this.getAllNotes()
    }
    activateSearch(){
        this.toggleDefaultInterface('none','grid');
        this.activeLocalListeners();
    }
    
    toggleDefaultInterface(state, searchDivState){
        document.querySelector('#notes').style.display = state;
        document.querySelector('#notesPinned').style.display = state;
        document.querySelector('.main').style.display = state;
        document.querySelector('#defaultNav').style.display = state;
        document.querySelector('#searchDiv').style.display = searchDivState;
    }

    getAllNotes(){  
        for(let i=0;i<localStorage.length;i++){
            const key =localStorage.key(i);
            const item = JSON.parse(localStorage.getItem(key));
            this.description.push(item.description);
            this.titles.push(item.title);
            this.tags.push(item.tag);
        }
        
    }

    activeLocalListeners(){
        document.querySelector('.searchX').addEventListener('click',()=>{
            this.toggleDefaultInterface('grid','none');
        })
    
        document.querySelector('#searchInput').addEventListener('input',(e)=>this.searchValue(e))
    }

    searchValue(e){
        const value = e.target.value;
        this.searchInDescrition(value);
    }

    searchInDescrition(value){
        this.description.forEach(string =>{
            const postion = string.search(value);
            console.log(string.slice(postion, value.length))
        })
    }
    
}

export default Search;
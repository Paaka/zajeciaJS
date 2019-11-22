class Note{
    constructor(title = "Note without title", description){
        this.title = title;
        this.des = description
    }

    addNote(e){   
            e.preventDefault();
            const title = document.querySelector('#title').value;
            const description = document.querySelector('#description').value;
            console.log(title, description)

    }
}
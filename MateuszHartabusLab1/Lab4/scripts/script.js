document.addEventListener("DOMContentLoaded",appStart);



function appStart() {
    const myCanvas = new Draw('canvas');

    document
        .querySelector('#imageOne')
        .addEventListener('click', (ev)=> new Background(ev).drawBackground());

    document
        .querySelector('#imageTwo')
        .addEventListener('click', (ev)=> new Background(ev).drawBackground());

    document
        .querySelector('#imageThree')
        .addEventListener('click', (ev)=> new Background(ev).drawBackground());

    document
        .querySelector('#imageFour')
        .addEventListener('click', (ev)=> new Background(ev).drawBackground());

    document
        .querySelector("#modalBrushes")
        .addEventListener('click', (ev)=> new Modal(ev).activateModal())

    document
        .querySelector('#inputRed')
        .addEventListener('change',(ev)=> new Filter('canvas', ev).redFilter());

    document
        .querySelector('#inputGreen')
        .addEventListener('change',(ev)=> new Filter('canvas', ev).greenFilter());

    document
        .querySelector('#inputBlue')
        .addEventListener('change',(ev)=> new Filter('canvas', ev).blueFilter());


    document
        .querySelector('#colorFromInput')
        .addEventListener('change',(e)=> myCanvas.chooseColor(e));


    document
        .querySelector('#plus')
        .addEventListener('click',()=> myCanvas.incrementSize());

     document
        .querySelector('#minus')
        .addEventListener('click',()=> myCanvas.decrementSize());

    document
        .querySelector('#brushes')
        .addEventListener('touchstart',(e)=> myCanvas.chooseBrush(e))
        
    document
        .querySelector('#colors')
        .addEventListener('touchstart',(e)=> myCanvas.chooseColor(e));

    document
        .querySelector('#filters')
        .addEventListener('touchstart',(ev)=> new Filter('canvas', ev).chooseFilter());
        
    const input = document.querySelector('#inputFile');
    input.addEventListener('change', function (e) {
        const reader = new FileReader();
        reader.onload = function () {
            const img = new Image();
            img.onload = function (){
                const canvas = document.querySelector('#canvas');
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img,0,0)
            }
            img.src = reader.result;
        }
        reader.readAsDataURL(input.files[0])
    }, false)

}







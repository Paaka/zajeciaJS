document.addEventListener("DOMContentLoaded",appStart);

const colorsParent = document.querySelector('#colors');
const filterParent = document.querySelector('#filters');
const brushParent = document.querySelector('#brushes');
let ctx;


function appStart() {
    const myCanvas = new Draw('canvas');


  
        document
        .querySelector('#colorFromInput')
        .addEventListener('change',(e)=> myCanvas.chooseColor(e));

   const input = document.querySelector('#inputFile');
        
   input.addEventListener('change',(e)=> {
       const file = input.files[0];
       const reader = new FileReader();
       const img = new Image;
       console.log(file);
       reader.onload = () => {
        img.src = reader.result;
        console.log(img.src);
        reader.readAsDataURL(file);
       }
        

      document.body.appendChild(img);
});

    document
        .querySelector('#plus')
        .addEventListener('click',()=> myCanvas.incrementSize());

     document
        .querySelector('#minus')
        .addEventListener('click',()=> myCanvas.decrementSize());

    brushParent
        .addEventListener('touchstart',(e)=> myCanvas.chooseBrush(e))
        
    colorsParent
        .addEventListener('touchstart',(e)=> myCanvas.chooseColor(e));

    filterParent
        .addEventListener('touchstart',(ev)=> new Filter('canvas', ev).chooseFilter());
        
}








document.addEventListener('DOMContentLoaded', appStart);

function appStart(){
    const btn = document.querySelector('#actionButton');
    const box = document.querySelector('#box');
    
    btn.addEventListener('click', btnClick);

}


    function btnClick(e){
        box.classList.toggle('green');
        // for(let i = 0; i < 10;i++){   
        //     setTimeout(()=>{
        //         box.innerHTML += i + '<br>';
        //     }, 1000)
        // }

        counterHandler = setInterval(
            wypiszLiczbe
            , 1000);
    }

    let licznik = 1;
    function wypiszLiczbe(){
        box.innerHTML +=licznik + '<br>'
        licznik++; 
        if(licznik === 11){
            clearInterval(counterHandler)
        }
    }
    
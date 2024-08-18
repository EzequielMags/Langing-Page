const larguraTela = window.innerWidth;
const larguraDesejada = 1200;   
const texto = document.getElementById('scroll')

    if( larguraTela >= larguraDesejada){
        texto.textContent = 'scroll'
        console.log('oi')
    }   else{
        texto.textContent = 'arrasta pra cima'
        
        console.log('ola')
    }

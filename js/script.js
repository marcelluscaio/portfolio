const paginas = document.querySelectorAll(".pagina");
let movimentoX = 0;
let movimentoY = 0;

desliza = (direcao) => {
   switch(direcao){
      case"direita":
         movimentoX-=100;
         break;
      case"baixo":
         movimentoY-=100;
         break;
      case"esquerda":
         movimentoX+=100;
         break;
      case"cima":
         movimentoY+=100;
         break;   
   }

   paginas.forEach((pagina) => {
         pagina.style.transform=`translateX(${movimentoX}%) translateY(${movimentoY}%)`
      }
   );
};


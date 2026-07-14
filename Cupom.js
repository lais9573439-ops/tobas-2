
let desconto = 0;


function verificarCupom(){


let cupom = 
document.getElementById("codigoCupom").value;



if(cupom=="TOBAS10"){


desconto = 10;


mostrarMensagem(
"Cupom aplicado! 10% de desconto"
);


}


else if(cupom=="PRIMEIRAPEDIDO"){


desconto = 15;


mostrarMensagem(
"Cupom aplicado! 15% de desconto"
);


}



else if(cupom=="COMBO20"){


desconto = 20;


mostrarMensagem(
"Você ganhou R$20 de desconto"
);


}


else if(cupom=="FRETEGRATIS"){


mostrarMensagem(
"Frete grátis aplicado!"
);


}


else{


mostrarMensagem(
"Cupom inválido"
);


}


}



function mostrarMensagem(texto){

document.getElementById("resultado").innerHTML = texto;

}

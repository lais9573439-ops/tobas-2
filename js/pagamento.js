let totalCompra = 0;



function carregarPedido(){


let carrinho = 
JSON.parse(localStorage.getItem("carrinho")) || [];



let resumo = document.getElementById("resumo");



carrinho.forEach(produto=>{


totalCompra += produto.preco;



resumo.innerHTML += `

<p>
${produto.nome} - 
R$ ${produto.preco.toFixed(2)}
</p>

`;


});



document.getElementById("valorFinal").innerHTML =
totalCompra.toFixed(2);



}



function mostrarEndereco(){


document.getElementById("endereco").style.display="block";


}



function esconderEndereco(){


document.getElementById("endereco").style.display="none";


}





function aplicarCupomPagamento(){


let cupom =
document.getElementById("cupomPagamento").value;



let mensagem =
document.getElementById("mensagemCupom");



if(cupom=="TOBAS10"){


totalCompra = totalCompra - (totalCompra * 0.10);


mensagem.innerHTML =
"✅ Cupom aplicado: 10% de desconto";


}



else if(cupom=="COMBO20"){


totalCompra = totalCompra - 20;


mensagem.innerHTML =
"✅ R$20 de desconto aplicado";


}


else{


mensagem.innerHTML =
"❌ Cupom inválido";


}




document.getElementById("valorFinal").innerHTML =
totalCompra.toFixed(2);



}




function finalizarPedido(){


let pedido = {


numero:
Math.floor(Math.random()*9000),


status:
"Pedido recebido",


valor:
totalCompra


};



localStorage.setItem(

"pedido",

JSON.stringify(pedido)

);



alert(
"Pedido realizado com sucesso!"
);



window.location.href="rastrear.html";


}





carregarPedido();

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];



function adicionarProduto(nome, preco){

let produto = {

nome:nome,

preco:preco

};


carrinho.push(produto);


localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);


alert("Produto adicionado ao carrinho!");

}




function mostrarCarrinho(){


let lista =
document.getElementById("listaCarrinho");


let total = 0;


if(lista){


lista.innerHTML="";



carrinho.forEach((produto,index)=>{


total += produto.preco;



lista.innerHTML += `

<div class="produto">

<h3>${produto.nome}</h3>

<p>
R$ ${produto.preco.toFixed(2)}
</p>


<button onclick="removerProduto(${index})">

Remover

</button>


</div>

`;


});


document.getElementById("total").innerHTML =
total.toFixed(2);


}


}




function removerProduto(index){


carrinho.splice(index,1);


localStorage.setItem(

"carrinho",

JSON.stringify(carrinho)

);


mostrarCarrinho();

}





function irPagamento(){

window.location.href="pagamento.html";

}



mostrarCarrinho();

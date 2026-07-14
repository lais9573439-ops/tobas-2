let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


function adicionarProduto(nome,preco){


let produto = {

nome:nome,

preco:preco

};


carrinho.push(produto);


localStorage.setItem(
"carrinho",
JSON.stringify(carrinho)
);


alert(nome + " adicionado ao carrinho!");

}

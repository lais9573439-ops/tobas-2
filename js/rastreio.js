let pedido =
JSON.parse(localStorage.getItem("pedido"));



let pedidoInfo =
document.getElementById("pedidoInfo");



if(pedido){


pedidoInfo.innerHTML = `

<h3>
Pedido #${pedido.numero}
</h3>

<p>
Valor:
R$ ${pedido.valor.toFixed(2)}
</p>

<p>
Status:
${pedido.status}
</p>

`;



}else{


pedidoInfo.innerHTML =

"<p>Nenhum pedido encontrado.</p>";



}





let statusAtual = 1;



function atualizarStatus(){



let etapas = [

"etapa1",

"etapa2",

"etapa3",

"etapa4",

"etapa5"

];



if(statusAtual <= etapas.length){



document.getElementById(
etapas[statusAtual-1]
).style.background="#e85d04";



statusAtual++;


}



}



setInterval(

atualizarStatus,

5000

);





document.getElementById("tempo").innerHTML =
"Tempo estimado: 30 minutos 🚚";

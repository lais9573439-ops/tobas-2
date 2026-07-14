function cadastrar(){


let usuario = {


nome:
document.getElementById("nome").value,


email:
document.getElementById("email").value,


telefone:
document.getElementById("telefone").value,


senha:
document.getElementById("senha").value


};



localStorage.setItem(

"usuario",

JSON.stringify(usuario)

);



document.getElementById("mensagem").innerHTML =

"✅ Cadastro realizado!";



setTimeout(()=>{

window.location.href="login.html";

},1500);



}






function entrar(){


let usuario =

JSON.parse(localStorage.getItem("usuario"));



let email =

document.getElementById("emailLogin").value;



let senha =

document.getElementById("senhaLogin").value;





if(usuario &&

email == usuario.email &&

senha == usuario.senha){



localStorage.setItem(

"logado",

"sim"

);



alert(
"Login realizado!"
);



window.location.href="perfil.html";



}else{


document.getElementById("resultado").innerHTML =

"❌ E-mail ou senha incorretos";


}



}







function carregarPerfil(){


let usuario =

JSON.parse(localStorage.getItem("usuario"));



let area =

document.getElementById("dadosUsuario");



if(usuario){


area.innerHTML = `

<h2>${usuario.nome}</h2>

<p>
📧 ${usuario.email}
</p>

<p>
📱 ${usuario.telefone}
</p>

`;



}



}





function sair(){


localStorage.removeItem("logado");


window.location.href="index.html";


}





carregarPerfil();

///             CORREGUIR NOMBRES DE VARIABLES (PRINCIPALMENTE ARRAYS)
let friend = [];

function agregarAmigo (){
    let inputFriend = document.getElementById ("amigo");
    let friendName = inputFriend.value;

    if (!friendName){
        alert("Ingresa un nombre")
        return;}
    friend.push(friendName);
    inputFriend.value = "";
    inputFriend.focus();
    displayFriend();
}

///          AGREGAR MINIMO DE 2 AMIGOS PARA EL SORTEO
function displayFriend (){
    let friendList = document.getElementById("listaAmigos");
    friendList.innerHTML = "";

    for(let i = 0; i < friend.length; i++){
    let item = document.createElement("li");
    item.textContent = friend[i];
    friendList.appendChild(item);
    }
}


///          modificar boton de  "sortear" para juego del sorteo poder reniniciar el juego.
function sortearAmigo(){
    if (friend.length === 0){
        alert("No hay ningun amigo en la lista");
        return;
    }

let = friendWinner = friend[Math.floor(Math.random() * friend.length)];
let = winner = document.getElementById("resultado");
winner.innerHTML = `El ganador es ${friendWinner}!`;

let cleanFriends = document.getElementById("listaAmigos");
cleanFriends.innerHTML = "";
}



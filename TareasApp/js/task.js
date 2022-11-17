"use strict";

const texto = document.getElementById("texto"),
btnAdd = document.getElementById("enviar");
const lista = document.querySelector(".lista"),
btnClear = document.querySelector(".clear");

///agregar elemento
btnAdd.addEventListener("click",(e)=>{
    e.preventDefault(); // cancela el evento del boton
    const li = document.createElement("li"); //creacion del li
    const btnCreate = document.createElement("button");
    if(texto.value === ""){
        alert("Put your task")
    }else{
        btnCreate.innerHTML="<img src='icons/trash.svg' alt='trash'>";
        btnCreate.classList.add("trash");
        const liLista = lista.appendChild(li);
        liLista.append(texto.value);
        liLista.appendChild(btnCreate);
    }
    texto.value = ""; //blanqueo el campo text
})


lista.addEventListener("click",(e)=>{
    const item = e.target;
    if(item.classList[0]=== "trash"){
        const listaCompleta = item.parentElement;
        listaCompleta.remove();
    }
})

//eliminar todos los elementos
btnClear.addEventListener("click",()=> {
    while(lista.childElementCount > 0){
        lista.remove(lista.firstChild)
    }
})




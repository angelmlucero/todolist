//Accder al DOM
let input = document.getElementById("input"),
    ok = document.getElementById("ok"),
    lista = document.getElementById("lista");

function cambiarClasse(){
    this.classList.toggle("realizado");

}

//Generar elementos de la lista
function generar (){

    
    let valor = input.value;
    if (valor !== ""){

    let nuLi = document.createElement("li"),
        nuTxt = document.createTextNode(valor);
        nuLi.appendChild(nuTxt);
        lista.appendChild(nuLi);
    //Acceder a coleccion de nodos li
    let NodosLi = document.getElementsByTagName("li"),
        //crear span para cerrar
        abc = document.createElement("button");
        abc.innerHTML = "LISTO"
        
    
    abc.addEventListener("click", function(){
        this.parentElement.remove();
    });
        
    for(var i=0; i < NodosLi.length; i++){
        NodosLi[i].appendChild(abc);
        NodosLi[i].className = "elemento";
        NodosLi[i].addEventListener("click", cambiarClasse)
    }
        
    }else{
        alert("Ingrese una tarea válida")
    };
    input.value = "";

    
}
input.onkeypress = function(e){
    if(e.charCode==13){
        generar();
        false;
    }
};
ok.onclick = generar;


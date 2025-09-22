// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


/*function agregarAmigo() {
    let amigoIngresado = document.getElementById("amigo");
    let amigo = amigoIngresado.value;
    console.log(amigo);

    amigos.push(amigo);
    console.log(amigos);
    
    }
*/

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value.trim();
    if (nombreAmigo === "") {
        console.log("Se ingreso un campo vacio");
        alert("Por favor, ingresa un nombre");
        return;
    } 

    if(/\d/.test(nombreAmigo)){
       console.log("Se ingreso un número");
       alert("Por favor, ingresa un nombre sin números");
       return; 
    } 
    
    if(amigos.includes(nombreAmigo)){
       console.log("Se ingreso un número");
       alert("Ese nombre ya este en uso. Por favor, ingresa otro");
       return; 
    } 

    if(nombreAmigo.length < 2){
        alert('El nombre del amigo debe tener al menos 2 caracteres.');
        return;
    }

    amigos.push(nombreAmigo);

    console.log(`Se agrego: ${nombreAmigo}`);
    
    limpiarCaja();
    
    actualizarLista();
}

  document.getElementById('amigo').addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            console.log('Presiono la tecla enter');
            agregarAmigo();          
        }
    });


function actualizarLista(){
    
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    } 
}

function sortearAmigo(){
    if (amigos.length < amigosMinimo) {
        console.log("Faltan amigos");
     
        document.getElementById("p-mensaje").innerHTML = "Agrega al menos 2 amigos para realizar el sorteo ";
        
    } else {
        let sorteoGenerado = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = amigos[sorteoGenerado];
        console.log(sorteoGenerado);
        
        let resultado = document.getElementById('p-mensaje').innerHTML = `🎉 Tu amigo secreto es ${amigoSecreto} 🎉`;
        document.getElementById('p-mensaje').style.color='#369a00ff'
        document.getElementById('p-mensaje').style.fontWeight='bold'
        document.getElementById('listaAmigos').innerHTML="";
        return resultado
    }
}

function reiniciarJuego(){
    let elementosRemovidos = amigos.splice(0, amigos.length);
    console.log(`Lista de amigos removidos: ${elementosRemovidos}`);
    document.getElementById('listaAmigos').innerHTML="";
    document.getElementById('p-mensaje').innerHTML="";
    document.getElementById('p-mensaje').style.color="";
    document.getElementById('p-mensaje').style.fontWeight="";
    limpiarCaja();
    alert("Juego reiniciado");
}
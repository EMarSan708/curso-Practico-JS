var lista=[];

function anadirLista(){
    lista.push(parseInt(document.getElementById("InputLista").value));
}
function borrarLista(){
    lista.pop();
}


function calcularMedia() { 
    return (lista.reduce(function (sum =0, siguiente){
                return sum+siguiente;
            })/lista.length);

}

 function calcularMediaGeometrica() {
    return Math.pow(lista.reduce(function (prod =0, sig){
        return prod*sig;
    }),1/lista.length);
    } 

function calcularMediana(){
    let aux=0;
    if((lista.length/2)%2==0){
        aux= calcularMedia(lista[parseInt(lista.length/2)-1],lista[(parseInt(lista.length/2))]);
    }else{
        aux=lista[parseInt(lista.length/2)];
    }
    return aux;
}


function calcularModa(){
    const listaObject = {};
    lista.map(function (elemento) {
        if(listaObject[elemento]){
            listaObject[elemento]++;
        }else{
            listaObject[elemento]=1;
        }
    });
    const listaArray = Object.entries(listaObject).sort(
        function (valorAc, siguiente){
           return valorAc[1]-siguiente[1];
        }
    );
    return listaArray[(listaArray.length-1)];
}

function botonCalcularMedia() {
    if (lista.length===0) {
        document.getElementById("ResultP").innerText="La lista esta vacía";
    }else{
        document.getElementById("ResultP").innerText="La media es: "+calcularMedia();   
    }
}

function botonCalcularMediaGeometrica() {
    if (lista.length===0) {
        document.getElementById("ResultP").innerText="La lista esta vacía";
    }else{
        document.getElementById("ResultP").innerText="La media geométrica es: "+calcularMediaGeometrica();   
    }
}

function botonCalcularMediana() {
    if (lista.length===0) {
        document.getElementById("ResultP").innerText="La lista esta vacía";
    }else{
        document.getElementById("ResultP").innerText="La mediana es: "+calcularMediana();   
    }
}
function botonCalcularModa() {
    if (lista.length===0) {
        document.getElementById("ResultP").innerText="La lista esta vacía";
    }else{
        document.getElementById("ResultP").innerText="La moda es: "+calcularModa();   
    }
}
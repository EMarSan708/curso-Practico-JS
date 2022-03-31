//Helpers / Utils
function calcularMedia(lista) { 
    return (lista.reduce(function (sum =0, siguiente){
                return sum+siguiente;
            })/lista.length);

}
//Calculadora de mediana
function calcularMediana(lista){
    let aux=0;
    if((lista.length)%2==0){
        aux= calcularMedia([lista[parseInt(lista.length/2)-1],lista[(parseInt(lista.length/2))]]);
    }else{
        aux=lista[parseInt(lista.length/2)];
    }
    return aux;
}

//Mediana General
const salariosEsp = espanya.map(function (persona){
    return persona.salary;
});

const salariosEspSorted = salariosEsp.sort(function(a,b){
    return a-b;
})
const medianaGeneralEsp = calcularMediana(salariosEspSorted);

//Mediana del top 10%
const porcentaje = 10;
const inicio= ((salariosEspSorted.length)*(100-porcentaje)/100);
const salariosTopEsp = salariosEspSorted.splice(inicio,(salariosEspSorted.length-inicio));


const medianaTopEsp = calcularMediana(salariosTopEsp);

console.log({medianaGeneralEsp, medianaTopEsp});
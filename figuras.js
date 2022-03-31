//codigo del triángulo
function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado*4;
} 

function areaCuadrado(ladoCuadrado){
    return Math.pow(ladoCuadrado, 2);
} 

//codigo del triángulo
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */
function perimetroTriangulo (ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return (ladoTriangulo1+ladoTriangulo2+baseTriangulo);
}
function areaTriangulo (baseTriangulo,alturaTriangulo){
    return (baseTriangulo*alturaTriangulo)/2;
} 

function alturaIsosceles (lado1,lado2,base){
    let devolver="";
    if(lado1!=lado2){
        devolver="No es isósceles (asegurate que colocas en base el lado diferente)";
    }else{
        devolver=Math.sqrt((Math.pow(lado1,2)-(Math.pow(base,2)/4)))
    }
    return devolver;
}
/* console.group("triángulo")
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);
console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);
console.log(`El area del triángulo es: ${areaTriangulo} cm^2`);
console.groupEnd(); */

//codigo del círculo
/* const radioCirculo=4;
const diametroCirculo=radioCirculo*2;
const PI=Math.PI; */
function diametroCirculo (radio) {
    return radio*2
};
function perimetroCirculo (radio) {
    return Math.PI*diametroCirculo(radio);
}
function areaCirculo (radio) {
    return Math.PI*Math.pow(radio,2)}

/* console.group("círculo")
console.log(`El radio del círculo es ${radioCirculo} cm y su diámetro es ${diametroCirculo}cm`);
console.log(`El perímetro del círculo es: ${perimetroCirculo} cm`);
console.log(`El area del círculo es: ${areaCirculo} cm^2`);
console.groupEnd(); */

//Aquí empieza la interaccion con el html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado").value;
    alert(perimetroCuadrado(input));    
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado").value;
    alert(areaCuadrado(input));   
}

function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("InputTrianguloLado1").value);
    const lado2 = parseInt(document.getElementById("InputTrianguloLado2").value);
    const base = parseInt(document.getElementById("InputTrianguloBase").value);
    alert(perimetroTriangulo(lado1,lado2,base));    
}
function calcularAreaTriangulo() {
    const base = document.getElementById("InputTrianguloBase").value;
    const altura = document.getElementById("InputTrianguloAltura").value;
    alert(areaTriangulo(base,altura));   
}
function calcularAlturaIsosceles() {
    const base = document.getElementById("InputTrianguloBase").value;
    const lado1 = parseInt(document.getElementById("InputTrianguloLado1").value);
    const lado2 = parseInt(document.getElementById("InputTrianguloLado2").value);
    alert(alturaIsosceles(lado1,lado2,base));     
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo").value;
    alert(perimetroCirculo(input));    
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo").value;
    alert(areaCirculo(input));   
}
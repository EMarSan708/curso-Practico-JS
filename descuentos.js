/* const precioOriginal = 100;
const descuento = 15;

const porcentajeConDescuento = 100 - descuento;
const precioConDescuento= (precioOriginal * porcentajeConDescuento/100);

console.log({precioOriginal,descuento,porcentajeConDescuento,precioConDescuento}); */
const cupones = [["AAA",10],["BBB",15],["CCC",50]]

function calcularPrecioConDescuento(precio, descuento) {
    return precio*(100-descuento)/100;
}
function comprobarCupon (cupon){
    let descuento=-1;
    for (let index = 0; index < cupones.length; index++) {
        if(cupones[index][0]===cupon){
            descuento=cupones[index][1];
        }
    }
    return descuento;
}
function botonDescuento() {
    if(document.getElementById("InputDiscount").value.length!=0 && document.getElementById("InputCoupon").value.length==0){
        botonCalcularPrecioConDescuento();
    }else if(document.getElementById("InputDiscount").value.length==0 &&document.getElementById("InputCoupon").value.length!=0){
        botonCalcularPrecioConCupon();
    }else{
        document.getElementById("ResultP").innerText = "Introduce un descuento o un cupón, pero no ambos a la vez.";
    }
    
}

function botonCalcularPrecioConDescuento(){
    const precio=document.getElementById("InputPrice").value;
    const descuento=document.getElementById("InputDiscount").value;
    document.getElementById("ResultP").innerText = "Tu precio con descuento son: "+calcularPrecioConDescuento(precio,descuento) + " €";
    
}
function botonCalcularPrecioConCupon(){
    const precio=document.getElementById("InputPrice").value;
    const cupon=document.getElementById("InputCoupon").value;
    const descuento=comprobarCupon(cupon);
    if (descuento===-1) {
        document.getElementById("ResultP").innerText = "Cupón no válido"
    }else{
    document.getElementById("ResultP").innerText = "Cupón "+cupon+" aplicado, recibes un  "+descuento+" % de descuento. \nTu precio con descuento son: "+calcularPrecioConDescuento(precio,descuento) + " €";
    }
}
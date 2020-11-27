function precioActualizado() {
    var precio  =  document.getElementById("precio");
    var retornablee =  document.getElementById("retornablee");
    var pesiss=  document.getElementById("pesiss");


fetch('https://s3.amazonaws.com/dolartoday/data.json')
.then(function(response) {
    return response.json();
  })


.then(function(neko) {

    var dolarValor = neko.USD.transferencia;
    var retornablevalor = 0.84;
    var pesisvalor = 1.17;

    var totalRetornable = retornablevalor * neko.USD.transferencia;
    var totalpesis =  pesisvalor* neko.USD.transferencia ;
    var enteroRetirnable = totalRetornable.toFixed(); 
    var enteroPesis = totalpesis.toFixed(); 
    var redondeoRetornable = 0 ;
    redondeoRetornable = Math.round(0.74);
    
    dolarValor = (new Intl.NumberFormat("de-DE", {maximumSignificantDigits: 6}).format(dolarValor));
    enteroPesis = (new Intl.NumberFormat("de-DE", {maximumSignificantDigits: 3}).format(enteroPesis));
    enteroRetirnable = (new Intl.NumberFormat("de-DE", {maximumSignificantDigits: 3}).format(enteroRetirnable));



    console.log(redondeoRetornable);
    console.log(enteroRetirnable);
    console.log(enteroPesis);
    precio.innerHTML='<em>El precio de la lechuga es:</em> <strong>'+dolarValor+' $</strong>';
    pesiss.innerHTML='<em>La Pesis 1/2 esta en:</em> <strong>'+enteroPesis+' BsS</strong>';
    retornablee.innerHTML='<em>La Retornable esta en:</em> <strong>'+enteroRetirnable+' BsS</strong>';
}); 




}

class Producto {
constructor (nombre , precioP) {
    this.precioP = precioP;
    this.nombre = nombre;


}
calcular () {
    fetch('https://s3.amazonaws.com/dolartoday/data.json')
.then(function(response) {
    return response.json();
  })
 
    var nekoo = this.neko.USD.transferencia;
    console.log(`hola funciono el precios es ${this.precioP} y ${this.nombre}  ${nekoo}`)

 

}


}

let producto = new Producto ('Retornables2', 0.84);

producto.calcular();

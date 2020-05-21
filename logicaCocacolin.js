function precioActualizado() {
    var precio  =  document.getElementById("precio");

fetch('https://s3.amazonaws.com/dolartoday/data.json')
.then(function(response) {
    return response.json();
  })


.then(function(neko) {

    var dolarValor = neko.USD.transferencia;
    var retornablevalor = 0.74;
    var pesisvalor = 1.07;

    var totalRetornable = retornablevalor * neko.USD.transferencia ;
    var totalpesis =  pesisvalor* neko.USD.transferencia ;
    console.log(totalRetornable);
    console.log(totalpesis);
    precio.innerHTML='<em>El precio de la coca cola es:</em> <strong>'+neko.USD.transferencia+'</strong>';
  
}); 




}

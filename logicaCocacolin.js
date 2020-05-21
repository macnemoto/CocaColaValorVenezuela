function precioActualizado() {
    var precio  =  document.getElementById("precio");

fetch('https://s3.amazonaws.com/dolartoday/data.json')
.then(function(response) {
    return response.json();
  })


.then(function(neko) {
    console.log(neko.USD.transferencia);
    precio.innerHTML='<em>El precio de la coca cola es:</em> <strong>'+neko.USD.transferencia+'</strong>';
  
}); 




}

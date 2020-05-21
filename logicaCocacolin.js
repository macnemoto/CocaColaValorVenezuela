function precioActualizado() {
    var precio  =  document.getElementById("precio");

fetch('https://s3.amazonaws.com/dolartoday/data.json')
.then(function(response) {
    return response.json();
  })


.then(function(neko) {
    console.log(neko.usd.transferencia);
    precio.innerHTML='<p>'+neko.usd.transferencia+'</p>';
  
}); 




}

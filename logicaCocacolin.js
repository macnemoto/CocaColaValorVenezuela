function precioActualizado() {
  var precio = document.getElementById("precio");
  var retornablee = document.getElementById("retornablee");
  var pesiss = document.getElementById("pesiss");

  fetch("https://s3.amazonaws.com/dolartoday/data.json")
    .then(function (response) {
      return response.json();
    })

    .then(function (neko) {
      var dolarValor = neko.USD.transferencia;
      var retornablevalor = 0.84;
      var pesisvalor = 1.17;

      var totalRetornable = retornablevalor * neko.USD.transferencia;
      var totalpesis = pesisvalor * neko.USD.transferencia;
      var enteroRetirnable = totalRetornable.toFixed();
      var enteroPesis = totalpesis.toFixed();
      var redondeoRetornable = 0;
      redondeoRetornable = Math.round(0.74);

      dolarValor = new Intl.NumberFormat("de-DE", {
        maximumSignificantDigits: 6,
      }).format(dolarValor);
      enteroPesis = new Intl.NumberFormat("de-DE", {
        maximumSignificantDigits: 3,
      }).format(enteroPesis);
      enteroRetirnable = new Intl.NumberFormat("de-DE", {
        maximumSignificantDigits: 3,
      }).format(enteroRetirnable);

      console.log(redondeoRetornable);
      console.log(enteroRetirnable);
      console.log(enteroPesis);
      precio.innerHTML =
        "<em>El precio de la lechuga es:</em> <strong>" +
        dolarValor +
        " $</strong>";
      pesiss.innerHTML =
        "<em>La Pesis 1/2 esta en:</em> <strong>" +
        enteroPesis +
        " BsS</strong>";
      retornablee.innerHTML =
        "<em>La Retornable esta en:</em> <strong>" +
        enteroRetirnable +
        " BsS</strong>";
    });
}

class Producto {
  constructor() {}
  calcular(nombre, precioP, img) {
    fetch("https://s3.amazonaws.com/dolartoday/data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (neko) {
        var dollarValue = neko.USD.transferencia;
        var totalValue = dollarValue * precioP;

        totalValue = new Intl.NumberFormat("de-DE", {
          maximumSignificantDigits: 3,
        }).format(totalValue);

        //console.log(
        //   `${nombre} entan en ${totalValue} BsS y en dolares son ${precioP} $`
        //)

        const listProduct = document.createElement("div");
        listProduct.textContent = `${nombre} entan en ${totalValue} BsS y en dolares son ${precioP} $ \n `;

        product.appendChild(listProduct);

        console.log(listProduct);

        const cardConten = document.createElement("div");

        cardConten.innerHTML = ` <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${img}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${nombre}</h5>
    <p class="card-text">Estan en <strong> ${totalValue}  BsS </strong>  <br> En dolares son <strong>  ${precioP} $ </strong> \n </p>
    
  </div>
</div>`;

card.appendChild(cardConten);


        
      });
  }
}
let producto = new Producto();
producto.calcular("Impresiones", 0.25 , "https://www8.hp.com/content/dam/sites/es/worldwide/printers/business-printers/section_2_bundle_2_image_2.jpg");
producto.calcular("Tetas", 0.2 , "https://i.ytimg.com/vi/5_lvRH8WMN4/maxresdefault.jpg");
producto.calcular("Retornable", 0.84, "https://labatata.com.ve/1664-large_default/coca-cola-retornable-125l.jpg");

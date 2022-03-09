function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmDolar = valorEmRealNumerico / 5.02;
    console.log(valorEmDolar.toFixed(2));
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Dólar é $ " + valorEmDolar.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
  
    var valorEmEuro = valorEmRealNumerico / 5.52;
    console.log(valorEmEuro.toFixed(2));
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é € " + valorEmEuro.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
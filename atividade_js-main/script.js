function calcularDesconto() {
    var precoOriginal = parseFloat(document.getElementById('precoOriginal').value);
    var percentualDesconto = parseFloat(document.getElementById('percentualDesconto').value);

    if (isNaN(precoOriginal) || isNaN(percentualDesconto)) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    var precoComDesconto = precoOriginal - (precoOriginal * (percentualDesconto / 100));

    document.getElementById('precoComDesconto').innerText = precoComDesconto.toFixed(2);
}
   

function calcularJuros() {
    var capital = parseFloat(document.getElementById('capital').value);
    var taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    var periodo = parseInt(document.getElementById('periodo').value);

    if (isNaN(capital) || isNaN(taxaJuros) || isNaN(periodo)) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    //instruções (var - 2 cálculos)
    var jurosSimples = (capital * taxaJuros * periodo) / 100
    var montanteComJuros = capital + jurosSimples
    document.getElementById('montanteComJuros').innerText = montanteComJuros.toFixed(2);
}

function calcularOperacao() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var operacao = document.getElementById('operacao').value;
    var numero2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite valores válidos.");
        return;
    }

    var resultado = 0;

    switch (operacao) {
        case 'soma':
            //instruções resultado
            resultado = numero1 + numero2;
            break;
        case 'subtracao':
            //instruções resultado
            resultado = numero1 - numero2;
            break;
        case 'multiplicacao':
            //instruções resultado
            resultado = numero1 * numero2;
            break;
        case 'divisao':
            if (numero2 !== 0) {
                //instruções resultado
                resultado = numero1 / numero2;
            } else {
                alert("Não é possível dividir por zero.");
                return;
            }
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById('resultado').innerText = resultado.toFixed(2);
}

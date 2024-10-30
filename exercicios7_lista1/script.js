function calcularMedia() {
    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const altura = parseFloat(document.getElementById("altura").value)

    const media = (lado1 + lado2 * altura)* 2;

    // Exibe a média
    document.getElementById("resultado").innerText = "A média das notas é: " + media.toFixed(2);
}
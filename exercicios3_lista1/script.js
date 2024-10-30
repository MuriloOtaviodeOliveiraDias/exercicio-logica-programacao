function calcularSoma(){
    const num1 =
    parseFloat(document.getElementById("num1").value);
    const num2 = 
    parseFloat(document.getElementById(num2).value);
    const soma = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + soma;
}
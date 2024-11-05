function coverter(){
    const fahrenheit =
document.getElementById("fahrenheit").value;
const celsius = (5*(fahrenheit - 32))/9;
document.getElementById("resultado").innerText = "A temperatura em Celsius é: " + celsius.toFixed(2) + "°C";
}
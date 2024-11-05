function coverter(){
    const celsius = 
    document.getElementById("celsius").value;
    const fahrenheit = (celsius *9/5) + 32;
    document.getElementById("resultado").innerText = "A temperatura em fahrenheit é: " + fahrenheit.toFixed(2)+ "°F"
 
}
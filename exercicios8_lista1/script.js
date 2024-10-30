
        function calcularSalario() {
            const valorPorHora = parseFloat(document.getElementById("valorPorHora").value);
            const horasTrabalhadas = parseFloat(document.getElementById("horasTrabalhadas").value);

            if (isNaN(valorPorHora) || isNaN(horasTrabalhadas)) {
                document.getElementById("resultado").innerText = "Por favor, insira valores válidos.";
                return;
            }
            
            const salarioTotal = valorPorHora * horasTrabalhadas;
            document.getElementById("resultado").innerText = "O seu salário total no mês é: R$ " + salarioTotal.toFixed(2);
        }
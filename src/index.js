function calculete(){
    var nome = document.getElementById("nome").value;
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var imc= peso / altura**2; 
    var resultado=""
    if (imc < 18.5) {
        resultado = nome + ", você está abaixo do peso.";
    } else if (imc < 24.9) {
        resultado = nome +", Seu Peso está normal.";
    } else if (imc < 29.9) {
        resultado = nome + ", Você está com exesso de peso.";
    } else if (imc < 34.9) {
        resultado = nome + ", Você está com Obesidade de classe I.";
    } else if (imc < 39.9) {
        resultado = nome + ", Você está com Obesidade de classe II.";
    } else if (imc > 40){
        resultado =  nome + ", Você está com Obesidade de classe III.";
    }
    document.getElementById("resultado").innerText= resultado;
        
    }
    


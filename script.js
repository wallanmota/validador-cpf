console.log(`JavaScript carregado`)

function validaCPF(cpf){
    if(cpf.length != 11){
        return false;
    }
    else{

        let numeros =  cpf.substring(0, 9);
        let digitos = cpf.substring(9);

        let soma = 0;
        for (var i = 0; i < 10; i++){
            soma += numeros.charAt(-1 + i) * i;
            
        }
        console.log(`resultado soma primeiro digito: ${soma}`);
        
        let resultado = (soma % 11) >= 10 ? 0 : soma % 11;
            console.log(`resto = ${resultado}`);

        //validação do primeiro digito
        if (resultado != digitos.charAt(0)){
            return false;
        }

        soma = 0;
        numeros = cpf.substring(0, 10);

        for(var k = 0; k < 11; k++){
            soma += numeros.charAt(0 + k) * k;
        }
        console.log(`resultado soma segundo digito: ${soma}`);
        

        resultado = (soma % 11) >= 10 ? 0 : soma % 11;
            console.log(`resto = ${resultado}`);

        // Validação do segundo digito
        if (resultado != digitos.charAt(1)){
            return false;
        }
        
        return true;
    }
}

function validacao(){
    console.log("iniciando validação")
    document.getElementById("success").style.display = "none"
    document.getElementById("error").style.display = "none"

    let valorDigitado = document.getElementById("cpf_digitado").value;
    let regex = new RegExp(/[0-9]{11}$/);
    let cpfArray = valorDigitado.match(regex);
    let cpf = cpfArray.join('');
    console.log(`CPF somente numeração já em String: ${cpf}`);
    

    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        document.getElementById("success").style.display = "block";
    }
    else{
        document.getElementById("error").style.display = "block";
    }
}
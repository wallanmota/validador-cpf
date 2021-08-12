console.log("JavaScript carregado")

function validacao(){
    console.log("iniciando validação")
    document.getElementById("success").style.display = "none"
    document.getElementById("error").style.display = "none"

    let cpf = document.getElementById("cpf_digitado").value;
    console.log(cpf);

    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        document.getElementById("success").style.display = "block";
    }
    else{
        document.getElementById("error").style.display = "block";
    }
}
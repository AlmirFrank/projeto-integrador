
function enviardados() {
    var user = dadosCadastro.user.value;
    var telefone = dadosCadastro.telefone.value;
    var cpf = dadosCadastro.cpf.value;
    var rg = dadosCadastro.rg.value;
    var email = dadosCadastro.email.value;
    var senha = dadosCadastro.sexo.value;

    if (user == "") {
        alert("Por Favor, Informe o Seu Nome!")
        dadosCadastro.user.focus();
        return false;
    }

    if (telefone == "") {
        alert("Por Favor, Insira um Número Válido!")
        dadosCadastro.telefone.focus();
        return false;
    }

    if (cpf == "") {
        alert("Por Favor, Insira um CPF Válido!")
        dadosCadastro.cpf.focus();
        return false;
    }

    if (rg == "") {
        alert("Por Favor, Insira um RG Válido!")        
        dadosCadastro.rg.focus();
        return false;
    }

    if(email.indexOf("@") == -1 ||
      email == "" || email == null) {
        alert("Por Favor, Informe um E-mail Válido!");
        dadosCadastro.email.focus();
        return false;
    }

    if (senha == "") {
        alert("Por Favor, Insira uma Senha Válida!")        
        dadosCadastro.senha.focus();
        return false;
    }
    alert("Cadastro Realizado!"); 
}

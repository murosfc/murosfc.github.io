function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

var email =prompt ("Digite um e-mail");
if (validarEmail(email))
{
    window.alert("E-mail válido");
}
else 
{
    window.alert("E-mail inválido");
}
function parouimpar(n)
{
    if (n=>0)
    {
        n%2 == 0 ? window.alert("Número "+ n +" é par") : window.alert("Número "+ n +" é ímpar")
    }
}   

var numero = prompt ("Digite um número para verificar se é par ou ímpar");
parouimpar(numero);
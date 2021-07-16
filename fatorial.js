function fatorial(n)
{
    var fat=0;
    if (n==0)
    {
        return 1;
    }
    else
    {
        fat=n*fatorial(n-1);
    }
    return fat;
}
var numero = prompt ("Digite um número para calcular o fatorial");
window.alert("Fatorial de "+numero+" = "+fatorial(numero));
function testerpalindromo (palavra)
{
    var j = palavra.length-1;
    var teste=0;    
    for (var i=0;i<=j;i++)
    {        
        if (palavra[i] == palavra[j])
        {
            j--;                       
        }
        else 
        {
            teste++;
        }        
    }
    teste==0 ? window.alert("A palavra é palindromo"): window.alert("A palavra não é palindromo");
}

var palavra =prompt ("Digite uma palavra para testar se é palindromo");
testerpalindromo(palavra);
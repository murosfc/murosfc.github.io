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
    teste==0 ? window.alert("A palavra '"+palavra+"' é um palíndromo"): window.alert("A palavra '"+palavra+"' não é um palíndromo");
}

var palavra =prompt ("Digite uma palavra para testar se é umpalíndromo");
testerpalindromo(palavra);
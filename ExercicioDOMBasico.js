function leituraEscrita() 
{
    let input = document.getElementById('in');
    let out = document.getElementById('out');
    out.innerHTML = 'Você está digitando: "'+input.value+'"';
}
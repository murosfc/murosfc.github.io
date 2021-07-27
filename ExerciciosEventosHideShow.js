function MostrarOcultar(id1,id2)
{
    if (document.getElementById(id1).style.display == 'none')
    {
        document.getElementById(id1).style.display = '';
    }
    else
    {
        document.getElementById(id1).style.display = 'none';
    }

    if (document.getElementById(id2).textContent == "Ocultar Conteúdo")
    {
        document.getElementById(id2).textContent = "Mostrar Conteúdo";
    }
    else
    {
        document.getElementById(id2).textContent = "Ocultar Conteúdo";
    }
}

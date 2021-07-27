function mudaImagem()
{
    if (document.getElementById('off').src == "https://murosfc.github.io/lampada/lampada_off.gif")
    {
        document.getElementById('off').src = "https://murosfc.github.io/lampada/lampada_on.gif";
    }
    else
    {
        document.getElementById('off').src = "https://murosfc.github.io/lampada/lampada_off.gif";
    }
}
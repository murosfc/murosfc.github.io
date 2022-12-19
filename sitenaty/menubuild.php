<?php
function buildmenu()
{
    $html ='<header class="header">';
    /*$html.= '<span class="headerTitle" style="font-size: 1.5em">';
    $html.= 'Nathália Xavier Consultoria &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</span>';*/
    $html.= ' <button class="menu-open">';
    $html.= '<span class="material-icons headerButtonSpan">menu</span></button>';
    $html.= '<div class="overlay"></div>';
    $html.= '<nav class="menu">';
    $html.= '<a href="#" class="menu-close">&times;</a>';
    $html.= '<ul>';
    $html.= '<li><a href="index.html" target="_blank">Inicio</a></li>';
    $html.= '<li><a href="analisedecor.html" target="_blank">Análise de coloração pessoal</a></li>';
    $html.= '<li><a href="#" target="_blank">Consultoria completa</a></li>';
    $html.= '<li><a href="consultoriaonline.html" target="_blank">Consultoria online</a></li>';
    $html.= '<li><a href="revitarmario.html" target="_blank">Revitalização de armário</a></li>';
    $html.= '<li><a href="personalshopper.html" target="_blank">Personal shopper</a></li>';
    $html.= '<li><a href="packingwstyle.html" target="_blank">Packing with style</a></li>';
    $html.= '</ul>';
    $html.= '</nav>';
    $html.= '</header>';    
    echo $html;
}
?>
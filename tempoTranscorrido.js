function tempoTranscorrido(datalida)
{
    hoje = new Date();    
    var tt = (hoje.getTime() - datalida.getTime()); 
    var dias = tt/86400000;
    var ano = parseInt(dias/365);
    dias = dias - ano*365;
    var mes = parseInt(dias/30);
    dias= dias - mes*30;
    var dia = parseInt(dias);
    window.alert (ano+" ano(s), " +mes+ " mes(es) e "+dia+" dias");
}

var datalida = prompt ("Digite uma data para calcular o tempo transcorrido:\nFormato mm/dd/aaaa'");
datacalculo = new Date(datalida);
window.alert (datacalculo);
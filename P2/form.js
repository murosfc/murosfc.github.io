function ValidaInfo()
{
    
    nome=document.getElementById("nome").value;
    telefone=document.getElementById("telefone").value;
    checkin= new Date(document.getElementById("checkin").value.replace(/-/g, '\/').replace(/T.+/, ''));
    checkout =new Date(document.getElementById("checkout").value.replace(/-/g, '\/').replace(/T.+/, ''));
    single = document.getElementById("single").checked;
    double = document.getElementById("double").checked;
    triplo =document.getElementById("triplo").checked;
    hoje = new Date(); 

    if ( nome == "" || telefone == "" || checkin =="" || checkout =="")
    {
        window.alert ("Preencha todas as informações e tente novamente!");
    }
    else if (!single && !double && !triplo)
    {
        window.alert ("Escolha o tipo de acomodação e tente novamente!");
    }
    else if (checkin >= checkout)
    {
        window.alert ("A data do check-out deve ser posterior ao check-in, corrija e tente novamente!");
    }
    else if (checkin<hoje)
    {
        window.alert ("A data do check-in deve ser maior ou igual a data de hoje, corrija e tente novamente!");
    }
    else CalcularReserva();
}

function AtualizaCriancas(hospedes)
{
    if (hospedes == 1)
    {
        document.getElementById("qt_criancas").max = 3;
    }
    else if (hospedes == 2)
    {
        document.getElementById("qt_criancas").max = 2;
    }
    else if (hospedes == 3)
    {
        document.getElementById("qt_criancas").max = 1;
    }
    document.getElementById("qt_criancas").value=0;
}

function CalcularReserva()
{
    checkin= new Date(document.getElementById("checkin").value.replace(/-/g, '\/').replace(/T.+/, ''));
    checkout =new Date(document.getElementById("checkout").value.replace(/-/g, '\/').replace(/T.+/, ''));
    diarias = (checkout.getTime() - checkin.getTime())/86400000; //86400000 milisegundos em um dia
    
    let single = document.getElementById("single").checked;
    let double = document.getElementById("double").checked;
    let triplo =document.getElementById("triplo").checked;

    if (single)
    {
        valorDiaria=139;
    }
    else if (double)
    {
        valorDiaria=220;
    }
    else valorDiaria=340;

    quantidadeCrianca= parseInt(document.getElementById("qt_criancas").value);

    total = (valorDiaria*diarias+diarias*quantidadeCrianca*30);  
    
    //apaga calculo anterior se já feito
    if (document.getElementById("total-calculado") != null)
    {
        document.getElementById("total-calculado").remove();
    }
    
    var resultado = document.createElement("TEXTAREA");        // Cria text area para resutado
    resultado.id = "total-calculado";
    resultado.innerHTML = "Total da Reserva R$ " + total.toFixed(2) ;                // Insere  total
    document.getElementById("total").appendChild(resultado);     // Append o text area para div id "total"

}
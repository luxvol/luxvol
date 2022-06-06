var numer=Math.floor(Math.random()*5)+1;
function schowaj()
{
    $("#slider").fadeOut(500);
}
function zmienslajd()
{
    numer++;if(numer>5) numer=1;
    var plik = "<img src=\"obrazy/slajd"+numer+"\"/>";
    document.getElementById("slider").innerHTML=plik;
    $("#slider").fadeIn(500);
    setTimeout("zmienslajd()",5000);
    setTimeout("schowaj()",4500)
}
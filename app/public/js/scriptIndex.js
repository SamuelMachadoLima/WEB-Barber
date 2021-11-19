$(function(){
    $("#staticCNPJ").mask("00.000.000/0000-00")   
    $("#staticCPF").mask("000.000.000-00")  
 })

 function myFunction() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
       x.className += " responsive";
   } else {
       x.className = "topnav";
   }
}

$(document).ready(function () {
   $('#defineUsuario').on('click', function () {
       $('#BarbeiroOuCliente').modal('show');
   });
   $('#defineUsuarioLogin').on('click', function () {
       $('#BarbeiroOuClienteLogin').modal('show');
   });

   $(".btnEndStep1").click(function () {
       $("#step1").addClass('hideMe');
       if ($(this).attr('id') == "logarBarbearia") {
           $("#barbeariaLogin").removeClass('hideMe');
       } else if ($(this).attr('id') == "logarCliente") {
           $("#clienteLogin").removeClass('hideMe');
       }
   });
   $("#defineUsuarioLogin").click(function () {
       $("#step1").removeClass('hideMe');
       $("#barbeariaLogin").addClass('hideMe');
       $("#clienteLogin").addClass('hideMe');
   });

});
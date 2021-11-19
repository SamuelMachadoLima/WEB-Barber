$(function(){
    $("#campoCNPJ").mask("00.000.000/0000-00")   
    $("#campoCEP").mask("00.000-000")   
 })

 $(document).ready(function () {
     $("#botaoproximo").click(function () {
         $(".step1").addClass('hideMe');
         $(".step2").removeClass('hideMe');
     });
     $("#botaoanterior").click(function () {
         $(".step2").addClass('hideMe');
         $(".step1").removeClass('hideMe');
     });
 });

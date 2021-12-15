$(function(){
    $("#campoCPF").mask("000.000.000-00")   
    var behavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  options = {
      onKeyPress: function (val, e, field, options) {
          field.mask(behavior.apply({}, arguments), options);
      }
  };
  
  $("#campoTelefone").mask(behavior, options);

    $("#campoCEP").mask("00.000-000")
 })
 function validarSenha(e){
    NovaSenha = document.FormSenha.NovaSenha.value;
    CNovaSenha = document.FormSenha.CNovaSenha.value;
    if (NovaSenha != CNovaSenha){ 
        e.preventDefault();
        alert("SENHAS DIFERENTES! Por favor, digite senhas iguais!");
        return false;
     }
    alert("Cadastro concluido!");
    return true;
}
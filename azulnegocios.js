'use strict';
function AzulNegocios(){
  if(!(this instanceof AzulNegocios)){
    return new AzulNegocios();
  }
}
var proto = {
  alert:function(msg){
    if((msg instanceof Array) || (msg instanceof Object)){
      throw "A mensagem não pode ser um objeto e nem um array!";
    }
    window.alert(msg);
  }
};

AzulNegocios.prototype = proto;

AzulNegocios.__proto__ = proto;

window.AzulNegocios = AzulNegocios;

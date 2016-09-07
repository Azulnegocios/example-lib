'use strict';
(function(window,document){
/*@param {String} query*/
function AzulNegocios(query){
  if(!(this instanceof AzulNegocios)){
    return new AzulNegocios((query || 'undefined'));
  }
  if((!query || query === 'undefined') && !(typeof query == 'string')){//verificando se o parametro 'query' é verdadeira e se é uma string
    throw "O parametro informado é do tipo "+(typeof query)+", e só aceito do tipo String :(";
  }else{
    var element = document.querySelectorAll(query);
    this.elements = (element.length > 1 ? element : element[0]);
  }
}
var proto = {
  alert:function(msg){
    if((msg instanceof Array) || (msg instanceof Object)){//verificando para que só string, number e date sejam alertados
      throw "A mensagem não pode ser um objeto e nem um array!";
    }
    window.alert(msg);
  },
  click: function(callback){
    //verificando se tem mais de um elemento na lista, e adicionando evento aos mesmos
    if(this.elements.length > 1){
      for(var i =0; i <= this.elements.length;i++){
        if(this.elements[i]){
          this.elements[i].addEventListener('click',callback);
        }
      }
    }else{
      this.elements.addEventListener('click',callback);
    }
  }
};
//adicionando metodos
AzulNegocios.prototype = proto;

AzulNegocios.__proto__ = proto;
//adicionando nossa lib ao escopo de window
window.AzulNegocios = AzulNegocios;

})(window,document);

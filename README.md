# Exemplo de como criar sua propria lib no estilo de JQuery
## Modo de uso
#### Arquivo de exemplo de uso: ./test/index.html
>                Importanto a lib

```
 <script src="../azulnegocios.js" charset="utf-8"></script>
 <script type="text/javascript">
   //Formas de uso
   /*usando fuções adicionadas dentro da propriedade prototype*/
   var azulnegocios = new AzulNegocios();
   azulnegocios.alert("Operador new");
   /*end*/
   /*usando fuções adicionadas dentro da propriedade prototype sem a necessidade do operador new*/
   AzulNegocios().alert("Sem operador new");
   /*end*/
   /*usando fuções adicionadas dentro da propriedade __proto__ e sem a necessidade do operador new*/
   AzulNegocios.alert("Sem operador new e usando o __proto__");
   /*end*/
 </script>
```

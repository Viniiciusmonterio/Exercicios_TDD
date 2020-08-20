function verificarLetras(letras){
   return ['a', 'e', 'i', 'o', 'u'].indexOf(letras) > -1;
}	

function consoante(letras){
   return !verificarLetras(letras);
   }
module.exports.verificarLetras = verificarLetras;
module.exports.consoante = consoante;
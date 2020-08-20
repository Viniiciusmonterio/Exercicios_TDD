
function calcularJuros(dia){
	var juros


	if(dia <= 30 )
		juros = 5
	

	if(dia >= 31 && dia < 60)
		juros = 10

	if(dia >= 60)
		juros = 15

	return juros
}	

module.exports.calcularJuros = calcularJuros;
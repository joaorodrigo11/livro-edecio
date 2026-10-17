const prompt  = require("prompt-sync")()
const funcionario = prompt("Nome do funcionário: ")
const salario = Number(prompt("Digite o salário: "))
const tempo = Number(prompt("Há quanto tempo ele trabalha aqui (anos): "))
const quadrienios = Math.floor(tempo / 4)
const acrescimo = salario * quadrienios / 100
console.log(`O funcionário ${funcionario} tem direito a ${quadrienios} quadrienios e, portanto, seu salário final será de R$: ${(salario+acrescimo).toFixed(2)}`)
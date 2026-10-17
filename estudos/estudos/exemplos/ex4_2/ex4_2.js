// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// adicionando um ouvinte ao evento submit do form
frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita envio do form
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2) //Math.pow eleva ao quadrado
} else {
    peso = 21 * Math.pow(altura, 2)
}

// apresenta a resposta no h3 do HTML
resp.innerText = `${nome}: Seu peso ideal é: ${peso.toFixed(2)} kg`
})
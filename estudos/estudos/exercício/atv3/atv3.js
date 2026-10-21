const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)

    if (Number.isInteger(raiz)) {
        resp.innerText = `A raiz quadrada de ${numero} é: ${raiz.toFixed(2)}`
    } else {
        resp.innerText = `O número ${numero} não possui raiz quadrada exata`
    }
})
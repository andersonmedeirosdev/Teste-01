function validar() {
    let l1 = document.getElementById('lado1')
    let l2 = document.getElementById('lado2')
    let l3 = document.getElementById('lado3')
    let res = document.getElementById('res')
    let lado1 = Number(l1.value)
    let lado2 = Number(l2.value)
    let lado3 = Number(l3.value)
    if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado1 + lado3 < lado2) {
        res.innerHTML = 'Não é um triângulo'
    } else if (lado1 == lado2 && lado2 == lado3) {
        res.innerHTML = 'Triângulo equilátero'
    } else if (lado1 == lado2 && lado2 != lado3) {
        res.innerHTML = 'Triângulo isósceles'
    } else {
        res.innerHTML = 'Triângulo escaleno'
    }
}
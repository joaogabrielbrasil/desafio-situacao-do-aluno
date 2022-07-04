function mediaAluno() {
    var aluno = window.prompt('Qual o nome do aluno: ')
    var nota1 = Number(window.prompt(`Primeira nota do(a) aluno(a) ${aluno}: `))
    var nota2 = Number(window.prompt(`Segunda nota do(a) aluno(a) ${aluno}: `))
    var media = (nota1 + nota2) / 2

    var msg1 = window.document.querySelector('#msg1')
    var msg2 = window.document.querySelector('#msg2')
    var msg3 = window.document.querySelector('#msg3')

    msg1.innerHTML = `Analizando a situação do(a) aluno(a) <mark>${aluno}</mark>`
    msg2.innerHTML = `Notas <mark>${nota1.toFixed(2)}</mark> e <mark>${nota2.toFixed(2)}</mark> a media é <mark>${media.toFixed(2)}</mark>`

    if (media < 3) {
        msg3.innerHTML = `${media.toFixed(2)} Media abaixo de 3. Aluno <mark>Reprovado</mark>`

    } else if (media > 3 && media <= 6) {
        msg3.innerHTML = `${media.toFixed(2)} Media entre 3 e 6. Aluno de <mark>Recuperação.</mark>`

    }else {
        msg3.innerHTML = `${media.toFixed(2)} acima de 6. Aluno <mark>Aprovado.</mark>`
    }
}
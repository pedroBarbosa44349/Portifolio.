function somar () {
    let n1 = 0;
    let n2 = 0;


    n1 = Number(window.prompt('digite um numero:'));
    n2 = Number(window.prompt('digite um numero:'));
    let soma = n1 + n2
    alert (soma);

    if(soma > 10){
        alert("O resultado é maior do que 10");
    } else {
        alert("Não é maior do que 10");
    }
}

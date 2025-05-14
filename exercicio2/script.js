    let ano= 0;
    let idade;
//declara a função e coloquei duas variáveis
    ano = Number(window.prompt('Digite seu ano de nascimento:'));
       idade = 2025 - ano;
    alert("sua idade é " + idade);
//declara uma função para cada variável
       if( idade >18){
              alert("Você pode tirar a carteira")
       } else{
              let dif = 18 - idade;
       alert("Você ainda não pode tirar a carteira pois faltam " + dif + " para você ter 18 anos")
       }
       //mostra que se vc tem idade para tirar a carteira ou não
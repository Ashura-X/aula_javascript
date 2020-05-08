function button (){
    //alert("Clicou botão OK");
    document.getElementById("section").innerHTML = "Teste ok!";
}

function redirect() {
    window.open("http://www.ezaro.com.br");
}

function change(elemento) {
    console.log(elemento.value)
}


/*//datas

var date = new Date();
alert(date);

//Condicionais, laços de repetição e Date

var contador;
for (contador=1; contador <=5; contador++){
    alert(contador);
}


var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}





/*
var idade = prompt("Digite a sua idade para a verificação de maioridade:");
if (idade > 18) {
    alert("Maior de 18 anos");
} else {
    alert("Menor de 18 anos");
};   


var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);

/*
var name = "Zaro";
var idade = 45;
var total = 5;
var texto = "Covid19 é a praga do momento!"


alert("Bem vindo " + name + "Sua idade é: " + idade);
console.log(name);
console.log(idade + total);
console.log(texto.toLocaleUpperCase());


var cesta = ["maça", "laranja", "abacaxi"];
cesta.push("melancia");

//console.log(cesta.reverse()); 
console.log(cesta.toString());
console.log(cesta.join(" / "));
//alert(cesta[0]);

*/
let data = new Date();
let anoAtual = data.getFullYear();
let username = prompt("Olá, bem vindo a ativ07, qual o seu nome?");
let year = prompt(`Oi ${username}! Me diga o ano em que vc nasceu:`);
let idade = anoAtual-year

console.log("PROJETO FEITO PELO ALUNO DO ENXURRADA DE BITS 2023 -- HENRIQUE DUDAK");

alert(`Olá,seu nome é ${username} e você tem ${idade} anos`);

if (idade==15) {
    alert(`Que legal, você tem a mesma idade que eu ${username}.`);
}else{
    alert(`Foi um prazer te conhecer ${username}.`);
}

if (idade < 0) {
    alert('UAI, vc é do futuro???')
}

document.getElementById("ano-atual").textContent = anoAtual;

  


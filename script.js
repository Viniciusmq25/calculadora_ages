const resultado = document.getElementById('resultado');
const calculo_cima = document.getElementById('calculo-cima');
const botaoigual = document.getElementById('igual');

function zerar(){
  resultado.value = '0';
}

zerar();

function adicionar(opNum) {
  if (resultado.value == '0'){
    resultado.value = '';
  }
  resultado.value += opNum;
}

function limpar() {
  if (resultado.value == '0' || resultado.value == ''){
    calculo_cima.innerHTML = '';
  } else{
    resultado.value = '';
  }
  zerar();
}

function apagar() {
  resultado.value = resultado.value.slice(0, -1);
}

function operation(op){
  if (op == '%'){
    calculo_cima.innerHTML = resultado.value;
    limpar();
    calculo_cima.innerHTML += op;
  } else{
    calculo_cima.innerHTML = resultado.value;
    limpar();
    calculo_cima.innerHTML += op;
  }
} 

function calcular() {
  if (calculo_cima.innerHTML.includes('%')){
    calculo_cima.innerHTML += resultado.value;
    calculo_cima.innerHTML = calculo_cima.innerHTML.replace('%', '*');
    resultado.value = eval(calculo_cima.innerHTML) /100;
  } else{  
    calculo_cima.innerHTML += resultado.value;
    resultado.value = eval(calculo_cima.innerHTML);
  }
}

function invertion(){
  resultado.value = resultado.value * -1;
}

document.addEventListener('keydown', function(event){
  if (event.key == 'Enter'){
    calcular();
  }
});
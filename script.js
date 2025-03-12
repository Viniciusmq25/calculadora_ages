const resultado = document.getElementById('resultado');
const calculo_cima = document.getElementById('calculo-cima');

function adicionar(opNum) {
  resultado.value += opNum
}

function limpar() {
  if (resultado.value == ''){
    calculo_cima.innerHTML = ''
  } else{
    resultado.value = ''
  }
}

function apagar() {
  resultado.value = resultado.value.slice(0, -1);
}

function operation(op){
  calculo_cima.innerHTML = resultado.value
  limpar()
  calculo_cima.innerHTML += op
} 

function calcular() {
  

  calculo_cima.innerHTML += resultado.value
  resultado.value = eval(calculo_cima.innerHTML)
  calculo_cima.innerHTML = ''
}
/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  if (!Array.isArray(array) || array.length === 0 || array.some((item) => typeof item !== 'number')) {
    return undefined;
  } // Verifica se é array, não é vazio e se algum item do array não é typeof number

  const soma = array.reduce((acumulador, valor) => acumulador + valor, 0); // Acumula e soma cada iteração
  const media = soma / array.length; // Divide soma pelo número de elementos 

  const mediaArredondada = Math.round(media); // Arredonda o resultado 

  return mediaArredondada;
};

console.log(average([-11, 2, 5]));

module.exports = average;

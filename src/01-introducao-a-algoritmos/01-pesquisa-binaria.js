// Binary Search

/**
 * Procura um número numa lista ordenada
 * @param {number[]} lista array ordenado
 * @param {number} item número a ser pesquisado
 * @returns {(number | null)} um número se o valor for encontrado ou NULL se não for
 */
const pesquisaBinaria = (lista, item) => {
  // baixo e alto acompanham a parte da lista que você está procurando
  let baixo = 0;
  let alto = lista.length - 1;

  // enquanto não encontra o item na lista...
  while (baixo <= alto) {
    const meio = Math.floor((baixo + alto) / 2); //verifica o item do meio da lista
    const chute = lista[meio];

    if (chute === item) { // se achar o item
      return meio; // retorna o resultado
    }
    if (chute > item) { // se o chute for maior que o item procurado
      alto = meio - 1;
    } else { // se o chute for menor que o item procurado
      baixo = meio + 1;
    }
  }

  return null;
};

const listaOrdenada = [1, 3, 5, 7, 9];
const listaOrdenada100 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];

console.log(pesquisaBinaria(listaOrdenada, 3)); // 1
console.log(pesquisaBinaria(listaOrdenada, -1)); // null
console.log(pesquisaBinaria(listaOrdenada100, 67)); // 66

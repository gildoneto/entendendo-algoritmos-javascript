*Para uma lista de *n* números, a pesquisa binária precisa de log<sub>2</sub>*n* para retornar o valor correto, enquanto a pesquisa simples precisa de *n* etapas.*

## EXERCÍCIOS

**1.1 Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?**

<details>
  <summary><b>RESPOSTA 1.1</b></summary></br>
    Para 128 nomes, a fórmula para uma pesquisa binária será: </br>
    <b>log<sub>2</sub>128</b> (quantas vezes deve-se multiplicar a base 2 para chegar ao número 128?)
Ou seja, 7 vezes = <b>2<sup>7</sup></b> → <b>log<sub>2</sub>128</b> = 7
</details>

-------

**1.2 Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?**



<details>
  <summary><b>RESPOSTA 1.2</b></summary></br>
    Seguindo a lógica da resposta anterior, se tivermos uma lista de 256 nomes, a fórmula para uma pesquisa binária será: </br>
    <b>log<sub>2</sub>256</b>(quantas vezes deve-se multiplicar a base 2 para chegar ao número 256?) </br>
    Ou seja, 8 vezes = <b>2<sup>8</sup></b> → <b>log<sub>2</sub>256</b> = 8
</details>

-------

#### Forneça o tempo de execução para cada um dos casos a seguir em termos da notação Big O.

**1.3 Você tem um nome e deseja encontrar o número de telefone para esse nome em uma agenda telefônica.**

<details>
  <summary><b>RESPOSTA 1.3</b></summary></br>
    Fazendo uma pesquisa binária temos um <i>tempo logarítmico</i> = <b>O(log n)</b>
</details>

-------
**1.4 Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica.** (Dica: Deve procurar pela agenda inteira!)

<details>
  <summary><b>RESPOSTA 1.4</b></summary></br>
    Para procurar em toda a agenda temos o <i>tempo linear</i> = <b>O(n)</b>
</details>

-------
**1.5 Você quer ler o número de cada pessoa da agenda telefônica.**

<details>
  <summary><b>RESPOSTA 1.5</b></summary></br>
    Para ler cada número teríamos o <i>tempo linear</i> = <b>O(n)</b>
</details>

-------
**1.6 Você quer ler os números apenas dos nomes que começam com A. (Isso é complicado! Esse algoritmo envolve conceitos que são abordados mais profundamente no Capítulo 4. Leia a resposta - você ficará surpreso!)**

<details>
  <summary><b>RESPOSTA 1.6</b></summary></br>
    ...
</details>


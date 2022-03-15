*Para uma lista de *n* números, a pesquisa binária precisa de log<sub>2</sub>*n* para retornar o valor correto, enquanto a pesquisa simples precisa de *n* etapas.*

**EXERCÍCIOS**

**1.1 Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?**

***RESPOSTA:***

Para 128 nomes, a fórmula para uma pesquisa binária será:
***log<sub>2</sub>*128**** (quantas vezes deve-se multiplicar a base 2 para chegar ao número 128?)
Ou seja, 7 vezes = ***2<sup>7</sup>*** -> ***log<sub>2</sub>*128* = 7***

-------

**1.2 Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?**

***RESPOSTA:***

Seguindo a lógica da resposta anterior, se tivermos uma lista de 256 nomes, a fórmula para uma pesquisa binária será:
***log<sub>2</sub>*256**** (quantas vezes deve-se multiplicar a base 2 para chegar ao número 256?)
Ou seja, 8 vezes = ***2<sup>8</sup>*** -> ***log<sub>2</sub>*256* = 8***
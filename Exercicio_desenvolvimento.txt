Exercício de desenvolvimento de sistemas
O desafio consiste em desenvolver uma versão reduzida e simplificada de um
sistema de atendimento ao contribuinte, que será utilizado pelo setor de
protocolo de uma Prefeitura. O sistema deve permitir que os atendentes
registrem protocolos para as demandas dos contribuintes atendidos.
Requisitos funcionais:
1. O sistema deverá possuir dois tipos de cadastro: 1) pessoa e 2) protocolo
2. O sistema deverá possibilitar o cadastro de pessoas com as seguintes
informações: id, nome, data de nascimento, cpf, sexo, cidade, bairro, rua,
número e complemento.
3. O id da pessoa será gerado automaticamente pelo sistema, e não poderá
se repetir, ou seja, será do tipo auto incremento.
4. Os seguintes campos do cadastro de pessoas devem ser obrigatórios:
nome, data de nascimento, cpf e sexo.
5. O sistema deverá possibilitar o registro dos protocolos com as seguintes
informações:
· Número - Corresponde ao id da tabela, este dado deve ser gerado
automaticamente pelo sistema, seguindo a sequência, portanto
não deve ser incluído como campo no formulário de cadastro
· Descrição - Campo onde a demanda do contribuinte será descrita,
portanto deve possibilitar uma grande quantidade de caracteres
· Data - Campo para registro da data de abertura do protocolo, que
pode ser a data atual ou pode ser uma data retroativa, para o caso
do protocolo ser registrado no sistema em momento posterior ao
atendimento, portanto deve haver um campo no formulário de
forma que o atendente possa informar a data
· Prazo - Quantidade de dias para que a demanda seja solucionada
· Contribuinte - Aqui o atendente irá informar qual o contribuinte
que é a pessoa demandante do protocolo, este campo deve
permitir selecionar uma das pessoas cadastradas no sistema. Para
que seja registrado o protocolo, portanto, primeiro a pessoa
demandante terá de ser cadastrada no cadastro de pessoas.
6. Todos os campos do protocolo são obrigatórios.
7. Em todos os cadastros o sistema deverá possibilitar a inclusão de novos
registros, alteração de um registro já cadastrado e também a exclusão.
8. O sistema deverá possibilitar ao atendente consultar as pessoas
cadastradas. Também o atendente deverá conseguir consultar os
protocolos registrados e identificar qual é a pessoa demandante.
Requisitos não funcionais:
1. O sistema deve ser desenvolvido em tecnologia Web
2. Os dados devem ser registrados em banco de dados MySQL
3. Utilizar PHP para o back end
Algumas funções extras, que não são obrigatórias, mas que agregam na
avaliação:
1. Restrição de acesso ao sistema com usuário e senha
2. Possibilidade de consulta aos registros utilizando critérios, por exemplo:
consultar todos os protocolos registrados em determinada data.
3. Utilizar framework de componentes para front end
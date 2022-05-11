# Intro 

Este é um projeto/desafio para que possamos praticar as habilidades como Front-end Developer.

Nesse projeto vamos desenvolver uma aplicação para controlar os dados de vendas dos usuários de uma loja online de computadores chamada `Déu Company` (a maior concorrente da DELL rs).

### Modelo de dados

Para obter os dados necessários vamos utilizar a [API](https://github.com/dell-splab/sales-report-api) desenvolvida pelo time de back-end. 

# Instruções iniciais

1. Depois de clonar este repositório faça checkout para branch `dev`.
2. Para qualquer contribuição crie uma nova branch tendo como prefixo o seu primeiro nome (em minúsculas) seguida das palavras-chave designando a tarefa que está trabalhando (ex.: `jeferson-sales-routes`).
3. Em nosso [mural de atividades](https://github.com/orgs/dell-splab/projects/1) certifique-se de adicionar a tarefa que está fazendo e em qual etapa se encontra.
4. Faça um Pull Request! :D 

### Stack

O projeto deverá ser desenvolvido em Angular. Podem ser adicionadas bibliotecas para facilitar o desenvolvimento, mas o design dos componentes deve ser o mais próximo possível ao sugerido pela nossa designer;

# Etapa 1 - Página de Clientes

**Tarefa 1** - Desenvolver uma tela que lista todos os clientes, em forma de tabela com as seguintes informações:
| Nome | Email | Total Gasto | Número de Compras | Data da última compra | Ações |
|:----:|:-----:|:-----------:|:-----------------:|:---------------------:|:-----:|
| Tyler Kennedy | kennedy.t@gmail.com | R$2.528,00 | 1 | 11/05/2022 | (Botão para atualizar) |

**Tarefa 2** - O campo *Ações* de cada linha da tabela será preenchido pelo botão **atualizar**. O botão atualizar abre um modal para o usuário preencher as informações necessárias para a atualização do cadastro de um cliente.

**Tarefa 3** - Incluir um botão para adicionar um novo cliente, na parte superior, que abre um modal para o usuário preencher as informações necessárias para o cadastro. Após o cadastro a lista de clientes deve ser atualizada.

# Etapa 2 - Página de Leads

**Tarefa 1** - Desenvolver uma tela que lista todos os leads (visitantes), em forma de tabela com as seguintes informações:
| Nome | Email | Página acessada |
|:----:|:-----:|:---------------:|
| Sara Morse | morse_s@gmail.com | acessorios |

**Tarefa 2** - Incluir um botão para adicionar um novo lead, na parte superior, que abre um modal para o usuário preencher as informações necessárias para o cadastro. Após o cadastro a lista de leads deve ser atualizada.

**Tarefa 3** - Incluir uma lista de oportunidades de vendas, em forma de tabela com as seguintes informações:
| Nome do Cliente | Nome do Produto (possível venda) | 
|:---------------:|:--------------------------------:|
| Tyler Kennedy | Mouse Dell sem fio WM126 - Preto |

# Etapa 3 - Página de Vendas

**Tarefa 1** - Desenvolver uma tela que lista todas as vendas, em forma de tabela com as seguintes informações:
| Nome do Cliente | Nome do Produto | Data da compra |
|:---------------:|:---------------:|:--------------:|
| Tyler Kennedy | OptiPlex 3090 Micro | 11/05/2022 |

**Tarefa 2** - Nessa tela também deve ter um botão para registrar uma venda, na parte superior, que abre um modal para o usuário preencher as informações necessárias para o cadastro. Após o cadastro a lista de vendas deve ser atualizada.

# Etapa 4 - Página de Reports
As seguintes tarefas compõem uma mesma tela, separada em abas ou seções.

**Tarefa 1** - Desenvolver uma tela que lista as vendas (geral e filtradas por data).

**Tarefa 2** - Desenvolver uma tela que lista as compras dos clientes (geral e filtradas por cliente).

**Tarefa 3** - Desenvolver uma tela que lista os produtos topsellers (geral e filtrados por categoria).

## As próximas tarefas serão opcionais, porém desejáveis

**Tarefa 1** Escrever Unit Tests para os componentes e serviços.

**Tarefa 2** Criar a página de listar produtos da loja (similar às outras listagens, porém o campo ação em cada linha é preenchido com o botão de excluir um produto).

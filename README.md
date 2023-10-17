# consulta_dominio
Projeto de Integração de API de Terceiros para consulta de domínios públicos.

Se o dominio existir irá retornar algumas informações do proprietário do dominio com alguns dados da empresa/proprietário, e caso não exista irá retornar um objeto com mensagem de erro.
![](https://st4.depositphotos.com/29283810/41065/v/1600/depositphotos_410659674-stock-illustration-api-application-programming-interface-providing.jpg)

Projeto em Javascript, com axios e express 
(e nodemon como dependencia de desenvolvedor)

# Finalidade da API

Coletando dados de empresas

A informação retornada da API vem no formato JSON e guarda dados de empresas como:
Ano de fundação, 
Ramo, 
Número de funcionários, 
Cidade, 
País 
e etc.

A API consegue devolver informações a partir dos domínios dos sites das empresas, que é a **Company Enrichment API** do site **Abstract API** (https://www.abstractapi.com/api/company-enrichment), que possui apenas 1 detalhe: esta API exige **autenticação**.

Para isso é necessário criar uma API que autentica e consulta os dados na API externa a partir do domínio requisitado à nossa API. Ao conseguir um resultado da API externa, guarda em um array em arquivo **JSON** chamado **empresas.json**.

Depois de criar a conta no site é necesseário criar um arquivo arquivo chamado "apiKey.js" na pasta "src" e colocar e exportar a chave diretamente no "module.exports = " que o site gerou para testes.

Para garantir a performance utilizaremos programação assíncrona tanto para consultar a API externa com axios quanto para ler / escrever o arquivo JSON.

# Vamos ao funcionamento da API:

**GET /empresas**

A API possui apenas 1 recurso **empresas** que deverá ser acessado através do endereço http://localhost:3000/empresas.

Este recurso receberá apenas requisições GET e deverá possuir um parâmetro obrigatório na rota (path) chamado **dominioEmpresa**.

Ao receber o domínio da empresa pelo parâmetro deveremos enviá-lo à API externa para consultar os dados da empresa.

O endereço da API externa que devemos utilizar para isso é:

```
https://companyenrichment.abstractapi.com/v1/
```

No qual acrescentaremos dois parâmetros query:

- **api_key**: utilizada para a autenticação e deverá possuir como valor a chave de teste que você deve gerar seguindo as instruções a seguir:

  - Crie uma conta no site `https://www.abstractapi.com/`
  - Após criar a conta, na página inicial da Dashboard, escolha a API que deseja integrar. Para esse exercício, você deve escolher a `Company enrichment`
  - Ao clicar na API desejada, abrirá a página com todas as informações da API, inclusive a chave de autenticação.

- **domain**: onde deveremos enviar o domínio da empresa que recebemos no parâmetro da nossa API.

## O objeto que será retornado da API externa será o objeto que retornaremos na nossa API!

## ATENÇÃO
- O objeto retorna  apenas os resultados cujo nome da empresa (propriedade **name** do objeto retornado) venha preenchido corretamente (não venha com null ou undefined).


###### tags: `exercícios` `lógica` `banco de dados` `sql` `postgres` `integracaoapi`

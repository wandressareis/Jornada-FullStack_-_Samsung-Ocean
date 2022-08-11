const express = require('express');
const app = express();

// Sinalizaremos para o express que estaos usando 
// JSON no body das requisições
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get("/oi", function (req, res) {
  res.send("Olá, mundo!");
});

// Nosso backend armazena as pontuações das jogadas
// Criar a lista com as pontuações

const lista = [
  {
    id: 1, 
    nome: "Paulo",
    pontos: 21,
  },
  {
    id: 2, 
    nome: "Daniel",
    pontos: 52,
  },
  {
    id: 3, 
    nome: "Beatriz",
    pontos: 97,
  },
];

// Endpoint RED ALL - [GET] /pontuações
app.get("/pontuacoes", function(req, res) {
  res.send(lista);
});

// Endpoint CREAT - [POST] /pontuações
app.post("/pontuacoes", function(req, res) {
  const item = req.body;
  //console.log(item);

  // Adicionar esse item na lista
  lista.push({
    id: lista.length + 1,
    nome: item.nome,
    pontos: item.pontos,
  });

  res.send("Item criado com sucesso!");
});

app.listen(3000);
const express = require('express');
const msgpack = require('msgpack-lite');

const app = express();
const port = 3000;

app.use(express.json());

// Rota de exemplo que retorna dados em formato MessagePack
app.get('/', (req, res) => {
  const data = {
    nome: "Thiago S Adriano",
    idade: 38,
    cidade: "São Paulo"
  };

  // Codifica os dados em formato MessagePack
  const encodedData = msgpack.encode(data);

  // Define os cabeçalhos de resposta para indicar que estamos enviando dados MessagePack
  res.setHeader('Content-Type', 'application/msgpack');
  res.setHeader('Content-Disposition', 'inline; filename=data.msgpack');

  // Envie os dados MessagePack como resposta
  res.send(encodedData);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

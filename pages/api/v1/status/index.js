function status (request, response) {
  response.status(200).json({chave: "São palavras do utf-8 !@#$%¨&* <?php ?> <br> <h1>TESTE</h1> <br>"});
}

export default status;
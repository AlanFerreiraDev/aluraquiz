/* eslint-disable max-len */
/* eslint-disable func-names */
// Lambda Server, que faz tudo aqui dentro virar um server
// Muito mais fácil de fazer um servidor json
// Apenas fazendo o import e mandando um response com o arquivo .json
// Usar essa configuração para conseguir fazer a API ficar pública, que todo mundo vai conseguir consumir

import db from '../../db.json';

export default function (request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPRIONS,PATCH,DELETE,POST,PUT');

  response.json(db);
}

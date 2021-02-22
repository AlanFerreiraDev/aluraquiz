/* eslint-disable func-names */
// Lambda Server, que faz tudo aqui dentro virar um server
// Muito mais fácil de fazer um servidor json
// Apenas fazendo o import e mandando um response com o arquivo .json
import db from '../../db.json';

export default function (request, response) {
  response.json(db);
}
